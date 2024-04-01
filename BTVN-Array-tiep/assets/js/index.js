// Câu 1
console.log(
    "-------------------------------Câu 1--------------------------------"
);
let sapXep = (students) => {
    return students.sort().reverse();
};

let students = ["Nam", "Hoa", "Tuấn"];
console.log(students);
let sapXepLai = sapXep(students);
console.log(sapXepLai);

console.log(
    "-------------------------------Câu 2--------------------------------"
);

let shuffle = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
};

console.log(shuffle([1, 2, 3, 4, 5]));
console.log(shuffle([1, 2, 3, 4, 5]));

console.log(
    "-------------------------------Câu 3--------------------------------"
);
let symmetricDifference = (arr1, arr2) => {
    let diff1 = arr1.filter((item) => !arr2.includes(item));
    let diff2 = arr2.filter((item) => !arr1.includes(item));
    return [...diff1, ...diff2];
};

console.log(symmetricDifference([1, 2, 3], [1, 2, 4]));

console.log(
    "-------------------------------Câu 4--------------------------------"
);

let union = (arr1, arr2) => {
    let set1 = new Set(arr1);
    let set2 = new Set(arr2);

    let unionSet = new Set([...set1, ...set2]);

    return [...unionSet];
};

console.log(union([1, 2, 3, 1], [4, 3, 2, 4]));
console.log(union([1, 2, 3, 2, 3], [1, 2, 3, 1, 2]));
