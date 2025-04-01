function cacheStorage(){
    let cached={}
    return function(num){
        if(!cached[num]){
            cached[num] = num*num;
            console.log("not cached")
        }
        return cached[num]
    }
}

const square = cacheStorage();
console.log(square(2))
console.log(square(4))
console.log(square(2))
console.log(square(4))


function sample1(){
    let a=16570;
    return function(){
        return a;
    }
}

const sam = sample1();
console.log(sam())