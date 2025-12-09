//1
for(let i = 1; i<=10; i++){
    if(i%2===0){
        continue;
    }
    console.log(i);
}


//2
const students = [
  { STT: 1, "Họ Tên": "Nguyễn văn A", "Mã SV": "74DCTT28374", Nhóm: 2 },
  { STT: 2, "Họ Tên": "Bùi văn B", "Mã SV": "74DCTT28375", Nhóm: 2 },
  { STT: 3, "Họ Tên": "Nguyễn văn C", "Mã SV": "74DCTT23456", Nhóm: 2 },
  { STT: 4, "Họ Tên": "Phan thị T", "Mã SV": "74DCTT87654", Nhóm: 2 },
  { STT: 5, "Họ Tên": "Hoàng Đần", "Mã SV": "75DCTT01297", Nhóm: 2 }
];

console.table(students);
console.log("Tổng số sinh viên:", students.length);

//3
document.getElementById("myButton").onmouseover = function(){
    alert("bạn đã nhấn vào đây");
}

//4
document.getElementById("myForm")
.addEventListener("submit", function (event){
    let name = document.getElementById("name").value;
    if(name === ""){
        alert("vui lòng nhập họ tên");
        event.preventDefault();
        }
        else{
            alert(name);
        }
    }
);

//5
var x = "lap trinh web";
x = 10;
var y = "20";
var z = x + y;
var n = parseInt("50");

//6
function add(a,b){
    return a + b;
}
console.log(add(5,3));

//7
var multiply = function(a,b){
    return a + b;
}
console.log(multiply(5,3));

//8
const sayHi = (name) => {
    console.log("Hi" + name);
};
sayHi("web");

//9
function process(x, callback){
    console.log("gia tri: " + x);
    callback;
}

function done(){
    console.log("xu ly xong");
}
process(5,done);

//10
function factorial(n){
    if(n === 0) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5));

//11
let fruit = ["tao", "chuoi", "cam"];

for(let i=0; i< fruit.length; i++){
    console.log(fruit[i]);
}

//12
let person = {
    name: "nam",
    age: 25,
    job: "develop"
};

for (let key in person){
    console.log(key + ":" + person[key]);
}

//13--tang 1 don vi
let i=1;
while(i <= 5){
    console.log(i);
    i++;
}

//14
do{
    console.log(i);
    i++;
}while(i <= 5);

//15
for(let i = 1; i<=10; i++){
    if(i === 5){
        break;
    }
    console.log(i);
}
