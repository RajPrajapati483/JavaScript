// Imediately Invoked Function Expressions (IIFE)

(function chai(){
    // name IIFE 
    console.log(`DB CONNECTED`);
})(); // IIF jo hai invoked toh ho gaya , pr context rokna bhi hai

// global scope ke pollution se problem hoti hai kayi baar
// jo global scope ke declaration hai usko hatane ke liye use IIFE


( (name) => {
    // unNAmed IIFE
    console.log(`DB Connected Two ${name}`)
} ) ('RAJ')


// Do IIFE likhne pr ek Saath pahle wala IIFE likhne ke baad semicolon compulsory use , otherwise 2nd IIFE not Write