// ---------Cách 1----------------
// Khai báo 1 array

// let array_1 = []

// array_1[0] = 1
// array_1[1] = 2;
// array_1[2] = 'Hello world';
// console.log(array_1);

// ---------Cách 2----------------

// let arr = [1,2,3,4,5]
// console.log(arr);

// VD2: Truy cap phan tu của mang number = {1,2,3,4,5,6}

// let arr_3 = [1,2,3]
// arr_3[0] = 8

// console.log(arr_3);

// Cac kieu du lieu JS - Kieu du lieu nguyen thuy
// Number, String, Symbols, undefined, null, boolean

// Cac kieu du lieu JS - Kieu du lieu object
// let user = {
//     name : "Nguyễn Văn A",
//     age: 19,
//     email: "nguyenvana@gmail.com"
// }

// console.log(user);

// Value Type - Dùng cho 6 kiểu dữ liệu nguyên thủy

// let a = 1 // Tạo ra 1 vùng nhớ 1 -> Lưu trữ giá trị của biến a
// let b = a// Tạo ra 1 vùng nhớ 2 -> Lưu trữ giá trị của biến b

// b = b + 2;

// console.log(a,b);

// References Type - Dùng cho kiểu tham chiếu obj
// let x = [1,2,3,4]
// let y = x

// y.push(5)
// console.log(x);
// console.log(y);

let arrayNumber = [13, 25, 31, 44,56,63,72,89];
console.log(`Mảng number ${arrayNumber}`);

let sum = 0;
let sumLe = 0;

// Value : Trả về giá trị phần tử
// Index: Trả về vị trí phần tử trong mảng
// value và index thích đặt tên thế nào cũng được
arrayNumber.forEach( (value, i) => {
    console.log(`arrayNumber[${i}] = ${value}`);

    sum += value
    
    if (value % 2 != 0) {
        sumLe += value
    }
})

console.log("--------------------------");

console.log("Tổng các phần tử trong mảng: " + sum);
console.log("Tổng các giá trị lẻ trong mảng: " + sumLe);