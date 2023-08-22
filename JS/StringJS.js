const prompt = require("prompt-sync")({sigint: true});
let name1 = "harryYADAV";
console.log(name1.length);
console.log(name1.toUpperCase());
console.log(name1.toLowerCase())
console.log(name1.slice(3,9));
console.log(name1.slice(3));
console.log(name1.replace("YADAV", "BIHARI"));

// string interpulation
let boy1 = "nikhil";
let boy2 = "aakash";
let sentence = `${boy1} is an enemy of ${boy2}`
console.log(sentence);

let name2 = 'Anu\moy';
console.log(name2);

// Problems on String
1.
console.log("har\"".length)
2.
let string1 = prompt("Enter the string in uppercase: ");
console.log(string1.toLowerCase());
3.
let string2 = "number";
console.log(string2.replace(string2[4], "Y"));
4.
let string3 = "please give rupees 100";
let amount = (string3.slice("please give rupees ".length))
console.log(amount);