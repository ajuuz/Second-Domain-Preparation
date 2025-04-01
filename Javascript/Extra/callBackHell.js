function task1(callBack){
    console.log("first task completed")
    callBack()
}
function task2(callBack){
    console.log("second task completed")
    callBack()
}
function task3(){
    console.log("third task completed")
}

task1(()=>{
    task2(()=>{
        task3()
    })
})