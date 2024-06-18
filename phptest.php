<?php
// test.php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    echo "POST request received!";
} else {
    echo "Please send a POST request.";
}
