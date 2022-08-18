// let names = ["Khoa", "Thịnh", "Lý"];
// // let names_2 = names;
// let names_2 = [...names];
// names_2[1] = "Phôn";
// console.log(names)
// console.log(names_2)

let phon = {
    name: "Phôn",
    age: 18,
    gender: true
}

// let phuc = phon;
let phuc = {
    ...phon,
    name : "Phúc",
    email: "phuc@gmail.com"
}
// phuc.name = "Phúc";
console.log(phon);
console.log(phuc);

// pass by value
// let a = 5;
// let b = a;
// b = 10;
// console.log(a)
// console.log(b)
// pass by reference