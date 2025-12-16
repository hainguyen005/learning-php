<?php

 $conn = mysqli_connect("localhost", "root","", "project") ;

 if (!$conn) {
    die("ket noi that bai". mysqli_connect_error()) ;
 }
 $sql ="SELECT * from sinhvien";
 $result = mysqli_query($conn, $sql) ;
 if (mysqli_num_rows($result) > 0) {
    while ($row = mysqli_fetch_assoc($result)) {
        echo "id: " . $row["id"]. "<br>". "  Name: " . $row["hoten"]. "<br>". " Age: " . $row["tuoi"]. "<br>";
    }
 } else {
    echo "khong co ket qua";
 }
 mysqli_close($conn);
?>