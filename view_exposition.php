<?php
// Include database configuration
include 'db_config.php';

// Fetch expositions
$sql = "SELECT * FROM expositions ORDER BY date_posted DESC";
$result = $conn->query($sql);

echo "<h1>Expositions</h1>";
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        echo "<div style='border: 1px solid #ddd; padding: 10px; margin-bottom: 10px;'>";
        echo "<h3>" . $row['title'] . "</h3>";
        echo "<p>" . $row['content'] . "</p>";
        echo "<p><strong>Author:</strong> " . $row['author'] . "</p>";
        echo "<p><em>Posted on:</em> " . $row['date_posted'] . "</p>";
        echo "</div>";
    }
} else {
    echo "No expositions found.";
}

$conn->close();
?>
<?php
// Fetch Bible content using API
if (isset($_GET['verse'])) {
    $verse = urlencode($_GET['verse']);
    $bible_url = "https://bible-api.com/" . $verse;
    $response = file_get_contents($bible_url);
    $bible_data = json_decode($response, true);

    if (isset($bible_data['text'])) {
        echo "<h3>Bible Verse: " . htmlspecialchars($_GET['verse']) . "</h3>";
        echo "<p>" . $bible_data['text'] . "</p>";
    } else {
        echo "<p>Verse not found. Please try again.</p>";
    }
}
?>

<form method="GET" action="">
    <label for="verse">Search Bible Verse:</label>
    <input type="text" id="verse" name="verse" placeholder="e.g., John 3:16" required>
    <button type="submit">Search</button>
</form>

