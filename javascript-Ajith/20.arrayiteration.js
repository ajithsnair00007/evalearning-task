let nums = [1,2,3,4,5,6]

//forEach() method executes a provided function once for each array element.
nums.forEach((n)=>{
    console.log(n);
})

//map() method in JavaScript creates an array by calling a specific function on each element present in the parent array.
//console.log(nums.map(n=>n*2));
nums.map(n=>n*2)
    .forEach(n=>{
    console.log(n);
})

/*filter() method is used to create a new array from a given array consisting of only those elements 
  from the given array which satisfy a condition set by the argument method.*/

let result = nums.filter(n=>n>2)
    
        console.log(result);

        result.forEach(n=>{
        console.log(n);
            })

/*reduce()  method in JavaScript is used to reduce the array to a single value and executes
 a provided function for each value of the array (from left-to-right) and the
  return value of the function is stored in an accumulator.*/

let sum = nums.reduce((a,b)=>a+b);
console.log(sum);


/*every() method checks whether all the elements of the array satisfy the given condition or not 
that is provided by a method passed to it as the argument.*/ 
let overZero = nums.every(n=>n>5);
console.log(overZero);

/*some() method checks whether at least one of the elements of the array satisfies the condition checked by the argument method.*/

let overFive = nums.some(n=>n>5);
console.log(overFive);

/* find() method is used to get the value of the first element in the array that satisfies the provided condition. 
It checks all the elements of the array and whichever the first element satisfies the condition is going to print.*/
let find = nums.find(n=>n>5);
console.log(find);