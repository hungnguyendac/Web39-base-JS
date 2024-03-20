---Buổi trước mình đã học về JavaScript, một ngôn ngữ lập trình quan trọng dùng để thiết kế web, nó là 1 trong 3 ngôn ngữ mà tất cả các dev web phải học.

# Khai báo biến:

-   Có 3 từ khóa khai báo là var, let và const .

*   Const nên dùng khi biến đó ít khi thay đổi hoặc không bao giờ thay đổi.
*   Nên dùng let thay var bởi vì var bị tử hình rồi (Hình như là var nó không tương thích với trang web ngày nay nên bị khai tử) => chắc vậy

-   Biến được đặt tên theo kiểu camelCase. Ví dụ : hoTen , ngayThang . Nếu biến có 2 từ, từ 1 viết thường, từ 2 viết hoa
-   Biến không được trùng với các từ khóa của JS như for, if , else ...
-   Phân biệt chữ hoa và thường
-   Ký tự đầu không được là số

# Kiểm tra kiểu dữ liệu biến

-   let number = 10
-   console.log(typeof number)

# Phạm vi sử dụng biến

Có 3 kiểu :

-   Biến toàn cục
-   Biến trong function
-   biến trong khối

# Các kiểu dữ liệu thường gặp

-   Number (Số)
-   String
-   Array
-   Function
-   Object
-   Boolean
-   Undefined
-   Null

# Nối chuỗi

Thường dùng 2 cách sau :

-   Dùng dấu cộng:

var str1 = "Hello";
var str2 = "world!";
var result = str1 + " " + str2;
console.log(result); // Kết quả: "Hello world!"

-   Dùng dấu ``, cú pháp Js ES6 mới (Nên dùng)

var str1 = "Hello";
var str2 = "world!";
var result = `${str1} ${str2}`;
console.log(result); // Kết quả: "Hello world!"
