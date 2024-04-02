// Truy cập phần tử
let clickMe = document.querySelector(".click-me");

// Gán sự kiện onclick cho button
clickMe.addEventListener("click", (e) => {
    console.log(e.clientX);
});

// Sử dụng biến event trong keyboard event

document.addEventListener("keydown", (e) => {
    console.log(e.key);
});
