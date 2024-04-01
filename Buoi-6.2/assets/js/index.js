
// Cách 3: Lắng nghe sự kiện trên DOM với addEventListener

// let button3 = document.querySelector(".button-3");

// button3.addEventListener("dblclick", () => {
//     alert("Click me");
// });



// B1: Truy cập pt
let ic_chat = document.querySelector(".ic-chat");
let content_chat = document.querySelector(".content-chat");


// B2: Gắn sự kiện click vào icon-chat
ic_chat.addEventListener("click", () => {
    content_chat.style.display = "block";
    
});