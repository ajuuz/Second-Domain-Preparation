//shallow copy

// Only top level properties or values are copies . if object contains nested properties they are referenced . changes to those will affect the original too.

//1. using spread operator
const obj1={
    name:"ajmal",
    age:22,
    place:{
        state:"kerala",
        pincode:23444
    }
}

// const obj1clone = {...obj1}
// obj1clone.name="aju ea"
// obj1clone.place.state="calicut"
// console.log(obj1,obj1clone)

// const arr1=[1,2,3,4,[5,6]];
// const arr1clone = [...arr1];
// arr1clone[0]=10
// arr1clone[1]=20
// arr1clone[4][0]=1000
// arr1clone[4][1]=2000
// console.log(arr1,arr1clone)



// const objclone2 = Object.assign({},obj1);
// objclone2.name="sahil";
// objclone2.place.state="thrissur"
// console.log(obj1,objclone2)


// const objDeepClone = JSON.parse(JSON.stringify(obj1));
// objDeepClone.name="aslam";
// objDeepClone.place.state="kashmir"
// console.log(obj1,objDeepClone)

// const objDeepClone2 = structuredClone(obj1);
// objDeepClone2.name="aslam";
// objDeepClone2.place.state="kashmir"
// console.log(obj1,objDeepClone2)


const objDeepClone3 = _.cloneDeep(obj1);
objDeepClone3.name="aslam";
objDeepClone3.place.state="kashmir"
console.log(obj1,objDeepClone3)