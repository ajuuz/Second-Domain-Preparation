//Reduce right

// perform reduce method from the right end of the array

const arr=[1,2,3,4,5];
const output = arr.reduceRight((acc,curr)=>acc+=curr,"")

console.log(output)
