// Cách 3: Lắng nghe sự kiện trên DOM với addEventListener

// let button3 = document.querySelector(".button-3");

// button3.addEventListener("dblclick", () => {
//     alert("Click me");
// });

// B1: Truy cập pt
let ic_chat = document.querySelector(".ic-chat");
let content_chat = document.querySelector(".content-chat");
let close_chat = document.querySelector(".close");

// B2: Gắn sự kiện click vào icon-chat
ic_chat.addEventListener("click", () => {
    // Đóng mở content khi ấn vào chính nó
    content_chat.classList.toggle("active");

    // content_chat.style.bottom = "160px";
    content_chat.style.transition = "bottom .3s";
});

close_chat.addEventListener("click", () => {
    // content_chat.style.bottom = "-500px";
    content_chat.style.transition = "bottom 0s";
    content_chat.classList.remove("active");
});
