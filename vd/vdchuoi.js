// 1. Khai báo chuỗi
let text = " JavaScript là một ngôn ngữ lập trình tuyệt vời! ";

// 2. Lấy độ dài chuỗi
console.log("Độ dài chuỗi:", text.length);

// 3. Lấy ký tự trong chuỗi
console.log("Ký tự đầu tiên:", text.charAt(0));
console.log("Mã ASCII của ký tự đầu:", text.charCodeAt(0));
console.log("Dùng cú pháp []:", text[0]);

// 4. Cắt chuỗi
console.log("slice(2, 10):", text.slice(2, 10));
console.log("substring(2, 10):", text.substring(2, 10));
console.log("substr(2, 10):", text.substr(2, 10));

// 5. Chuyển đổi chữ hoa, chữ thường
console.log("Viết hoa:", text.toUpperCase());
console.log("Viết thường:", text.toLowerCase());

// 6. Nối chuỗi
let str1 = "Xin chào";
let str2 = "JavaScript";
console.log("Nối bằng concat():", str1.concat(" ", str2));
console.log("Nối bằng + :", str1 + " " + str2);

// 7. Loại bỏ khoảng trắng
console.log("Chuỗi sau khi trim():", text.trim());
console.log("Chuỗi sau khi trimStart():", text.trimStart());
console.log("Chuỗi sau khi trimEnd():", text.trimEnd());

// 8. Kiểm tra chuỗi
console.log("Chuỗi có chứa 'JavaScript':", text.includes("JavaScript"));
console.log("Chuỗi có bắt đầu bằng 'JavaScript':", text.startsWith("JavaScript"));
console.log("Chuỗi có kết thúc bằng 'vời!':", text.endsWith("vời!"));

// 9. Tìm kiếm chuỗi
console.log("Vị trí đầu tiên của 'a':", text.indexOf("a"));
console.log("Vị trí cuối cùng của 'a':", text.lastIndexOf("a"));
console.log("Vị trí của 'lập trình':", text.search("lập trình"));

// 10. Thay thế chuỗi
console.log("Thay thế 'JavaScript' thành 'JS':", text.replace("JavaScript", "JS"));
console.log("Thay thế tất cả 'a' bằng 'A':", text.replaceAll("a", "A"));

// 11. Tách chuỗi
let words = "HTML, CSS, JavaScript, React";
console.log("Tách chuỗi thành mảng:", words.split(", "));

// 12. Sử dụng Template Literals
let name = "Alice";
let age = 25;
let message = `Tên: ${name}, Tuổi: ${age}, đang học ${str2}`;
console.log("Template Literals:", message);

// 13. Chuỗi nhiều dòng với Template Literals
let multiLine = `Dòng 1
Dòng 2
Dòng 3`;
console.log("Chuỗi nhiều dòng:\n", multiLine);