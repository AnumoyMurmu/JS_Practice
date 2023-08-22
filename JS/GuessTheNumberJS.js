const prompt = require("prompt-sync")({sigint: true});

let RandomNum = parseInt(Math.random()*100);
// console.log(RandomNum)
let UserNum;

do{
UserNum = prompt("Guess the number: ");
if(UserNum == RandomNum)
{
    console.log("You have guessed it correct");
}
else if(UserNum>RandomNum){
console.log("Your number is too Large");
}
else{
    console.log("Your number is too small");
}

} while(UserNum >=0)
