function task1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("task1 completed")
            resolve("DATA1")
        },1000)
    })
}

function task2(previousData){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(`task2 completed`,`previousData ${previousData}`)
            resolve("DATA2")
        },1000)
    })
}

function task3(previousData){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(`task3 completed`,`previousData ${previousData}`)
            resolve("DATA3")
        },1000)
    })
}


task1()
.then((data)=>{
    return task2(data)
})
.then((data)=>{
    return task3(data)
})
.then((data)=>console.log(data))
.catch((error)=>console.error(error))