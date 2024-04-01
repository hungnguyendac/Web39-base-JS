// Phương thức appendChill()
// Hiển thị ra 1 thẻ p có nội dung "đoạn văn 2"

// Bước 1: Tạo ra 1 thẻ DOM ảo
let para_2 = document.createElement("p");

// Bước 2: Gán nội dung cho thẻ <p></p>
para_2.innerHTML = "Đoạn văn 2";

// Bước 3: Hiển thị ra ngoài HTML
document.querySelector(".box-1").appendChild(para_2);

// Phương thức prepend()
// Hiển thị ra 1 thẻ p có nội dung "đoạn văn 3"

// Bước 1: Tạo ra 1 thẻ DOM ảo
let para_3 = document.createElement("p");

// Bước 2: Gán nội dung cho thẻ <p></p>
para_3.innerHTML = "Đoạn văn 3";

// Bước 3: Hiển thị ra ngoài HTML
document.querySelector(".box-1").prepend(para_3);

// Phương thức insertBefore()
// Hiển thị 1 thẻ h2 trước class "box-1"

// B1: Tạo thẻ ảo
let title_2 = document.createElement("h2");

// B2: Thêm nội dung
title_2.innerHTML = "Thẻ tiêu đề h2";

// B3: Xác định vị trí muốn thêm
let box_1 = document.querySelector(".box-1");

// B4: Hiển thị ra HTML
document.body.insertBefore(title_2, box_1);




// Xóa phần tử trong DOM (heading-3.1)
// Để xóa 1 phần tử thì phải thông qua pt cha -> xóa pt con

// B1: Truy cập vào phần tử
let parenHeading = document.querySelector(".box-2")
let headingChild = document.querySelector(".heading-3_1");

// B2: Xóa phần tử
parenHeading.removeChild(headingChild);

// B2: Xóa phần tử ---- Thẻ tiêu đề 3.3
// nth-child(): Cú pháp
let childHeading = document.querySelector("h3:nth-child(2)")
parenHeading.removeChild(childHeading);




// Thay thế phần tử trong DOM
// Thông qua pt cha thay thế pt con
// Yêu cầu, thay thế h4 bằng h1 có nội dung "Hello 500 anh em"
let box_3 = document.querySelector(".box-3");
let h4 = document.querySelector("h4");

let newElement = document.createElement("h1")
newElement.innerHTML = "Hello 500 anh em"

box_3.replaceChild(newElement,h4)