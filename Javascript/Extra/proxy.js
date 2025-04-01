//PROXY

// - Proxy is an object that wraps another object and allows us to control over the object how to be access and modified

// proxy is an object that wraps another object 
// this proxy object contains some proxy traps like get ,set, etc..
// based on the traps only we can access and modifies the properties of wrapped object

// let person = {name:"ajmal",age:22};

// let handler={
//     get:(target,property)=>{
//         return property in target ? target[property] : `${property} is not defined`
//     },
//     set:(target,property,value)=>{
//         if(property==='age' && value < 0){
//             console.log('Age cannot be negative')
//             return false
//         }

//         target[property] = value;
//         return true;
//     },
//     deleteProperty(target,property){
//         if(property==='password'){
//             console.log("cannot delete password")
//             return false;
//         }
//         return delete target[property];
//     }
// }

// const proxyPerson = new Proxy(person,handler);
// console.log(proxyPerson.name)
// console.log(proxyPerson.age)
// // console.log(proxyPerson.place)
// // proxyPerson.age=-10
// // console.log(proxyPerson.age)
// // proxyPerson.age=100;
// // console.log(proxyPerson.age)

// proxyPerson.password="ajmal123";
// delete proxyPerson.password;
// delete proxyPerson.name;
// console.log(person)


let person = {
    name:"ajmal",
    age:22
}

let handler={
    get:(target,property)=>{
        return property in target?target[property]:`${property} is not defined`
    },
    set:(target,property,value)=>{
        if(property==="age" && value<0){
            console.log("age cannot be negative")
            return false;
        }

        target[property] = value;
        return true;
    },
    deleteProperty:(target,property)=>{
        if(property==="password"){
            console.log("cannot delete password")
            return false;
        }

        delete target[property]
        return true;
    }
}

const proxyPerson = new Proxy(person,handler)
// console.log(proxyPerson.name)
// console.log(proxyPerson.age)
// console.log(proxyPerson.place)
// proxyPerson.place="kalamassery"
// proxyPerson.age=30;
proxyPerson.password = "ajmal123";
console.log(person)
delete proxyPerson.password;
console.log(person)