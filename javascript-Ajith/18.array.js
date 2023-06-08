let arr = ['apple','orange',35];
console.log(typeof(arr));
console.log(arr);
arr[2] = 'grapes'
let i;

for (i=0;i<arr.length;i++){
    console.log(arr[i] ,typeof(arr[i]))
    
}

//looping through an array

let players = ['Dhoni','Sachin','Kohli','Messi','Ronaldo'];
let j;
for (j=0;j<players.length;j++){
    console.log(players[j]);
}

//adding a new array element

arr.push('strawberry')
console.log(arr);
arr[4] = 'mango'
console.log(arr);
arr[6] = 'watermelon'
console.log(arr);
arr[5] = 'pineapple'
let k
for (k=0;k<arr.length;k++){
    console.log(arr[k]);
}

console.log(Array.isArray(arr));

//Arrays with named indexes are called Associative arrays.
//But Js doesnot support associative arrays.It supports arrays with numbered index.
//For named index in javascript , we use objects