<?php
// Database configuration file
$host = "localhost";
$username = "root"; // Default MySQL username
$password = "";     // Default MySQL password
$dbname = "comment_system";

// Create connection
$conn = new mysqli($host, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
