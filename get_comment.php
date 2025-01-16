<?php
// Connect to the database
$conn = new mysqli('localhost', 'root', '', 'your_database_name');

$sql = "SELECT * FROM comments ORDER BY timestamp DESC";
$result = $conn->query($sql);

$comments = [];
while ($row = $result->fetch_assoc()) {
    $comments[] = $row;
}

echo json_encode($comments);

$conn->close();
?>
