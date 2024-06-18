<?php
include 'config.php';

$search = $_GET['search'];

$query = "SELECT * FROM recipes WHERE Name LIKE ? OR Ingredients LIKE ?";
$stmt = $conn->prepare($query);
$search_param = "%" . $search . "%";
$stmt->bind_param("ss", $search_param, $search_param);
$stmt->execute();
$result = $stmt->get_result();

while ($row = $result->fetch_assoc()) {
    echo "<div class='recipe'>";
    echo "<img src='" . $row['Image'] . "' alt='Recipe Image'>";
    echo "<p>" . $row['Name'] . "</p>";
    echo "</div>";
}

$stmt->close();
$conn->close();
?>
