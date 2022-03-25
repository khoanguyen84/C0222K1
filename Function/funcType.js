// Hoisting
// Decleration Function: khai xong thì có thể dùng bất kể vị trí nào
console.log(sum(5, 6))
function sum(n1, n2) {
    return n1 + n2;
}
// Expression Function: chỉ được sử dụng sau khi hàm được khai báo
const subtract = function (n1, n2) {
    return n1 - n2;
}
console.log(subtract(7, 5))
// Anonymous function

let array = [1, 2, 4, 45, 5]
let result = array.reduce(function (total, value) {
    return total + value
})
// const process = function (total, value) {
//     return total + value
// }
// let result = array.reduce(process)
console.log(result)
// console.log(process(10, 5))

let n1 = 5;
let n2 = 7;
function f1() {
    function f2() {
        console.log(n1, n2)
    }
    f2();
}

f1()