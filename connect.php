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

if (isset($_SERVER["REQUEST_METHOD"]) && $_SERVER["REQUEST_METHOD"] == "POST") {
    $recipeName = $_POST['recipeName'];
    $cuisine = $_POST['cuisine'];
    $description = $_POST['description'];
    $ingredients = $_POST['ingredients'];
    $instructions = $_POST['instructions'];
    $prepTime = $_POST['prepTime'];
    $cookTime = $_POST['cookTime'];
    $totalTime = $_POST['totalTime'];
    $servings = $_POST['servings'];

    // Handle file upload
    $target_dir = "uploads/";
    $target_file = $target_dir . basename($_FILES["recipeImage"]["name"]);
    $imageFileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));

    // Check if image file is an actual image or fake image
    $check = getimagesize($_FILES["recipeImage"]["tmp_name"]);
    if ($check === false) {
        die("File is not an image.");
    }

    // Check if file already exists
    if (file_exists($target_file)) {
        die("Sorry, file already exists.");
    }

    // Check file size
    if ($_FILES["recipeImage"]["size"] > 500000) {
        die("Sorry, your file is too large.");
    }

    // Allow certain file formats
    if ($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg" && $imageFileType != "gif") {
        die("Sorry, only JPG, JPEG, PNG & GIF files are allowed.");
    }

    // if everything is ok, try to upload file
    if (move_uploaded_file($_FILES["recipeImage"]["tmp_name"], $target_file)) {
        $recipeImage = $target_file;
    } else {
        die("Sorry, there was an error uploading your file.");
    }

    $stmt = $conn->prepare("INSERT INTO recipes (Name, Cuisine, Image, Ingredients, Instructions, Servings, PrepTime, CookTime, TotalTime) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("ssssssiss", $recipeName, $cuisine, $recipeImage, $ingredients, $instructions, $servings, $prepTime, $cookTime, $totalTime);

    if ($stmt->execute()) {
        echo "New recipe created successfully";
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
} else {
    echo "This script only handles POST requests.";
}

$conn->close();
?>
