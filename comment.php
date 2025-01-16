<?php
// Connect to the database
$conn = new mysqli('localhost', 'root', '', 'your_database_name');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    $username = $conn->real_escape_string($data['username']);
    $comment = $conn->real_escape_string($data['comment']);

    $sql = "INSERT INTO comments (username, comment) VALUES ('$username', '$comment')";

    if ($conn->query($sql) === TRUE) {
        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['success' => false]);
    }
}

$conn->close();
?>
