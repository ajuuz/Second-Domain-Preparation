const newMap = new Map();

newMap.set("name","ajmal")
newMap.set("age",22)
newMap.set(77,"dob")
console.log(newMap.get('name'))
console.log(newMap.has('name'))
console.log(newMap.keys())
console.log(newMap.values())
console.log(newMap.entries())
newMap.clear()
console.log(newMap)