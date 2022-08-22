// Mảng 2 chiều (mảng nhiều chiều)
// Mảng của mảng

// let matrix = [ [5, 6, 7, 8], [8, 9, 6], [1, 2, 3, 4, 6, 7, 8] ]
// console.log(matrix)
// matrix[2][3] = 40;
// console.log(matrix[1][1][1])
// console.log(matrix[2].length)
// for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[i].length; j++) {
//         console.log(matrix[i][j]);
//     }
// }

// tạo 2 biến row = 5, col = 6.
// tạo ra một mảng của mảng với kích cỡ là row và col
// các giá trị trong mảng này được sinh ngẫu nhiên trong [10,80]

let row = 2;
let col = 3;
let min = 10;
let max = 80;
// let matrix = new Array(row);
// for(let i = 0 ; i < matrix.length ; i++){
//     let array = new Array(col);
//     for(let j= 0; j < array.length; j++){
//         array[j] = Math.floor(Math.random() * (max - min + 1) + min);
//     }
//     matrix[i] = array;
// }
// console.log(matrix)

let matrix = new Array(3);
let a1 = [3,4,5,6]
let a2 = [5,3,2,1]
let a3 = [5,6,8,9]
matrix[0] = a1;
matrix[1] = a2;
matrix[2] = a3;
console.log(matrix)