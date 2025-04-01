const person1={
    name:"ajmal",
    age:23,
    
}

const person2={
    name:"sahil",
    age:22
}


function getDetails(place,pincode){
    console.log(`name ${this.name} age ${this.age} place ${place} pincode ${pincode}`)
}

// getDetails.call(person1,"kalamassery",682022)
// getDetails.apply(person2,["edapally",687867])
const person1Details = getDetails.bind(person1,"kalamassery",682022)
person1Details()