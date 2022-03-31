// 1. Kiểu dữ liệu nguyên thủy: number, string, boolean, array
// 2. Kiểu dữ liệu do người dùng định nghĩa: object, struct
// let staffs = [
//     [1, "Khoa Nguyễn 1", true, "11/10/2000", "khoa.nguyen+1@codegym.vn"],
//     [2, "Khoa Nguyễn 2", true, "12/10/2000", "khoa.nguyen+2@codegym.vn"],
//     [3, "Khoa Nguyễn 3", true, "13/10/2000", "khoa.nguyen+3@codegym.vn"],
//     [4, "Khoa Nguyễn 3", true, "14/10/2000", "khoa.nguyen+4@codegym.vn"],
// ]

// console.log(staffs[2][3])
// trong object
// Thuộc tính (property) : giá trị (value)
// Phương thức (method) / hành động
// let qa = {
//     id: 1,
//     fullname: "Quỳnh Anh",
//     gender : false,
//     dob : "10/10/2000",
//     hobbies: ["Shopping", "Xem phim", "ăn hàng"],
//     phoneNumber : "0935737475",
//     getHobbies : function(){
//         return this.hobbies.map(function(hobby){
//             return hobby.toUpperCase();
//         })
//     },
//     getPhoneNumber : function(){
//         return this.phoneNumber.substring(0, this.phoneNumber.length-3) + "XXX";
//     }
// }

// // console.log(qa["fullname"])
// // context
// console.log(qa.getPhoneNumber())

// let rot = {
//     id: 2,
//     fullname: "Rót Hít Đất",
//     gender : true,
//     dob : "10/10/2000",
//     hobbies: ["Đá bóng", "Hít đất", "ăn hàng"],
//     phoneNumber : "0935888888",
//     getHobbies : function(){
//         return this.hobbies.map(function(hobby){
//             return hobby.toUpperCase();
//         })
//     },
//     getPhoneNumber : function(){
//         return this.phoneNumber.substring(0, this.phoneNumber.length-3) + "XXX";
//     }
// }

// console.log(rot.getPhoneNumber())

// // spread
// // let ha = rot;
// let ha = {...rot};
// ha.fullname = "Huy Anh"

// console.log(rot)
// console.log(ha)

// Class: gồm nhiều đối tượng (object) có cùng thuộc tính (properties) và hành vi/phương thức (methods)
// getter/setter
// setter: bổ sung/sửa đổi giá trị của 1 thuộc tính
// getter: lấy ra giá trị đang lưu trữ ở 1 thuộc tính
// Access Modifier
function Student(fullname, gender, dob, email){
    this.fullname = fullname;
    this.gender = gender;
    this.dob = dob;
    this.email = email;
    this.hobbies = [];
    this.setHobbies = function(hobbies){
        this.hobbies = hobbies;
    }
    this.greeting = function(){
        return `My name is ${this.gender ? 'Mr' : "Ms"}.${this.fullname}`;
    }
    this.getHobbies = function(){
        return this.hobbies.join(",")
    }
}

// let phuoc = new Student("Phước", true, "1/2/2000", "phuoc@gmail.com")
// let phuc = new Student("Phúc", true, "11/2/2000", "phuc@gmail.com")
// console.log(phuoc.greeting())
// console.log(phuc.greeting())
// phuoc.setHobbies(["Đá banh", "Bơi lội"])
// phuc.setHobbies(["Cầu lông", "Bóng chuyển"])
// console.log(phuoc.getHobbies())
// console.log(phuc.getHobbies())

// let arr = new Array(1,2,4,5)
// console.log(arr.join("+"))
// let arr2 = new Array(10,20,40,50)
// console.log(arr2.join("-"))

// // Declareration function
// function sum(){}
// // Expression function
// const substract = function (){}
// // Anonymous function

// let arr = []
// arr.map(function(){

// })
// // class
// function Person(){
//     // Method
//     this.greeting = function(){

//     }
// }

// // Object Contructor


let students = [
    new Student("Ngọc", true, "1/1/2001", "ngoc@gmail.com"),
    new Student("Tài", true, "10/10/2001", "tài@gmail.com"),
    new Student("Tiến", true, "11/11/2001", "tiến@gmail.com"),
    new Student("Vinh", true, "10/11/2001", "vinh@gmail.com"),
]

// let existTien;
// for(let student of students){
//     existTien = false;
//     if(student.fullname == "Tiếng"){
//         existTien = true;
//         break;
//     }
// }

// console.log(`${existTien ? "Có" : "Không có"} Tiến`)

// let result = students.findIndex(function(student){
//     return student.fullname == "Tiếng"
// })

// console.log(`${result != -1 ? "Có" : "Không có"} Tiến`)

let htmls = students.map(function(student){
    return `
                <tr>
                    <td>${student.fullname}</td>
                    <td>${student.gender}</td>
                    <td>${student.dob}</td>
                    <td>${student.email}</td>
                </tr>
            `
})
document.write(`<table border="1"><tbody>${htmls.join("")}</tbody></table>`)


// Tạo 1 class có tên Product
// Có các thuộc tính: productId, productName, price, quantity
// Tạo 1 mảng products, gồm 5 sản phẩm
// Hiển thị các sản phẩm đang có trong products vào 1 bảng