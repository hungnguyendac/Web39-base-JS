// Khởi tạo 1 obj

// let obj_1 = {};

// obj_1.name = `Nguyễn Văn A`
// obj_1.email = `dfdjfj@gmail.com`

// console.log(obj_1);

// let obj_2 = {
//     name: "Nguyễn Văn B",
//     age: 20,
// }
// console.log(obj_2);

// Truy cập vào phần tử của obj

// let user_3 = {
//     name: "Nguyễn Văn C",
//     email: "nguyenvanc@gmail.com",
//     age: 20
// }

// console.log(user_3.name);

// Gán giá trị của thuộc tính trong obj
// let user_4 = {
//     name: "nguyen van teo",
//     age: 25,
//     email: "fadfdsf@gmail.com"
// }

// user_4.name = "Nguyễn Thị A"

// console.log(user_4);

// Các phương thức làm việc với mảng

// Phương thức map()

// let arrNumber = [1, 2, 3, 4, 5];

// arrNumber.map((value,index) => {

// })

// Phương thức filter() trong array

// Cách truyền thống
// let oddNumber = [1, 2, 3, 4, 5];

// let result = []
// oddNumber.forEach( (item,index) => {
//     if (item % 2 != 0) {
//         result.push(item)
//     }
// })

// console.log(result);

// Sử dụng filter()
// let oddNumber2 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// const idOdd = oddNumber2.filter((value, index) => {
//     return value % 2 != 0;
// });

// console.log(idOdd);

// Phương thức reduce() trong array
// let numbers = [1,2,3,4,5]

// const result_2 = numbers.reduce((total, value) => {
//     return total = total + value;
// },0)

// console.log(result_2);



// Phương thức find()
let arr = [1,2,3,4,5,6,7]

const result = arr.find( (value, index) => {
    return value > 4
})

console.log(result);