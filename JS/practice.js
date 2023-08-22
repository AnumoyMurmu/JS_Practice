const prompt = require("prompt-sync")({sigint: true});


let n = [2,3,5,323,31432]

n.forEach((element)=>{
    console.log( element*element);
})

let name = "array";
let b = Array.from(name);
console.log(typeof b)

for(let a of n)
{
    console.log(a);
}

for(let a in n)
{
    console.log(a)
}

let map01 = n.map((value, index)=>{
    console.log(value, index)
    return value*index;
})
console.log(map01)

let filter01 = n.filter((x)=>{
    return x>100;
})
console.log(filter01)
