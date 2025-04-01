//includes using polifil

Array.prototype.myIsInclude = function(searchElement){
    return this.indexOf(searchElement) !== -1;
}

const arr=[1,2,3];



//Map using polifil
Array.prototype.myMap = function(callBack){
    let newArray=[]

    for(let i=0;i<this.length;i++){
        newArray.push(callBack(this[i],i,this))
    }

    return newArray;
}
const output = arr.myMap(num=>num*2);
console.log(output)