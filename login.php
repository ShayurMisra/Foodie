<?php
// Database connection
$servername = "localhost";
$username = "root";
$password = "12345";
$dbname = "foodie";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Basic validation
    if (!empty($email) && !empty($password)) {
        $sql = "SELECT * FROM users WHERE email='$email' AND password='$password'";
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            // Successful login
            header('Location: index.html');
        } else {
            echo "Invalid email or password.";
        }
    } else {
        echo "Please fill in all fields.";
    }
}

$conn->close();
?>
