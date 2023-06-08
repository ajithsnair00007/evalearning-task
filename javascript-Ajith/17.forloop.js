//printing 10 numbers starting from 1
let i;
for(i=1;i<=10;i++){
    console.log(i);
}

let j;

for(j=1; j<=10; j++){
    console.log('hello',j);
}

let k;
let fruits = ['Apple','Orange','Guava','Grapes','Pineapple','Mango','Watermelon'];
let len = fruits.length

for (k=0; k<len; k++){
    console.log(fruits[k]);
}

let person = {
    fname:'MahendraSingh',
    lname:'Dhoni',
    age:42
}
let x;
let text=''
for (x in person){
    text+= person[x] + " ";

}
console.log(text);


let str = 'Evalogical'
let y;

for(y of str){
    console.log(y);
}

let a;
let b;

for (a=1;a<=5;a++){
    console.log('hi',a);
    for(b=a;b<=5;b++){
        console.log('hello',b);
    }
}

let numb = 12345678;
let reversenum = ""

while(numb>0){
    reversenum+=numb%10;
    numb = parseInt(numb/10);
   
}
console.log(reversenum);