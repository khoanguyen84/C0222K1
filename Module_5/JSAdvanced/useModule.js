// import sum, { power, abs } from './module.js';

// let numbers = [1,2,3,4];
// console.log(sum(...numbers));
// console.log(power(abs(-5), 3));
import MyMath from './module.js';

// const MyMath = require('./module.js');

const { sum, power, abs } = MyMath;
let numbers = [1,2,3,4];
console.log(sum(...numbers));
console.log(power(abs(-5), 3));

// let numbers = [1,2,3,4];
// console.log(MyMath.sum(...numbers));
// console.log(MyMath.power(MyMath.abs(-5), 3));