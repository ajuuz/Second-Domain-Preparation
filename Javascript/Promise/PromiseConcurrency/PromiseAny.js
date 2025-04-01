// Promise call gives 4 static methods Promise.all , Promise.any , Promise.allSettled, and Promise.race . for enabling concurrency


//3. Promise.any - takes input as an array of Promise . returns first Promise that got resolved. if every promise got rejected , return aggregate error


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


const promise = Promise.any([task1(0),task2(0),task3(0)]);
promise.then((data)=>console.log(data))
.catch(error=>console.error(error))