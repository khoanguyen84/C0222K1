// 1. toString()
let array = [3, 4, 5, 6, 7, 7];
// let str= "";
// for (let index = 0; index < array.length; index++) {
//     if(index == array.length - 1){
//         str +=`${array[index]}`
//     }
//     else{
//         str +=`${array[index]},`
//     }
// }
// console.log(str)
// console.log(array.toString())

// 2. join()
// console.log(array.join("<br>"))
// 3. pop(): xóa 1 phần tử ỏ cuôi mảng và trả về giá trị của phần tử đó
// console.log(array)
// console.log(array.pop())
// console.log(array)
// 4. push(): thêm 1 hoặc nhiều phẩn tử và cuối mảng và trả về độ dài mới của mảng
// console.log(array)
// console.log(array.push(8,9,10,11))
// console.log(array)
// 5. shift(): xóa phần tử đầu mảng và trả về giá trị của phần tử đó
// console.log(array)
// console.log(array.shift())
// console.log(array)
// 6. unshift(): thêm 1 hoặc nhiều phần tử vào đầu mảng, và trả về độ dài mới của mảng
// console.log(array)
// console.log(array.unshift(7,4,5,7,7,8))
// console.log(array)
// 7. delete(): xóa đi giá trị tại vị trí index
// console.log(array)
// console.log(delete array[1])
// console.log(array)
// console.log(array.length)
// 8. concat(): gộp 1 hoặc nhiều mảng (giá trị) vào trong 1 mảng khác và trẳ về mẳng mới sau khi gộp
// let array2 = [99, 98, 97]
// console.log(array)
// let merge = array.concat(array2, 0, 55, 66);
// console.log(merge)
// 9. splice()
// + Xóa các giá trị bắt đàu từ vị trí (start) và xóa đi (deleteCount) giá trị. Trả về mảng các phần tử vừa được xóa
// console.log(array)
// console.log(array.splice(2, 1))
// console.log(array)
// + thêm 1 hoặc nhiều phần tử vào mảng bắt đầu từ vị trí (start)
// console.log(array)
// console.log(array.splice(2, 0, 9, 9, 9))
// console.log(array)
// + Kết hợp xóa và thêm các giá trị cùng 1 vị trí (start)
// console.log(array)
// // array.splice(2, 3)
// // array.splice(2, 0, 10, 10, 10)
// array.splice(2, 3, 10, 10, 10)
// console.log(array)
// 10. slice(): trả về mảng con (sub array) từ mẳng góc bắt đầu vị trí (start) và kết thực vị (end)
// console.log(array)
// console.log(array.slice(1,4))
// 11.sort()
// + sắp xếp theo alphabe
// + muốn sắp xếp theo number thì phải sủ dụng 1 hàm so sánh (compare function) /(callback, anonymous function)
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.sort())
let numbers = [1, 20, 11, 2, 31, 3]
// console.log(numbers.sort())
numbers.sort(function(n1, n2){
    return n1 - n2;
})
// numbers.sort(function(n1, n2){
//     return n2 - n1;
// })
console.log(numbers.reverse())