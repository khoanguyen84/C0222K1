// let sum = function (n1, n2) {
//     return n1 + n2;
// }
let sum = (n1, n2) => n1 + n2;

// let power2 = function(n){
//     return n*n;
// }
let power2 = (n) => n*n;


// let logger = function(){
//     console.log("Hello world");
// }
let logger = () => console.log("Hello world");


// let process = function(n1, n2){
//     if(n1 % 2 == 0 && n2 % 2 == 0){
//         return n1 + n2;
//     }

//     return n1 - n2;
// }
let process = (n1, n2) => {
    if(n1 % 2 == 0 && n2 % 2 == 0){
        return n1 + n2;
    }

    return n1 - n2;
}


let array = [3,4,6,6,7,8,98];

// let result = array.reduce(function(total, number){
//     return total + number
// })
let result = array.reduce((total, number) => total + number)

console.log(result)