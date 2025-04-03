//Decorator Function

// -- A function wraps another function to extends the behaviour of that function without modifying the original function.

//- here count of calls have been founded my wrapping the add function by a decorator function . 

// function countCall(fn){
//     let count=0;

//     return function(a,b){
//         count++;
//         console.log(`function ${fn.name} called ${count} times`)

//         return fn(a,b)
//     }
// }

// function add(a,b){
//     return a+b;
// }


// const countedAdd = countCall(add);

// console.log(countedAdd(1,2))
// console.log(countedAdd(2,3))
// console.log(countedAdd(10,30))
// console.log(add(100,20))


// // -- whithout decorator function we have to modify the original function itself
// let count=0;
// function addAndGetCount(a,b){
//     count++;
//     console.log(`call count ${count}`)
//     return a+b
// }

// addAndGetCount(1,2)
// addAndGetCount(1,3)
// addAndGetCount(1,4)


