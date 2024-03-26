// If else
// Bài 1
console.log("-------IF Else-------");
console.log("-------Bài 1---------");
let checkMark = (number) => {
    if (number >= 85) {
        console.log("A");
    } else if (number >= 70 && number < 85) {
        console.log("B");
    } else if (number >= 40 && number < 70) {
        console.log("C");
    } else {
        console.log("D");
    }
};
checkMark(45);

console.log("-------Bài 2---------");
let checkNumber = (a, b) => {
    if (a > b) {
        console.log("Số lớn nhất là: " + a);
    } else {
        console.log("Số lớn nhất là: " + b);
    }
};
checkNumber(23, 75);
checkNumber(67, 45);

console.log("-------Bài 3---------");
let check3 = (x) => {
    if (x > 0) {
        console.log("Số này là số dương");
    } else if (x == 0) {
        console.log("Số này là số 0");
    } else {
        console.log("Số này là số âm");
    }
};
check3(3);
check3(-3);
check3(0);

console.log("-------Bài 4---------");
let check4 = (x) => {
    if (x % 2 == 0) {
        console.log("Số này là số chẵn");
    } else {
        console.log("Số này là số lẻ");
    }
};
check4(32);
check4(33);

console.log("-------Bài 5---------");
let check5 = (x) => {
    if (x % 3 == 0 && x % 5 == 0) {
        console.log(`Số ${x} chia hết cho 3 và 5`);
    } else if (x % 3 == 0) {
        console.log(`Số ${x} chỉ chia hết cho 3`);
    } else if (x % 5 == 0) {
        console.log(`Số ${x} chỉ chia hết cho 5`);
    } else {
        console.log(`Số ${x} không chia hết cho 3 và 5`);
    }
};
check5(15);
check5(43);
check5(33);
check5(55);

console.log("-------Bài 6---------");
let check6 = (a, b, c) => {
    if (c == a + b) {
        console.log(`${c} = ${a} + ${b}`);
    } else {
        console.log(`${c} != ${a} + ${b}`);
    }
};

check6(2, 3, 4);
check6(1, 2, 3);

// Vòng lặp
console.log("-------Vòng lặp-------");
console.log("-------Bài 1---------");

let repeatString = (str) => {
    let chuoi = "";
    for (let i = 0; i < 10; i++) {
        chuoi += str;
    }
    return chuoi;
};

let str = "KamehameHa ";
let result = repeatString(str);
console.log(result);

console.log("-------Bài 2---------");

let repeatString_2 = (str) => {
    let chuoi = "";
    for (let i = 0; i < 10; i++) {
        if (i == 9) {
            chuoi = chuoi + str;
            break;
        }
        chuoi = chuoi + str + "-";
    }
    return chuoi;
};

let str_2 = "a";
let result_2 = repeatString_2(str_2);
console.log(result_2);

console.log("-------Bài 3---------");
let repeatString_3 = (str, index) => {
    let chuoi = "";
    for (let i = 0; i < index; i++) {
        if (i == index - 1) {
            chuoi = chuoi + str;
            break;
        }
        chuoi = chuoi + str + "-";
    }
    return chuoi;
};
let str_3 = "a";
let result_3 = repeatString_3(str_3, 5);
console.log(result_3);

console.log("-------Bài 4---------");
let loop4 = () => {
    let sum = 0;
    for (let i = 0; i <= 100; i++) {
        if (i % 5 == 0) {
            sum = sum + i;
        }
    }
    return sum;
};
console.log(loop4());

console.log("-------Bài 5---------");
let loop5 = (r) => {
    let v = (4 / 3) * (Math.PI * r * 3);
    return v;
};
console.log(loop5(20));

console.log("-------Bài 6---------");
let loop6 = (a, b) => {
    let sum = 0;
    if (a > b) {
        for (let i = a - 1; i > b; i--) {
            sum = sum + i;
        }
    } else {
        for (let i = a + 1; i < b; i++) {
            sum = sum + i;
        }
    }
    return sum;
};
console.log(loop6(3, 8));
console.log(loop6(8, 3));
console.log(loop6(8, 4));

console.log("-------Bài 7---------");

let loop7 = (x) => {
    if (x <= 1) {
        return false;
    }
    for (var i = 2; i <= Math.sqrt(x); i++) {
        if (x % i === 0) {
            return false;
        }
    }
    return true;
};

console.log(loop7(17));
console.log(loop7(22));

console.log("-------Bài 8---------");
let loop8 = (x) => {
    let sum = 0;
    for (let i = 1; i <= x; i++) {
        if (loop7(i)) {
            sum = sum + i;
        }
    }
    return sum;
};

console.log(loop8(17));
console.log(loop8(22));

console.log("-------Bài 9---------");
let loop9 = (x) => {
    let sum = 0;
    for (let i = 1; i <= x; i++) {
        if (x % i == 0) {
            sum = sum + i;
        }
    }
    return sum;
};

console.log(loop9(25)); 
console.log(loop9(100));