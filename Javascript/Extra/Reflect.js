//Reflect 

// - Reflect is a javascript built in object which works with proxies and object - Directly access and modify the object
// - Even though we have tradition methods to access and modify object
// - Reflect is a standardised way , more consistent and no need to remember syntax


let person = {
    name:"ajmal",
    age:22
}

console.log(Reflect.get(person,'name'))
Reflect.set(person,'name','ajuz')
Reflect.set(person,'place','kalamassery')
console.log(person)
Reflect.deleteProperty(person,'name');
console.log(person)
