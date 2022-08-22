// 1. Từ khóa var để khai báo biến
// 2. Function Declareration 

// var i;
// for (i = 0; i < 5; i++) {
//     console.log(i)
// }

// console.log('i outsite for', i);

// console.log(n);
// var n;

// var n;
// {
//     console.log('line 15:', n);
//     {
//         {
//             var n = 5;
//             // n = 5;
//             console.log('line 19: ', n);
//         }
//     }
// }
// console.log('line 25: ', n);

// Function
// 1. Declareration function
sum(10, 5);
function sum(number1, number2) {
    console.log(number1 + number2);
}
// 2. Expresion function

const subtract = function (number1, number2) {
    console.log(number1 - number2);
}
subtract(10, 5);
// 3. Callback/Anonymous function
let numbers = [1, 2, 3, 4];

let result = numbers.map(function(number){
    return number * 2;
});
console.log(result);

// console.log(process(10));

// class
// function Student(){
//     // method
//     this.greeting = function(){
//         console.log('Hello world');
//     }
// }
class Student{
    // method
    greeting(){
        console.log('Hello world');
    }
}

let khoa = new Student();
khoa.greeting();