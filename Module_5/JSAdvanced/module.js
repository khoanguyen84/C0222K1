// function sum(...rest){
//     let total = 0;
//     for(let i = 0; i < rest.length; i++){
//         total += rest[i];
//     }
//     return total;
// }

// export function power(n, m){
//     let result = 1;
//     for(let i = 0; i < m ;i++){
//         result *= n;
//     }
//     return result;
// }

// export function abs(number){
//     return Math.abs(number);
// }

// export default sum;

const MyMath = {
    sum(...rest) {
        let total = 0;
        for (let i = 0; i < rest.length; i++) {
            total += rest[i];
        }
        return total;
    },

    power(n, m) {
        let result = 1;
        for (let i = 0; i < m; i++) {
            result *= n;
        }
        return result;
    },
    abs(number) {
        return Math.abs(number);
    }
};
export default MyMath;
