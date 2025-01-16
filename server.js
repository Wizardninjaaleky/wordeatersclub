const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Initialize app
const app = express();
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/word-eaters', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log('Connected to MongoDB'));

// Define Exposition Schema and Model
const expositionSchema = new mongoose.Schema({
  title: String,
  content: String,
  date: { type: Date, default: Date.now },
});

const Exposition = mongoose.model('Exposition', expositionSchema);

// Routes
app.post('/api/expositions', async (req, res) => {
  const { title, content } = req.body;
  try {
    const newExposition = new Exposition({ title, content });
    await newExposition.save();
    res.status(201).json(newExposition);
  } catch (error) {
    res.status(500).json({ error: 'Failed to save exposition' });
  }
});

app.get('/api/expositions', async (req, res) => {
  try {
    const expositions = await Exposition.find().sort({ date: -1 });
    res.json(expositions);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch expositions' });
  }
});

// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
