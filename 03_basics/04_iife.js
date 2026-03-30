<<<<<<< HEAD
// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')

=======
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
>>>>>>> 39c5c238bf5e4b46191366b6e8624208935664a5
