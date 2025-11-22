const marvel_heroes = ['thor', 'ironman', 'spiderman'];
const dc_heroes = ['batman', 'superman', 'flash'];

// Combine both arrays into one

marvel_heroes.push(dc_heroes); // using push method
console.log(marvel_heroes);
console.log(marvel_heroes[3][1]); // accessing 'superman' from the combined array



const combined_heroes = marvel_heroes.concat(dc_heroes); 
console.log(combined_heroes); // using concat method


marvel_heroes.push(...dc_heroes); // using spread operator
console.log(marvel_heroes); // updated marvel_heroes array

const all_new_heroes = [...marvel_heroes, ...dc_heroes];
console.log(all_new_heroes); // new array with all heroes


const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);


console.log(Array.isArray("Raj")); // false explianation: "Raj" is a string, not an array
console.log(Array.from("hitesh")); // ['h', 'i', 't', 'e', 's', 'h'] explanation: converts string to array of characters
console.log(Array.from({name : "hitesh"})) //interesting case 
// explanation: converts object to array, but since object has no indexed properties, it results in an empty array []

let score1 = 100
let score2 = 200
let score3 = 300
// convert scores to an array

console.log(Array.of(score1, score2, score3)); //.of method creates a new array from the provided arguments


// .isArray() method checks if a value is an array
// .from() method creates a new array from an array-like or iterable object
