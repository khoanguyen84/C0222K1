// Phân loại vòng lặp
// 1. Vòng lặp xác định số lần lặp
// + For (Các cải tiến)
// + For in, for of, for each
// 2. Vòng lặp chưa xác định số lần lặp
// + while
// + do...while
// Hiển thị các số từ 0 đến 9
// for (let i = 0; i < 10; i++){
//     console.log(i)
// }

// Hoisting
// var, decleration function
// Scope
// Global
// Block code
// var i;

// Memory Lake

// for (let i = 0; i < 10; i++){
//     console.log(i)
// }
// let i = "Khoa";
// console.log("i outsite for: ", i)

// Clourse
// let i = 0;
// console.log("i before for: ", i)
// for (let i = 0; i < 10; i++) {
//     console.log(i)
// }
// i = "Khoa";
// console.log("i outsite for: ", i)
// {
//     let i = 10;
//     console.log(i);
//     {
//         let i = 20;
//         console.log(i);
//         {
//             {
//                 {
//                     console.log(i)
//                 }
//             }
//         }
//     }
// }
// console.log(i)

// for (let i = 0; i < 10; i++) {
//     if(i%2 == 0){
//         console.log(i)
//     }
// }
// for (let i = 0; i < 10; i+=2) {
//     console.log(i)
// }
// let i = 0;
// for (; ;) {
//     if (i > 8)
//         break;
//     console.log(i)
//     i += 2;
// }

// for (let i = 0; i < 10; i++) {
//     if(i % 2 != 0){
//         continue;
//     }
//     console.log(i)
// }

// for (let i = 9; i >= 0; i--) {
//     console.log(i)
// }

// let i = 11;
// while(i < 10){
//     console.log(i);
//     i++;
// }

// let i = 11;
// do {
//     console.log(i);
//     i++;
// }
// while (i < 10)

// let n1 = 5;
// let n2 = "5";
// ===
// 5 == 5 && number == string
// ==
// 5 == 5
// if(n1 === n2){
//     console.log("n1 equals n2")
// }
// else{
//     console.log("n1 not equals n2")
// }

// console.log(1 + "1") //"11"
// console.log(1 - "1") //0

// let total = 0;
// for(let i = 0 ; i< 10; i++){
//     if(total >=6)
//         break;
//     console.log(i)
//     total += i;
// }

// let n1 = 5;
// let n2 = 6;
// let n1 = 5, n2 =6;
// for(let i = 0, total = 0 ; i< 10 && total <= 6; i++, total += i){
//     console.log(i)
// }

// nested loop
// Độ phức tạp của thuật toán
// for(let i=1; i<=2; i++){
//     for(let j=1; j<=3; j++){
//         console.log(`${i}.${j}`)
//     }
// }

let i = 0;
while(i<=2){
    let j=0;
    do{
        console.log(`${i}.${j}`)
        j++;
    }
    while(j<=3)
    i++;
}