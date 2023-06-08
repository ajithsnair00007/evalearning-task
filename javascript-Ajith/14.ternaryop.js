const prompt = require("prompt-sync")();

let number =5;

let result = (number%2===0)? "even":"odd"
console.log(result);

let favorite = 'MS DHONI'
let yourfav = prompt("enter your favorite cricket player in caps")
let answer=(yourfav == favorite)? 'Our favorites are same':"we have different opinions"
 console.log(answer);