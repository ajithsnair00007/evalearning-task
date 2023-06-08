let fruits = ['Apple','Orange','Banana','Mango','Strawberry']
let vegetables = ['Tomato','Potato','Cabbage']
let flowers =['Rose','Sunflower','Jasmine']

console.log(fruits);

//toString() method used to covert array in string
let str = fruits.toString();
console.log(str);

console.log(typeof(fruits));
console.log(typeof(str));

//join() method also used to convert array into string using separators

let joinarr = fruits.join(' * ')
console.log(joinarr);
console.log(typeof(joinarr));

//pop() to remove last element from an array

fruits.pop()
console.log(fruits);
fruits.push('Pineapple')
console.log(fruits);

//push() method can also be used to find array length
console.log(fruits.push('kiwi'));
console.log(fruits);

//shift() method is used to remove the first element

fruits.shift();
console.log(fruits);

//unshift() method is used to add element in the starting position

fruits.unshift('Passion fruit');
console.log(fruits);

//delete method used for deleting elements from an array

delete fruits[0];
console.log(fruits);
console.log(fruits[0]);

fruits.unshift('Guava')
console.log(fruits);
fruits[1] = 'Jackfruit' 
console.log(fruits);

//splice() can be used add new elements to an array

fruits.splice(3,0,'Berry','Cherry');
console.log(fruits);

//splice() metho also can be used to remove elements from an array

fruits.splice(1,2);
console.log(fruits);

//concat() method used to merge different arrays

console.log(fruits.concat(vegetables)); 
console.log(fruits.concat(vegetables,flowers));

//slice() method used to slice a part an array and created a sliced new array

let slicedfruits = fruits.slice(2,5);
console.log(slicedfruits);

//sort() method is used to sort array elements in alphabetical order

fruits.sort()
console.log(fruits);

//reverse() used to reverse elements

fruits.reverse();
console.log(fruits);

let points = [23,45,10,56,100,4]
points.sort(function(x,y){
    return x-y
})
console.log(points);

