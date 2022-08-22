// const sum = function(n1, n2){
//     console.log(n1 + n2);
// }
// const sum = (n1, n2) => console.log(n1 + n2);
// sum(5,6);

// const hello = function(){
//     console.log('Hello everyone!');
// }
// const hello = () => console.log('Hello everyone!');
// hello();

// const power2 = function(n){
//     console.log(n**2)
// }
// const power2 = (n) => console.log(n**2);
// power2(5);

let numbers = [1, 2, 3, 4];

// let result = numbers.map(function(number){
//     return number * 2;
// });
let result = numbers.map((number) => number * 2);
console.log(result);