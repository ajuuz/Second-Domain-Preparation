// // let userName="ajmal"
// // userName[0]="H"
// // console.log(userName)
// let rollno = new Number(0)
// // userName.name="aju";
// // console.log(userName.name)
// console.log(rollno)

// function sampleFunction(){
//     setInterval(()=>{
//         console.log("working")
//     },1000)
// }

// sampleFunction()



const sample = '101101000101000011'
let count = 0;
for (let i =0 ; i<sample.length; i++){
    count+=Number(sample[i])
}

console.log(sample.length-count)
