//FLAT

// flat the array based on the level
const arr=[1,2,[3,4,[5]]]
console.log(arr.flat(2))


// FLAT MAP
// FLAT the return array after map method

const arr2=[1,2,3,4,5];
const output = arr2.flatMap((element,index)=>[index,element])
console.log(output)