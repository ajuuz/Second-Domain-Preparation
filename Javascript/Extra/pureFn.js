//Pure Function

// -- Return same output for the same inputs
// -- Does not have any side effects . (does not modifies external variables)

function pureAdd(a,b){
    return a+b;
}

pureAdd(1,2)
pureAdd(1,2)
pureAdd(3,5)

let total=0;
function ImpureAdd(value){
    return total+=value;
}

ImpureAdd(5)
ImpureAdd(5)