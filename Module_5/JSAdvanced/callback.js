// callback
// 1. phải là 1 hàm (function)
// 2. phải được truyền vào 1 hàm (phương thức) khác thông qua đối số (agrument)
// 3. phải được thực thi (gọi)

// let numbers = [1, 3, 4, 5];
// const process = function(preValue, currValue){
//     return preValue + currValue;
// }
// let result = numbers.reduce(process)

// console.log(result)

function callback(n1, n2){
    return n1 + n2;
}

function useCallback(arg){
    console.log(arg(5,7));
}

useCallback(callback)