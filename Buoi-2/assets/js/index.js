// Bài 1

let fizzBuzz = (a) => {
    if (a % 3 == 0 && a % 5 == 0) {
        console.log("FizzBuzz");
    } else if (a % 3 == 0) {
        console.log("Fizz");
    } else if (a % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log("No");
    }
};

console.log("-----------Bài 1-----------");
fizzBuzz(15);
fizzBuzz(21);
fizzBuzz(8);
fizzBuzz(10);

// Bài 2

let pt1 = (a, b) => {
    if (a == 0) {
        console.log("Phương trình vô nghiệm");
    } else {
        console.log(`Phương trình có nghiệm x = ${-b / a}`);
    }
};

console.log("-----------Bài 2-----------");
pt1(2, 4);
pt1(0, 4);

// Bài 3

let pt2 = (a, b, c) => {
    let delta = b * b - 4 * a * c;
    if (a == 0) {
        console.log(`Phương trình (a = 0) có nghiệm x = ${-c / b}`);
    } else {
        if (delta > 0) {
            console.log(`Phương trình có hai nghiệm phân biệt 
            x1 = ${(-b + Math.sqrt(delta)) / (2 * a)} 
            x2 = ${(-b - Math.sqrt(delta)) / (2 * a)}`);
        } else if (delta == 0) {
            console.log(`Phương trình có nghiệm kép x = ${-b / (2 * a)}`);
        } else {
            console.log("Phương trình vô nghiệm");
        }
    }
};

console.log("-----------Bài 3-----------");
pt2(1, -4, 4);
pt2(3, -5, 2);
pt2(0, 3, 6);
pt2(1, 3, 9);

// Bài 4

let bmi = (weight, height) => {
    return weight / (height * height);
};

console.log("-----------Bài 4-----------");
let w = 60;
let h = 1.75;
console.log(`Cân nặng ${w} và cao ${h} thì chỉ số BMI của bạn là ${bmi(w, h)}`);

// Bài 5

let heat = (c) => {
    return c * 1.8 + 32;
};
let c = 50;
console.log("-----------Bài 5-----------");
console.log(`Nhiệt độ là ${c} độ C = ${heat(c)} độ F`);