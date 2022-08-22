let n1 = 5;
let n2 = 7;
console.log(`n1 = ${n1}, n2 = ${n2}`); // 5 - 7
function swap(){
    let temp = n1;
    n1 = n2;
    n2 = temp;
    console.log(`n1 = ${n1}, n2 = ${n2}`); // 7- 5
}
swap();
console.log(`n1 = ${n1}, n2 = ${n2}`); // 5 - 7 | 7 - 5


let size = 10;
let min = 10;
let max = 40;

// {
//     let n1 = 5;
//     let n2 = 7
//     {
//         {
//             let n3 = 10;
//             console.log(n1, n2)
//         }
//         console.log(n3)
//     }
// }

// let n10 = 5;
// let n11 = n10;
// n11 = 15;
// console.log(n10)
// console.log(n11)

// array, object, function => tham chiếu
// ...spread //rãi
let a1 = [1,2,3]
let a2 = JSON.parse(JSON.stringify(a1))
a2[1] =200;
console.log(a1)
console.log(a2)
// console.log(a1)
// let a1Str = JSON.stringify(a1); // convert from object to string
// console.log(a1Str) // '[1,2,3]'
// console.log(JSON.parse(a1Str)) //cnvert from string to object
// JSON -> JavaScript Object Anotation
// let a2 = [...a1];
// let a2 = [1,2,3];
// a2[0] = a1[0];
// a2[1] = a1[1];
// a2[2] = a1[2];
// for(let i=0; i< a1.length; i++){
//     a2[i] = a1[i]
// }
// let a3 = a2;
// a2[1] = 20;
// console.log(a1) // [1,2,3]
// console.log(a2) // [1, 20, 3]
// console.log(a3) // [1, 20, 3]