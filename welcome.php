<?php
session_start();
if (!isset($_SESSION['username'])) {
    header(header:"Location: login.php");   
    exit();
}
$username = $_SESSION['username'];
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Xin chao, <?php echo $_SESSION["username"]; ?> ! </h1>
    <p>Chào mừng bạn đăng nhập</p>
    <a href="logout.php">log out</a>
</body>
</html>