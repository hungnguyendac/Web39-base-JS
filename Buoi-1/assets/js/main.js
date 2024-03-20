// let name = "Nguyễn Đắc Hùng"
// let age = 22

// console.log(`Mình tên là ${name}, năm nay mình ${age} tuổi`);

console.log("Phương trình : ax + b = 0");
let a_f = prompt("Nhập a = ");

let b = prompt("Nhập b = ");

if (a_f < 0) {
    console.log("Phương trình vô nghiệm");
}
else {
    console.log(`Phương trình có nghiệm x = ${-b/a}`);
}