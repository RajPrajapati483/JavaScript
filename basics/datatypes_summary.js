// primitive data types 

// 7 primitive data types in JavaScript 
// 1. Number
// 2. String
// 3. Boolean
// 4. Undefined
// 5. Null => represents "no value"
// 6. Symbol => unique and immutable data type 
// 7. BigInt => to represent integers larger than 2^53 - 1


// js dynamically types the variables 
// we don't need to specify the data type while declaring a variable
// the data type is determined at runtime based on the value assigned

// Example:
const score = 100; // score is of type Number
const scorevalue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;

let userEmail; // userEmail is of type Undefined

const id = Symbol('123'); // id is of type Symbol
const anotherId = Symbol('123'); // anotherId is also of type Symbol


console.log(id === anotherId); // false 
// why id and anotherId are not equal?
// because each symbol is unique even if they have the same description
// Symbols are mainly used to create unique object keys
// they help to avoid name collisions in objects





// Reference(Non-primitive) data types

// 1. Object
// 2. Array
// 3. Function


const heros = ['shaktiman', 'naagraj', 'doga']; // Array


let myObj = {               // Object
    name: "Raj",
    age: 22
}


const myFunction = function() {  // Function
    console.log("Hello World");
}



console.log(typeof outsideTemp);  // object (this is a known bug in JavaScript, null is of primitive type)
console.log(typeof myFunction); // function object 


// https://262.ecma-international.org/5.1/#sec-11.4.3