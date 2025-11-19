const score = 400
// console.log(score);



const balance = new Number(100) // Number object
// console.log(balance);

// console.log(balance.toString().length); // converts number to string and then gets the length
// console.log(balance.toFixed(2)); // shows 2 digits after decimal point

const otherNumber = 1234.8966

// console.log(otherNumber.toPrecision(4)); // shows total number of digits including before and after decimal point

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); // adds commas according to Indian numbering system

// +++++++++++++ Maths +++++++++++++++++++++++++++++

console.log(Math); // math is a built-in object in JavaScript that provides various mathematical constants and functions
console.log(Math.abs(-4)); // absolute value
console.log(Math.round(4.6)); // rounds to nearest integer
console.log(Math.ceil(4.2)); // rounds up to next integer
console.log(Math.floor(4.9)); // rounds down to previous integer
console.log(Math.min(4, 3, 6, 8)); // minimum value
console.log(Math.max(4, 3, 6, 8)); // maximum value
console.log(Math.random()); // random number between 0 and 1
console.log((Math.random()*10) + 1); // random number between 1 and 11
console.log(Math.floor(Math.random()*10) + 1); // random integer between 1 and 10

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) // random integer between min and max (both inclusive)

