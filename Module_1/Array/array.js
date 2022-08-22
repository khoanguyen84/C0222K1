// 1. dùng biến để lưu trữ dữ liệu
// 2. dùng mảng để lưu trữ tập hợp dữ liệu
// cách 1: let array = new Array()
// cách 2: let array = [];

// tạo ra 1 mảng và chưa có phần tử nào
// let array = new Array();
// let array = [];

// tạo ra 1 mảng có size (5) phần tử
// let array = new Array(5);
// let array = [,,,,];

// let array = new Array(5,6,7,8,9,9,10);
// let array = [5,6,7,8,9,9,10];

let person = [
    "khoa nguyễn",
    18,
    "khoa.nguyen@codegym.vn",
    true,
    true,
    ["Bá banh", "cầu lông", "bơi lội"],
    [
        ["Level 1", "Level 2"],
        ["N1", "N2", "N3"],
    ],
    "0935216417"
]
// console.log(person[0])
// console.log(person[1])
// console.log(person[2])
// console.log(person[3])
// console.log(person[4])
// console.log(person[5])
// console.log(person[6])

// for(let i = 0; i < person.length; i++){
//     console.log(person[i])
// }

// let i = 0;
// while(i < person.length){
//     console.log(person[i])
//     i++;
// }

// let i = 0;
// do{
//     console.log(person[i])
//     i++
// }
// while(i < person.length)

// console.log(person[6][0][1])
// console.log(person)
// console.log(typeof person[0])
// console.log(typeof person[1])
// console.log(typeof person[2])
// console.log(typeof person[3])
// console.log(typeof person[5])
// let soThich = person[5]
// console.log(soThich[1])
// console.log(person[5][1])

// let  numbers = [5,6,8,9,9,0,0,4,3,2];
// let total = 0;
// for(let i = 0; i < numbers.length; i++){
//     // total = total + numbers[i]
//     total +=numbers[i]
// }
// console.log("Total values in array: ", total)

let size = 10;
let arr = [];
let min = 23;
let max = 97;
//  tạo ra 1 mảng có size phần tử và giá trị của mỗi phần tử được sinh ngẫu nhiên
// trong khoảng [10, 50]
// for (i = 0; i < size; i++) {
//     arr[i] = Math.floor(Math.random() * (max - min + 1) + min);
// }
// console.log(arr);
// Math.random() -> (0,1)
// [0, 9]
// Math.floor()
// Math.floor(Math.random()*(max - min + 1) + min)
// console.log(Math.floor(Math.random() * (50 - 10 + 1) + 10))

// tạo ra 1 mảng có size phần tử và giá trị của mỗi phần tử được sinh ngẫu nhiên
// trong khoảng [35, 85]
// đếm xem có báo nhiêu số lẻ có trong mảng trên

// for (i = 0; i < size; i++) {
//     arr[i] = Math.floor(Math.random() * (max - min + 1) + min);
// }
// console.log(arr);
// let countOdd = 0;
// // truthy và falsy
// for (i = 0; i < size; i++) {
//     if(arr[i] % 2 != 0){
//         countOdd++;
//     }
// }
// console.log("count of odd number: ", countOdd)

// Tạo 1 mảng có size phần từ, các giá trị được sinh ngẫu nhiên trong khoảng [23, 97]
// Hiển thị ra màn hình các thông tin sau:
// 1. Trong mảng có bao nhiêu số chính phương
// 2. Trong mảng có bao nhiêu số nguyên tố
for (let i = 0; i < size; i++) {
    arr[i] = Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(arr);
let countPerfectSquare = 0;

for (let i = 0; i < size; i++) {
    if(Number.isInteger(Math.sqrt(arr[i]))){
        countPerfectSquare++;
    }
}
console.log("count perfect square: ", countPerfectSquare)

let countPrime = 0;
for (let i = 0; i < size; i++) {
    let isPrime = true;
    for(let j = 2; j < arr[i]; j++){
        if(arr[i] % j == 0){
            isPrime = false;
            break;
        }
    }
    if(isPrime)
        countPrime++;
}
console.log("count prime: ", countPrime)