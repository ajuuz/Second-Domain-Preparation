// Promise call gives 4 static methods Promise.all , Promise.any , Promise.allSettled, and Promise.race . for enabling concurrency


//1. Promise.all - takes input as an array of Promise . wait for all promise to get resolved. if any of one reject immediately reject.

function task1(condition){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
            if(condition){
                resolve("task1 resolved")
            }else{
                reject("task1 rejected")
            }
        },1000)
    })
}

function task2(condition){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
            if(condition){
                resolve("task2 resolved")
            }else{
                reject("task2 rejected")
            }
        },20000)
    })
}
function task3(condition){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
            if(condition){
                resolve("task3 resolved")
            }else{
                reject("task3 rejected")
            }
        },2000)
    })
}


const promise = Promise.all([task1(1),task2(1),task3(0)]);
promise.then((data)=>console.log(data))
.catch(error=>console.error(error))