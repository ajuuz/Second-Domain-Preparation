// Promise call gives 4 static methods Promise.all , Promise.any , Promise.allSettled, and Promise.race . for enabling concurrency

//4. Promise.race - return first settled promise whether resolve or rejected.

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
        },3000)
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


const promise = Promise.race([task1(0),task2(1),task3(1)]);
promise.then((data)=>console.log(data))
.catch(error=>console.error(error))