<?php

 $conn = mysqli_connect("localhost", "root","", "project") ;

 if (!$conn) {
    die("ket noi that bai". mysqli_connect_error()) ;
 }
 
 $sql = "DELETE FROM sinhvien
         WHERE id=2";

if (mysqli_query($conn, $sql)) {
    echo "Xóa dữ liệu thành công";
} else {
    echo "Lỗi: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);

?>