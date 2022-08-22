// setTimeout(function(){
//     console.log(1);
//     setTimeout(function(){
//         console.log(2);
//         setTimeout(function(){
//             console.log(3);
//             setTimeout(function(){
//                 console.log(4);
//             }, 1 * 1000)
//         }, 1 * 1000)
//     }, 1 * 1000)
// }, 2 * 1000)

const promise = new Promise(
    // Executor
    function(resolve, reject){
        // logic
        // return resolve([
        //     {
        //         name: "Khoa"
        //     },
        //     {
        //         name: "Phúc"
        //     }
        // ]);
        // return reject("error");
        return resolve(1);
    }
)

// promise chain
promise
    .then(function(number){
        console.log(number);
        return ++number;
    })
    .then(function(number){
        console.log(number);
        return ++number;
    })
    .then(function(number){
        console.log(number);
        return ++number;
    })
    .then(function(number){
        console.log(number);
        return ++number;
    })
    .catch(function(error){
        console.log(error);
    })
    .finally(function(){
        console.log("Done")
    })
