// 1. Tạo đối tượng ngày giờ mới
let myDate = new Date();
console.log("Thời gian hiện tại:", myDate);

// 2. Lấy năm, tháng, ngày
console.log("Năm:", myDate.getFullYear());
console.log("Tháng:", myDate.getMonth() + 1); // Tháng bắt đầu từ 0
console.log("Ngày:", myDate.getDate());

// 3. Lấy giờ, phút, giây
console.log("Giờ:", myDate.getHours());
console.log("Phút:", myDate.getMinutes());
console.log("Giây:", myDate.getSeconds());

// 4. Chỉnh sửa ngày tháng
myDate.setFullYear(2025);
myDate.setMonth(5);    // Tháng 6 (0–11)
myDate.setDate(15);
console.log("Sau khi chỉnh sửa:", myDate);

// 5. Định dạng ngày giờ
console.log("Chuỗi ngày đơn giản:", myDate.toDateString());
console.log("ISO format:", myDate.toISOString());
console.log(
  "Định dạng theo ngôn ngữ:",
  myDate.toLocaleDateString("vi-VN")
);

// 6. Lấy timestamp
console.log("Timestamp:", myDate.getTime());

// 7. Tính khoảng cách giữa hai ngày
let startDate = new Date("2024-03-01");
let endDate = new Date("2024-03-05");
let diffTime = endDate - startDate;
let diffDays = diffTime / (1000 * 60 * 60 * 24);

console.log(
  `Khoảng cách giữa ${startDate.toDateString()} và ${endDate.toDateString()} là ${diffDays} ngày`
);

// 8. Cộng / trừ ngày tháng
let newDate = new Date();

newDate.setDate(newDate.getDate() + 7); // Cộng thêm 7 ngày
console.log("7 ngày sau:", newDate);

newDate.setDate(newDate.getDate() - 14); // Trừ đi 14 ngày
console.log("14 ngày trước:", newDate);
