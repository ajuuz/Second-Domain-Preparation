//Prototype

//In Javascript everything is object . that is function , array ,string everything is a special type of object .
// These object inherits methods and properties from other object through prototype



const obj={
    name:"ajmal"
}
const obj2={
    age:10
}

obj.__proto__ = obj2
console.log(obj.__proto__.__proto__)