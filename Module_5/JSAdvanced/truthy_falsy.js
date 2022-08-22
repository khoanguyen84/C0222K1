// let number = 0;
// let message = "Bằng không";
// if(number){
//     console.log(message || "number not equals zero");
// }
// else{
//     console.log(message || "number equals zero");
// }

let product = {
    name: "Ip 6",
    photo: "",
    price: 1000000
}

let {name, photo, price} = product;

console.log(`name: ${name}, photo: ${photo || 'link photo'}`);