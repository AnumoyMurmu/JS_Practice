
//user input
let a = prompt("Enter your age: ");
a = number.parseInt(a);   //converts strings into int
console.log(a);
console.log(typeof a)

const prompt = require("prompt-sync")({sigint: true});
let age = prompt("Enter your age: ");
a = number.parseInt(a);   //converts strings into int
console.log(a);
console.log(typeof a)

if(age>18)
console.log("you are allowed")
else
console.log("u r not");

Conditional statement
let a = 10;

if ( a>10)
alert("You can drive")
else
alert("you cant")


Function (Arrow)
1.
const mult = (a,b,c,d) =>{
    e = (a+b)/c;
    f = e+d;
    return f;
}
console.log(mult(12,21,21,3));

2. function without argument
const hello = () =>{
    console.log("Hello world");
}