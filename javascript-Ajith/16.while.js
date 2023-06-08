const prompt = require("prompt-sync")();

let i = 1;

while(i<=5){
    console.log('Hello World!');
    i++;
}

let j =10;

do{
    console.log('Hello!',j);
    j++;
}
while (j<=9)

let sum =0;
let num = parseInt(prompt('enter a number'));

while(num>=0){
    sum+=num;
    num =parseInt(prompt('enter a number')); 
}
console.log(`the sum is ${sum}`);

let k=5;
do{
    console.log(k);
    i++;
}
while(k>=6)