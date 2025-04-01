// function step1(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("step1 completed")
//             resolve("Data from first step")
//         },1000)
//     })
// }


// function step2(previousData){
//     return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("step2 completed using :",previousData)
//         resolve("Data from second step")
//         },2000)
//     })
// }


// function step3(previousData){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("step3 completed using :",previousData)
//             resolve("Data from the step3")
//         },3000)
//     })
// }

// step1()
// .then((data)=>{
//     return step2(data)
// })
// .then((data)=>{
//     return step3(data)
// })
// .then((data)=>{
//     console.log(data,"whole process completed")
// })
// .catch((error)=>{
//     console.log(error)
// })



function sum1(amount){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(amount<0){
                reject("invalid amount")
            }
            else{
                resolve(amount+1000)
            }

            console.log("purchasing phase")
        },1000)
    })
}

function sum2(previousAmount){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(previousAmount<2200){
                resolve(previousAmount)
            }
            else{
                resolve(previousAmount-2000)
            }
            console.log("after billing. discount phase")
        },1000)
    })
}

sum1(1200)
.then(sum2)
.then(lastAmount=>console.log(lastAmount))
.catch(error=>console.error(error))