class Student {
    constructor(name) {
        this.name = name;
    }
    greeting() {
        return `My name is ${this.name}`;
    }
}

Student.prototype.setAge = function (age) {
    this.age = age;
}

Student.prototype.email = "";
let thinh = new Student("Thịnh");
console.log(thinh.greeting())
thinh.setAge(18);
