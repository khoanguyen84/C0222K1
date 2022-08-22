// function counter(){
//     let count = 0;
//     function increment(){
//         return ++count;
//     }

//     return increment;
// }

// let countApp = counter();
// console.log(countApp())
// console.log(countApp())
// console.log(countApp())

// let cars = ["Toyoto", "BMW", "Ferrari"];

// let carApp = {
//     getCar(){
//         return cars;
//     },
//     addCar(name){
//         cars.push(name);
//     }
// }

// console.log(carApp.getCar())
// carApp.addCar("Lambogini");
// cars = [];
// console.log(carApp.getCar())

function appCar() {
    let cars = ["Toyoto", "BMW", "Ferrari"];
    let name ="";
    let phone = "";
    return {
        getCar() {
            return cars;
        },
        addCar(name) {
            cars.push(name);
        },
        getName(){
            return name.toUpperCase();
        },
        setName(newName){
            name = newName;
        },
        setPhone(phoneNumber){
            phone = phoneNumber;
        },
        getPhone(){
            return `${phone.substring(0, phone.length - 3)}XXX`;
        }
    }
}

let carX = appCar();

// carX.setName("quỳnh anh");
// console.log(carX.getName());
carX.setPhone('0935216417');
console.log(carX.getPhone())
// console.log(carX.getCar())
// carX.addCar("Lambogini");
// cars = [];
// console.log(carX.getCar())