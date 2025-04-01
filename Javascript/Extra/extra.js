//nullish operator  -  return the right hand side if left hand side is null or undifined
const userName="";   //null or undefined

const defaultName = userName ?? "ajmal"
console.log(defaultName)


// or operator || - return the right hand side if left hand side has falsy. else left  
const userName2=""  
const defaultName1 = userName2 || "ajmal" 
console.log(defaultName1)


//optional chaining  - used to access the object properties securely without throwing any error . if no property return undefined
const obj={
    name:"ajmal"
}
console.log(obj.name)
console.log(obj.address)
console.log(obj.address?.place)