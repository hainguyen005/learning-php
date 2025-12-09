// 1. Các hằng số toán học
console.log("Số PI:", Math.PI);
console.log("Số Euler (e):", Math.E);
console.log("Căn bậc hai của 2:", Math.SQRT2);

// 2. Giá trị tuyệt đối
console.log("Giá trị tuyệt đối của -10:", Math.abs(-10));

// 3. Làm tròn số
console.log("Làm tròn xuống 4.7:", Math.floor(4.7));
console.log("Làm tròn lên 4.3:", Math.ceil(4.3));
console.log("Làm tròn gần nhất 4.5:", Math.round(4.5));

// 4. Lũy thừa và căn bậc hai
console.log("2^3 =", Math.pow(2, 3));
console.log("Căn bậc hai của 16:", Math.sqrt(16));

// 5. Tìm số lớn nhất, nhỏ nhất
console.log("Số lớn nhất trong (10, 20, 5, 40):", Math.max(10, 20, 5, 40));
console.log("Số nhỏ nhất trong (10, 20, 5, 40):", Math.min(10, 20, 5, 40));

// 6. Hàm lượng giác (độ → radian)
console.log("Sin(90 độ):", Math.sin(90 * Math.PI / 180));
console.log("Cos(0 độ):", Math.cos(0 * Math.PI / 180));

// 7. Sinh số ngẫu nhiên
console.log("Số ngẫu nhiên từ 0 đến 1:", Math.random());
console.log(
  "Số ngẫu nhiên từ 1 đến 100:",
  Math.floor(Math.random() * 100) + 1
);

// 8. Logarit
console.log("Logarit tự nhiên của 10:", Math.log(10));
console.log("Logarit cơ số 10 của 100:", Math.log10(100));
