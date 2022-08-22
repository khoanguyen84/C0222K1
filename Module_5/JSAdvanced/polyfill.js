let numbers = [1, 2, 3, 4]; // => [1, 4, 9, 14]

if(Array.prototype.map2 != 'function'){
    Array.prototype.map2 = function(callback){
        let result = [];
        for(let i = 0; i < this.length; i++){
            result.push(callback(this[i]));
        }
        return result;
    };
}
// [<button>1</button>, <button>2</button>, <button>3</button>, <button>4</button>]
// <button>1</button><button>2</button><button>3</button><button>4</button>
// let htmls = numbers.map2(function(number){
//     return `<button>${number}</button>`;
// })

// document.body.innerHTML = htmls.join("");
let htmls = numbers.map2(function(number){
    return `<tr><td>${number}</td</tr>`;
})

document.querySelector('table>tbody').innerHTML = htmls.join("");

// function process(number){
//     return number**2;
// }

// let power_2 =  numbers.map2(process);

// console.log(power_2)

// numbers.map(function(number, index){
//     return number**2;
// })



// if(Array.prototype.includes2 != 'function'){
//     Array.prototype.includes2 = function(value){
//         for(let i = 0; i < this.length; i++){
//             if(this[i] === value){
//                 return true;
//             }
//         }

//         return false;
//     };
// }


// console.log(numbers.includes2(3))
// console.log(numbers2.includes2(31))