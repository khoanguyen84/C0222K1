let numbers = [4, 2, 3, 5, 6, 8, 9, 9, 7];
// numbers.length = 15;
// for(let i = 0 ; i< numbers.length; i++){
//     console.log(numbers[i])
// }
// for..in: duyệt qua indexes của mảng
// for(let index in numbers){
//     console.log(numbers[index])
// }

// for..of: duyệt qua value của các phần tử trong mảng
// for(let number of numbers){
//     console.log(number)
// }

// 1. forEach()
// numbers.forEach(function(number, index, data){
//     console.log(`${index}- ${number}: ${data}`)
//     // console.log(index)
// })
// 2. map(): ánh xạ
// numbers = ["<li>4</li>", "<li>2</li>", "<li>3</li>", "<li>5</li>", "<li>6<</li>", "<li>8</li>", "<li>9</li>", "<li>9</li>", "<li>7</li>"];
// let htmls = numbers.map(function(number){
//     return `<li>${number}</li>`
// })

// console.log(htmls)
// 3. filler
// let result = numbers.filter(function(number){
//     // return number >=5 && number <=8;
//     return number != 9;
// })
// console.log(result)

// 4. reduce
// let total = numbers.reduce(function(prev, number){
//     return prev + number + ";";
// })
// console.log(total)
// 5. every()
// let result = numbers.every(function(number){
//     return number > 6
// })
// console.log(result)
// 6. some()
// let result = numbers.some(function(number){
//     return number > 60
// })
// console.log(result)
// 6. indexOf()
// let position = numbers.indexOf(9)
// console.log(position)
// 7. lastIndexOf()
// let position = numbers.lastIndexOf(9)
// console.log(position)
// 8. find()
// let found = numbers.find(function(number){
//     return number > 5;
// })
// console.log(found)
// 9. findIndex()
// let position = numbers.findIndex(function(number){
//     return number > 5;
// })
// console.log(position)
// numbers.splice(position, 1)
// 10. from()
// let string = "234654657658";
// let so = Array.from(string)
// console.log(so)
// console.log(string.split(""))
// 11. keys()
// for(let key of numbers.keys()){
//     console.log(key)
// }
// 12. entries
// for(let entry of numbers.entries()){
//     console.log(entry)
// }
// 13. includes
console.log(numbers.includes(51))