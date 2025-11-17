// let score = "33abc";
// let score = null;
// let score = undefined;
// let score = true
////let score = "Raj";

////console.log(typeof score);
////console.log(typeof (score));


////let valueInNummber = Number(score); // conversion from string to number
////console.log(typeof valueInNummber); // number conversion
////console.log(valueInNummber); // NaN => not a number 

// NaN is a type of number in js which indicates invalid number conversion 
// It occurs when we try to convert a non-numeric string to a number
//"33" => 33
//"33abc" => NaN
// true => 1
// false => 0
// null => 0
// undefined => NaN


let isLoggedIn = "Raj"

let booleanIsLoggedIn = Boolean(isLoggedIn); // conversion to boolean 
console.log(typeof booleanIsLoggedIn);
console.log(booleanIsLoggedIn); // true

// 1 => true; 0 => false
// null => false
// undefined => false
// "" => false
// "Raj" => true


let someNumber = 33;

let stringNumber = String(someNumber);
console.log(typeof stringNumber);
console.log(stringNumber);