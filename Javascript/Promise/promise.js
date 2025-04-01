function eligibility(age){
    return new Promise((resolve,reject)=>{
        if(age<18){
            reject("you are not eligible")
        }else{
            resolve("you are eligible")
        }
    })
}


eligibility(20)
.then((message)=>console.log(message))
.catch((error)=>console.error(error))