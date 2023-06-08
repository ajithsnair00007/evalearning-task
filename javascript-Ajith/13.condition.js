const prompt = require("prompt-sync")();

//if-else statement
let num = prompt("enter a number");
if (num>0)
   console.log("greater than zero");
else
   console.log("less than zero")


//if elseif else statement
let num1 = 7;
let num2 =10;
let num3=9;

if(num1>num2 && num1>num3){
   console.log("num1 is greater");
}
else if(num2>num3){
   console.log("num2 is greater");
}
else
   console.log(`${num3} is greater`);

//nested if

let number = prompt("enter a new number");

if(number>=0){
   if(number>0){
      console.log("entered number is positive");
   }
   else{
      console.log("you have enetered zero");
   }
}
else
  console.log("entered number is negative");