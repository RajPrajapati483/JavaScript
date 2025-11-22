// object declare two ways one is object literal and second is object constructor
// singleton object --> koyi  bhi constructor se banate hai toh singleton ek object banta hai(apne tarh kaa ek hi object hai)
// literals ki tarah declare karenge toh singleton nahi banta hai

// Object Literal

const mySym = Symbol("key1"); // symbol as a key
// question --> ek symbol lo use object ke key me add kr ke pprint kar ke dikh laa do



const JsUser ={
    name: "Raj", // name is property and "Raj" is value , name dtype is string
    "full name": "Raj Prajapati", // property with space must be in quotes
    age: 22,
    [mySym]: "myValue", // symbol as a key
    location: "Jaipur",
    email: "raj@example.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Friday"]
}


console.log(JsUser.email) // accessing property using dot notation
console.log(JsUser["email"]); // accessing property using bracket notation 
console.log(JsUser["full name"]); // accessing property with space using bracket notation no dot notation 
console.log(JsUser[mySym]); // accessing symbol key property using dot notation
console.log(typeof JsUser[mySym]); 


JsUser.email = "raj.new@example.com"; // updating property value
console.log(JsUser.email);
console.log(JsUser); // print object


// Object.freeze(JsUser); // freeze the object to prevent further modifications

JsUser.email = "test@example.com";
console.log(JsUser.email); 


JsUser.greeting = function(){
    console.log("hello Js User");
}

console.log(JsUser.greeting); // funnction return back-->function execute  nahi hua hai bbas functionn kaa reference aaya hai


JsUser.greetingTwo = function(){ // name ko refernce karna hai, refernnce karne ke liye backtick ke andr likhna hai string interpolation use karna hai
    console.log(`hello Js User, ${this.name}`); // this keyword refers to the current object
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());