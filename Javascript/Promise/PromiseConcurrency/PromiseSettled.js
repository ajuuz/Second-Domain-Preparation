// Promise call gives 4 static methods Promise.all , Promise.any , Promise.allSettled, and Promise.race . for enabling concurrency


//2. Promise.allSettled - similar to the promise.all , but doesnot reject if one got rejected. wait for all promise to get settled. (failed or resolved)


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
        },4000)
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


const promise = Promise.allSettled([task1(0),task2(0),task3(0)]);
promise.then((data)=>console.log(data))
.catch(error=>console.error(error))