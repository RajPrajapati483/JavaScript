const name = "Raj"
const repoCount = 50

// console.log(name + repoCount + " Value"); // concatenation 

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // Template String or Template Literal


// String declare ek aur tarika
const gameName = new String('hitesh-hc-com') // String Object 

console.log(gameName[0]);
console.log(gameName.__proto__); // prototype of string object
// Methods of String Object


// console.log(gameName.length);
// console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString); // substring method does not accept negative index
// 

const anotherString = gameName.slice(-8,4) // negative index se count end se hota hai

console.log(anotherString); // 

const newStringOne = "   hitesh    "
console.log(newStringOne); 
console.log(newStringOne.trim()); // trim method removes whitespace from both ends of a string

const url = "https://hitesh.com/raj%20choudhary"

console.log(url.replace('%20', '-')); // replace method replaces a specified value with another value in a string

console.log(url.includes('raj')) // includes method checks if a string contains a specified value and returns true or false

console.log(gameName.split('-')); // split method splits a string into an array of substrings based on a specified separator