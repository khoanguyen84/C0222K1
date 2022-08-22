// function sum() {
//     let total = 0;
//     for(let i = 0; i < arguments.length; i++){
//         total += arguments[i];
//     }
//     return total;
// }
// function sum(msg, number, ...rest) {
//     console.log(rest);
//     let total = 0;
//     for(let i = 0; i < rest.length; i++){
//         total += rest[i];
//     }
//     console.log(`${msg} ${total}`) ;
// }

// sum("Total: ", 2, 3, 4, 5, 6, 7, 7);

function sum(...rest) {
    let total = 0;
    for (let i = 0; i < rest.length; i++) {
        total += rest[i];
    }
    return total;
}

let numbers = [1, 4, 5, 6, 7, 8, 8];
console.log(sum(...numbers))