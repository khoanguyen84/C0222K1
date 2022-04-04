// OOP ES6
// Object Contructor
// Arrow Function

// 1. Bao đóng (Access Modifier)
// 2. Trừu tượng
// 3. Kế thừa
// 4. Đa hình
class Staff {
    constructor(id, fullname, age, dob) {
        this.id = id;
        this.fullname = fullname;
        this.age = age;
        this.dob = dob
    }

    greeting(){
        return `My name is ${this.fullname}`
    }

    static rule(){
        return "Still breath still alive";
    }
}

class Manager extends Staff{
    constructor(id, fullname, age, dob, title){
        super(id, fullname, age, dob);
        this.title = title;
    }
    greeting(){
        // return `${super.greeting()}, I'm ${this.title}`
        return `I'm ${this.title}, I'm ${this.age} years old`;
    }
    // introduction(){
    //     return `My name is ${this.fullname}, I'm ${this.title}`
    // }
    // getTitle(){
    //     return this.title;
    // }
}

Manager.prototype.getTitle = function(){
    return this.title;
}

// let khoa = new Staff(1, "Khoa", 18, "10/10/2222")
// console.log(khoa.greeting())

let phuoc = new Manager(2, "Phước", 20, "1/1/2000", "Team Leader");
// console.log(phuoc.greeting())
console.log(phuoc.getTitle())
// console.log(phuoc.introduction())

// class Manager {
//     constructor(id, fullname, age, dob, title) {
//         this.id = id;
//         this.fullname = fullname;
//         this.age = age;
//         this.dob = dob;
//         this.title = title;
//     }

//     greeting(){
//         return `My name is ${this.fullname}`
//     }
// }

// function Staff2(id, fullname, age, dob) {
//     this.id = id;
//     this.fullname = fullname;
//     this.age = age;
//     this.dob = dob;
//     this.greeting = function(){
//         return `My name is ${this.fullname}`
//     }
// }

// let arr = new Array();
// arr.join()
// arr.join2();

// Math.random()

// class MyMath{
//     static random(){

//     }
// }

// MyMath.random()


// let a = new Array()

// Array.join();

// class MyArray{
//     join(){

//     }
// }

// let arr = new MyArray();
// arr.join();


let array = new Array();

Array.prototype.join2 = function(){

}
array.join2();

// polyfill

if(Array.prototype.includes2 !== 'function'){
    Array.prototype.includes2 = function(value){
        for(let i = 0; i < this.length; i++){
            if(this[i] == value)
                return true;
        }
        return false;
    }
}
if(Array.prototype.sum !== 'function'){
    Array.prototype.sum = function(){
        let total = 0;
        for(let i = 0; i < this.length; i++){
            total += this[i]
        }
        return total;
    }
}

let numbers = [2,4,4,7,7,8,9,6];
let numbers2 = [6,7,8,8,4,3,3,2];
console.log(numbers.includes2(61));
console.log(numbers2.sum());
