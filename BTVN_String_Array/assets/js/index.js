// BTVN-13 : Array
const arr = [5, 3, 5, 2, 1, 6, 8];

let cau_1 = (arr) => {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
};

let cau_2 = (arr) => {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
};

console.log("----------------Câu 1-------------------");
console.log("Số lớn nhất trong mảng: ", cau_1(arr));

console.log("----------------Câu 2-------------------");
console.log("Số lớn nhất trong mảng: ", cau_2(arr));

let cau_3 = (arr) => {
    let mang = [];

    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] % 2;
        mang.push(arr[i]);
    }
    return mang;
};

console.log("----------------Câu 3-------------------");
console.log(cau_3(arr));

let cau_4 = (str) => {
    let arr = Array.from({ length: 10 }, () => str);

    return arr.join("");
};

let str = "a";

console.log("----------------Câu 4-------------------");
console.log(cau_4(str));

let cau_5 = (str) => {
    let arr = Array.from({ length: 10 }, () => str);

    return arr.join("-");
};

console.log("----------------Câu 5-------------------");
console.log(cau_5(str));

// BTVN-12 String
console.log("----------------BTVN 12: String --------------------");

let cau__1 = (str, str_check) => {
    return str.indexOf(str_check) !== -1;
};

console.log("----------------Câu 1-------------------");
console.log(cau__1("Dragon Ball Super", "Dragon"));
console.log(cau__1("Dragon Ball Super", "OnePiece"));

console.log("----------------Câu 2-------------------");
let cau__2 = (str) => {
    if (str.length <= 8) {
        return str;
    } else {
        return str.slice(0, 8) + '...';
    }
}

console.log(cau__2("Xin chào các bạn")); 
console.log(cau__2("hello"));


console.log("----------------Câu 3-------------------");
let cau__3 = (str) => {
    const result = str.toLowerCase().replace(/[^a-z]/g, '');
    
    return result === result.split('').reverse().join('');
}

console.log(cau__3("Race car")); 
console.log(cau__3("hello world")); 

console.log("----------------Câu 4-------------------");
let cau__4 = (num) => {
    let digits = num.toString().split('');
    
    digits.sort((a, b) => a - b);

    if (digits[0] === '0') {
        let nonZeroIndex = digits.findIndex(digit => digit !== '0');
        [digits[1], digits[nonZeroIndex]] = [digits[nonZeroIndex], digits[1]];
    }

    return parseInt(digits.join(''));
}

console.log(cau__4(53751)); 
console.log(cau__4(14350)); 
console.log(cau__4(203950)); 



console.log("----------------Câu 5-------------------");
let cau__5 = (str) => {
    str = str.toLowerCase();
    
    str = str.replace(/[^a-z\s]/g, '').replace(/\s+/g, '_');
    
    str = str.replace(/^_+|_+$/g, '');

    return str;
}

console.log(cau__5("HELLO world")); 
console.log(cau__5("DRAGON BALL SUPER")); 
