// Hàm dùng để thực hiện 1 chức năng gì đó?
// Tái sử dụng lại mã nguồn
// Expression Function
// Anonymous Function
// Quy ước đặt tên hàm và biến theo định dạng
// Camel Case: tongHaiSo
// Pascal Case: TongHaiSo
// Snake Case: tong_hai_so

// Cú pháp: khai báo hàm (Declaration function)
// function tenHam([parameters]){
//     <thân hàm>
//     [return]
// }
// 1. tenHam: 
// tương tự như quy ước đặt tên biến
// gợi nhớ/ liên quan đến nhiệm vụ của hàm
// bắt đầu bởi động từ 
// tên theo theo định dạng camel case
// 2. [parameters]: số lượng tham số >=0? 
// + optional paramenter
// + required/ mandatory parameter
// Nếu có optional paras thì những tham số này phải được khai báo sau các required paras
// dựa vào đâu để xác định số lương tham số?
// 3. <thân hàm>: logic, nhiệm vụ mà hàm sẽ xử lý, hộp đen
// 4. [return]: lấy kết quả về để làm việc khác hay ko?

// Math.random();
// Math.pow(4,5);
// Math.floor(4.56);
// console.log(3,4,6,7,8,9,9,5,4,4,4,3,2,2,2,6)

// let rnd = Math.random()
// Math.floor(rnd);
// Math.floor(Math.random());
// console.log(Math.random());
// function tong(){
//     return 2 * 3;
// }
// Viết 1 hàm sinh ra 1 mảng 1 chiều, có độ dài 10 phần tử và giá trị các phần tử sinh [10,40]
// re-use
// hard code
function createArray(size = 10, min = 10, max = 40) {
    let arr = new Array(size);
    for (let i = 0; i < size; i++) {
        arr[i] = Math.floor(Math.random() * (max - min + 1) + min);
    }
    // console.log(arr);
    return arr;
}

// let arr = createArray(15, 100, 200);
let arr = createArray();
console.log(arr)
// document.write(arr);
let total = arr.reduce(function (prev, value) {
    return prev + value
})

console.log(total)
let evenNumbers = arr.filter(function (value) {
    return value % 2 == 0
})
console.log(evenNumbers)
// createArray(15, 23, 45);
// Kiểu tham trị và kiểu tham chiếu
