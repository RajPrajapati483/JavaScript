// memory management in JavaScript
// Stack vs Heap


// (Primitive) types are stored in the stack

let a = 10;
let b = a; // b gets a copy of the value of a
b = 20;
console.log(a); // 10
console.log(b); // 20

// Objects or (Non-primitive) are stored in the heap


let myYoutubename = "RajPrajapati";

let  anothername = myYoutubename; // anothername gets a copy of the value of myYoutubename
anothername = "CodewithRaj";
console.log(anothername); // CodewithRaj
console.log(myYoutubename); // RajPrajapati


let userOne = {
    email: "user@google.com",
    upi: "user@upi" 
}

let userTwo = userOne; // userTwo gets a reference to the same object in heap

userTwo.email = "raj@google.com";

console.log(userOne.email); // raj@google.com 
console.log(userTwo.email); // raj@google.com

// heap memory is used for dynamic memory allocation where variables are allocated and freed in an arbitrary order.

// In stack memory, variables are stored in a last-in-first-out (LIFO) order, meaning that the last variable added to the stack is the first one to be removed.

// In heap memory, variables can be allocated and freed in any order, and there is no specific order in which they are stored or accessed.

// Summary:
// Stack Memory: Used for static memory allocation of primitive types. Variables are stored in a LIFO order.
// Heap Memory: Used for dynamic memory allocation of non-primitive types (objects). Variables can be allocated and freed in any order.
