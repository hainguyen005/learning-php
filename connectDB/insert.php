<?php

 $conn = mysqli_connect("localhost", "root","", "project") ;

 if (!$conn) {
    die("ket noi that bai". mysqli_connect_error()) ;
 }
$sql = "INSERT INTO sinhvien (hoten, tuoi) 
        VALUES ('haiii', '20')";

if (mysqli_query($conn, $sql)) {
    echo "Thêm record thành công";
} else {
    echo "Lỗi: " . $sql . "<br>" . mysqli_error($conn);
}
mysqli_close($conn);
?>