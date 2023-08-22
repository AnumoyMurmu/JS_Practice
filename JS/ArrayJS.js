const prompt = require("prompt-sync")({sigint: true});

let a1 = ["banana", 7, 9, "apple", 92, false, undefined];
console.log(a1.length);
a1[3] = 69;
console.log(typeof a1);

for(let i = 0; i<a1.length; i++)
{
    console.log(a21[i]);
}

// array methods
// 1.
let n = [2,3,5,323,31432]
console.log(typeof n.toString());

2.
console.log(n.join("_"));

3.
console.log(n.pop());
console.log(n);

4.
console.log(n.push(32));
console.log(n);

5.
console.log(n.shift());   //removes element from the beginning of the array
console.log(n);

6.
console.log(n.unshift(32));   //adds element at the beginning of the array
console.log(n);

7.
console.log(delete n[0]);
console.log(n.length)
console.log(n);
console.log(n.length)

8.
let a = [321, "rohan", 235]
let c = ["akku", "hero", "brag"]
d=n.concat(a,c)
console.log(d)

9.
console.log(n.sort)
console.log(n)

10.
n.splice(2,3,21,23,24)
console.log(n)

11.
n.slice(1,3)
console.log(n)

12.
console.log(n.reverse())

// Looping through Array
//for each loop   (operation on existing array)
n.forEach((element) => {
console.log(element*element);   //multiplies elements in arrays with them
})

// array from  (converts anything to array)
let name = "harry";
let arr1 = Array.from(name);
console.log(arr1);
console.log(typeof arr1);

// for...of
for(let i of n)
{
console.log(i);
}

// for...in
for(let i in n)
{
console.log(i);
}

// map()   (use it to create new array)
1.
let a0 = n.map((element)=>{
    console.log(element)
    return element+1
})
console.log(a0)
2.
let a2 = n.map((value, index)=>{
    console.log(value, index)
    return value+1
})
console.log(a2)


// Array filter method 
let n3 = [23,324,2,324,1,4,3,325]
let a3 = n3.filter((x)=>{
    return x<10;
})
console.log(a3);


// Array reduce method
let n4 = [23,324,2,324,1,4,3,325]
let arr4 = n4.reduce((b,c)=>{
    return b+c;
})
console.log(arr4)


// QnA
//1.
let arr5 = [12,123,"harry","jack"]
let input2 = prompt("Enter any value: ");
arr5.push(input);
console.log(arr5);
2.
let arr6 = [12,123,"harry","jack"]
do{
var input = prompt("Enter any value: ");
arr6.push(input);
}while(input != 0)
console.log(arr6);
3.
let arr7 = [32,24,3,101,12,501]
let a7 = arr7.filter((divisible)=>{
    return divisible%10 == 0;
})
console.log(a7);
4.
let arr8 = [32,24,3,101,12,501]
let a8 = arr8.map((el)=>{
    return el*el;
})
console.log(a8);
5.
let arr9 = [1,2,3,4,5,6,7,8,9]
let a9 = arr9.reduce((el1,el2)=>{
    return el1 * el2;
})
console.log(a9);

