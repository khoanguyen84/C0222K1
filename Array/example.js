let size = 6;
let min = 1;
let max = 9;
let matrix = [];
for (let i = 0; i < size; i++) {
    let array = [];
    for (let j = 0; j < size; j++) {
        array[j] = Math.floor(Math.random() * (max - min + 1) + min)
    }
    matrix[i] = array;
}
console.log(matrix);
let totalEvenNumber = 0;
for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
        if (matrix[i][j] % 2 == 0)
            totalEvenNumber += matrix[i][j]
    }
}
console.log("Total of even number: ", totalEvenNumber)
let totalPrimary = 0;
for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
        if (i == j)
            totalPrimary += matrix[i][j]
    }
}
// for(let i = 0; i< size; i++){
//     totalPrimary += matrix[i][i]
// }
console.log("Total of number in primary: ", totalPrimary);
let totalSecondary = 0;
for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
        if (i + j == size - 1)
            totalSecondary += matrix[i][j]
    }
}
// for(let i = 0; i< size; i++){
//     totalSecondary += matrix[i][size - i - 1]
// }
console.log("Total of number in secondary: ", totalSecondary);

let totalBorder = 0;
for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
        if (i == 0 || j == 0 || i == size - 1 || j == size - 1)
            totalBorder += matrix[i][j]
    }
}
console.log("Total of number in border: ", totalBorder);
// let triangleDown = JSON.parse(JSON.stringify(matrix))
let triangleDown = [];
for (let i = 0; i < size; i++) {
    triangleDown[i] = []
    for (let j = 0; j < size; j++) {
        triangleDown[i][j] = matrix[i][j]
    }
}
for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
        if (j > i)
            triangleDown[i][j] = 0;
    }
}
console.log("Ma trận tam giác dưới")
console.log(triangleDown)

// let triangleUp = JSON.parse(JSON.stringify(matrix))
let triangleUp = [];
for (let i = 0; i < size; i++) {
    triangleUp[i] = []
    for (let j = 0; j < size; j++) {
        triangleUp[i][j] = matrix[i][j]
    }
}
for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
        if (j < i)
            triangleUp[i][j] = 0;
    }
}
console.log("Ma trận tam giác trên")
console.log(triangleUp)
