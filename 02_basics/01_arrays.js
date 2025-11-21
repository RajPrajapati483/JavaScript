// arrays
// An array is a special variable, which can hold more than one value at a time.

// array holds multiple values in a single variable
const myArr = [0,1,2,3,4,5];
const myHeros = ['shaktiman', 'naagraj', 'doga'];
const myArr2 = new Array(6,7,8,9,10); // another way to create an array


console.log(myHeros[1]); // 0


// Array methods

// myArr.push(6); // add 6 at the end of the array
// myArr.push(7);
// myArr.pop(); // removes last element from array
console.log(myArr); // [0,1,2,3,4,5];


myArr.unshift(9); // adds 9 at the beginning of the array

console.log(myArr); // [9,0,1,2,3,4,5];
myArr.shift(); // removes first element from the array
console.log(myArr); // [0,1,2,3,4,5];


console.log(myArr.includes(9)); // false
console.log(myArr.indexOf(9)); // -1 (not found)
console.log(myArr.indexOf(3)); // 3 (index of 3)

const newArr = myArr.join(); // converts array to string
console.log(newArr); // "0,1,2,3,4,5"
console.log(typeof newArr)// string


// slice, splice

console.log("A ",myArr);

const myn1 = myArr.slice(1,3); // creates a new array from index 1 to 3 (3 not included)
console.log(myn1); // [1,2]
console.log("B ",myArr); // original array remains unchanged


const myn2 = myArr.splice(1,3); // removes 3 elements from index 1
console.log("C ",myArr); // original array is changed
console.log(myn2);// [1,2,3]