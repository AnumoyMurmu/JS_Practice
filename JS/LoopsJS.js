const prompt = require("prompt-sync")({sigint: true});
// For loop
for(let i = 0; i<4; i++)
{
    console.log(i);
}

// for in loop
let obj1 = {
    harry: 90,
    mine: 33,
    your_mom: 23
}

for(let b in obj1)
{
    console.log(b + " got " + obj1[b])
}

for(let b of "mine")
{
    console.log(b)
}

// practice set loops
//1.
let obj2 = {
    harry:98,
    rohan: 70,
    aakash:7
}
for(let a in obj2)
{
    console.log("The marks of " + a + " is " + obj2[a]);
}

//2.
for(let i = 0; i<Object.keys(obj2).length; i++)
{
    console.log(Object.keys(obj2)[i]);
}

// 3.
const Correct_Num = 33;
let number1 = prompt("Enter the number:");


if(number1==Correct_Num)
console.log("Correct Number")
else
console.log("Try again");

cn = 34;
let number2 = prompt("Enter the number:");
while(number2 != cn)
{
    console.log("Try again")
    number++;
}
console.log("Correct Number")


//4.
const minimun = (a,b,c,d) => {
    return (a+b+c+d)/4
}

console.log(minimun(12,3,213,23));
