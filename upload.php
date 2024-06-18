<?php
include 'config.php';

$name = $_POST['name'];
$cuisine = $_POST['cuisine'];
$ingredients = $_POST['ingredients'];
$instructions = $_POST['instructions'];
$servings = $_POST['servings'];
$prepTime = $_POST['prepTime'];
$cookTime = $_POST['cookTime'];
$totalTime = $_POST['totalTime'];

// Handle file upload
$image = '';
if (isset($_FILES['image']) && $_FILES['image']['error'] == 0) {
    $target_dir = "uploads/";
    $target_file = $target_dir . basename($_FILES["image"]["name"]);
    if (move_uploaded_file($_FILES["image"]["tmp_name"], $target_file)) {
        $image = $target_file;
    }
}

$query = "INSERT INTO recipes (Name, Cuisine, Image, Ingredients, Instructions, Servings, PrepTime, CookTime, TotalTime) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
$stmt = $conn->prepare($query);
$stmt->bind_param("ssssssiii", $name, $cuisine, $image, $ingredients, $instructions, $servings, $prepTime, $cookTime, $totalTime);

if ($stmt->execute()) {
    echo "New recipe created successfully";
} else {
    echo "Error: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>
