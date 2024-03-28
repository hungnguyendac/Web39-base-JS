//  Call dữ liệu trên sever và nó trả về data

const data = [
    {
        name: "Trái đất",
        src: "https://didongviet.vn/dchannel/wp-content/uploads/2023/08/galaxy-hinh-nen-iphone-doc-dep-didongviet@2x-576x1024.jpg",
    },
    {
        name: "Đường phố",
        src: "https://lh6.googleusercontent.com/proxy/Zf-53Q24Ai1yyVkB_H600cfDEsq4gR98nEtmW12ttcS7F1yD1mCQqIxZYk7vOhzHxZZEn9SndTQHZITGNZ3wZAINbyRq8IePzk-dufANUU6Jd2N3S0kqaCmr",
    },
    {
        name: "Khí cầu",
        src: "https://cdn.alongwalk.info/vn/wp-content/uploads/2022/05/09195316/image-cach-lay-net-tay-chuan-nhat-va-cac-goc-anh-dep-sieu-net-khi-chup-phong-canh-165207559677975.jpg",
    },
    {
        name: "Ruộng bậc thang",
        src: "https://baodongnai.com.vn/file/e7837c02876411cd0187645a2551379f/dataimages/201706/original/images1920558_4053279_16.jpg",
    },
    {
        name: "Hoa hướng dương",
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRykocEJMBFixSW2_DONVVLv0ZRws3I25BCyNsZN6drQ&s",
    },
    {
        name: "Hot Girl",
        src: "https://cdn.tgdd.vn/News/1062931/bi-quyet-chup-anh-01-01-01-1280x720.jpg",
    },
];

// Bước 1: Truy cập phần tử
let rowProduct = document.querySelector(".row-js");

// console.log(rowProduct);

// Bước 2: Lặp qua mảng data

let HTML = ``;

data.forEach((value, index) => {
    HTML += `
    <div class="column column-4">
        <div class="box-image">
            <img src="${value.src}" alt="Anh-1">
        </div>
        <div class="box-content">
            <h3>${value.name}</h3>
        </div>
    </div>`;
});

console.log(HTML);

// Bước 3 : Đổ dữ liệu vào HTML
rowProduct.innerHTML = HTML;