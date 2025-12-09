// Khai báo mảng
let fruits = ["Táo", "Chuối", "Cam", "Dâu"];
console.log("Mảng ban đầu:", fruits);

// 1. length – Lấy độ dài mảng
console.log("Độ dài của mảng:", fruits.length);

// 2. push() – Thêm phần tử vào cuối mảng
fruits.push("Xoài");
console.log("Sau khi thêm Xoài:", fruits);

// 3. pop() – Xóa phần tử cuối cùng
fruits.pop();
console.log("Sau khi xóa phần tử cuối:", fruits);

// 4. unshift() – Thêm phần tử vào đầu mảng
fruits.unshift("Nho");
console.log("Sau khi thêm Nho vào đầu:", fruits);

// 5. shift() – Xóa phần tử đầu tiên
fruits.shift();
console.log("Sau khi xóa phần tử đầu tiên:", fruits);

// 6. slice() – Cắt một phần của mảng (không làm thay đổi mảng gốc)
let citrus = fruits.slice(1, 3);
console.log("Mảng citrus (cắt từ index 1 đến 2):", citrus);

// 7. concat() – Nối hai mảng
let moreFruits = fruits.concat(["Xoài", "Dưa hấu"]);
console.log("Mảng sau khi nối:", moreFruits);

// 8. indexOf() – Tìm vị trí phần tử
console.log("Vị trí của 'Cam':", fruits.indexOf("Cam"));

// 9. includes() – Kiểm tra phần tử có tồn tại hay không
console.log(
  "'Dưa hấu' có trong mảng không?",
  fruits.includes("Dưa hấu")
);

// 10. sort() – Sắp xếp mảng (thay đổi mảng gốc)
fruits.sort();
console.log("Mảng sau khi sắp xếp:", fruits);

// 11. reverse() – Đảo ngược mảng (thay đổi mảng gốc)
fruits.reverse();
console.log("Mảng sau khi đảo ngược:", fruits);

// 12. forEach() – Duyệt qua từng phần tử
console.log("Duyệt mảng bằng forEach():");
fruits.forEach(fruit => console.log(fruit));

// 13. map() – Tạo mảng mới từ mảng cũ
let upperCaseFruits = fruits.map(fruit => fruit.toUpperCase());
console.log("Mảng chữ in hoa:", upperCaseFruits);

// 14. filter() – Lọc phần tử theo điều kiện
let shortNames = fruits.filter(fruit => fruit.length <= 3);
console.log("Tên trái cây có 3 ký tự trở xuống:", shortNames);

// 15. reduce() – Tính toán tổng hợp trên mảng
let numbers = [10, 20, 30, 40];
let total = numbers.reduce((sum, num) => sum + num, 0);
console.log("Tổng các số trong mảng:", total);

let title = document.getElementById("title");
title.style.color = "blue"; // Đổi màu chữ

// Truy xuất bằng TagName
let paragraphs = document.getElementsByTagName("p");
paragraphs[0].style.fontSize = "20px"; // Thay đổi kích thước chữ đoạn đầu tiên

// Truy xuất bằng Class
let descriptions = document.getElementsByClassName("description");
descriptions[1].style.fontWeight = "bold"; // Làm đậm đoạn thứ hai

// Truy xuất bằng CSS Selector
let firstItem = document.querySelector("#list li");
firstItem.style.backgroundColor = "yellow"; // Đổi màu nền phần tử đầu tiên

let allItems = document.querySelectorAll("#list li");
allItems.forEach(item => {
    item.style.margin = "10px"; // Tăng khoảng cách giữa các mục
});

// Hàm thay đổi nội dung khi click button
function changeText() {
    title.textContent = "Nội dung đã thay đổi!";
    descriptions[0].classList.add("highlight"); // Thêm class CSS để đổi màu chữ
}

function replaceElement() {
    // Lấy phần tử ảnh cần thay thế
    let img = document.getElementById("image");

    // Tạo phần tử mới (đoạn văn)
    let newElement = document.createElement("p");
    newElement.textContent = "Hình ảnh đã được thay thế bằng đoạn văn!";
    newElement.style.fontSize = "18px";
    newElement.style.fontWeight = "bold";
    newElement.style.color = "red";

    // Lấy phần tử cha của ảnh
    let parent = img.parentNode;

    // Thay thế ảnh bằng đoạn văn
    parent.replaceChild(newElement, img);
}

function getStyle() {
            let element = document.getElementById("text");
            let style = window.getComputedStyle(element);

            let color = style.color;
            let fontSize = style.fontSize;
            let fontWeight = style.fontWeight;

            document.getElementById("result").innerHTML =
                `Màu chữ: ${color} <br> Kích thước chữ: ${fontSize} <br> Độ đậm: ${fontWeight}`;
        }

        function setStyle() {
            let element = document.getElementById("text");

            element.style.color = "red"; 
            element.style.fontSize = "25px"; 
            element.style.fontWeight = "normal"; 
            element.style.backgroundColor = "yellow"; 
        }