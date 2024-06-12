<?php
$servername = "localhost";
$username = "root"; 
$password = "12345"; 
$dbname = "foodie";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if (isset($_GET['query'])) {
    $query = $_GET['query'];
    $sql = "SELECT * FROM recipes WHERE Name LIKE '%$query%' OR Cuisine LIKE '%$query%' OR Ingredients LIKE '%$query%'";
    $result = $conn->query($sql);

    $recipes = array();
    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            $recipes[] = $row;
        }
    }
    echo json_encode($recipes);
}

$conn->close();
?>
