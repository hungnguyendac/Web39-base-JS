// Truy cập phần tử thông qua id

let title_1 = document.getElementById("title-1");

// console.log(title_1);

title_1.style.color = "red";


// Truy cập phần tử thông qua classlet 

let title_2 = document.getElementsByClassName("title-2");
// console.log(title_2);

// Truy phần ử thong qua tag
let tag_h3 = document.getElementsByTagName("h3")
// console.log(tag_h3);

for (let i = 0; i < tag_h3.length; i++) {
    tag_h3[i].style.color = "blue"
}



// Truy cập phần tử với querySelector

// let title_4 = document.querySelector("#title-4");
// let para_1 = document.querySelector(".para-1");

// console.log(title_4);
// console.log(para_1);




// Truy cập phần tử với querySelectorAll
// let para_2 = document.querySelectorAll(".para-2");
// console.log(para_2);

// for (let i = 0; i < para_2.length; i++) {
//     para_2[i].style.color = "blue";
// }



// Truy cập phần tử thông qua quan hệ

// let box_2 = document.querySelector(".box-2")

// console.log(box_2.parentNode);



// Lấy nội dung phần tử

let para_4 = document.querySelector(".para-4")

para_4.innerHTML = "Hello world"
para_4.style.fontSize = "50px"

console.log(para_4);