<?php
$conn = mysqli_connect('localhost', 'root', '', 'project');


if (!$conn) {
    die("Kết nối thất bại: " . mysqli_connect_error());
}

$sql = "UPDATE sinhvien SET hoten = 'hoang'
         WHERE id=2";

if (mysqli_query($conn, $sql)) {
    echo "Cập nhật dữ liệu thành công";
} else {
    echo "Lỗi: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);

?>