<<<<<<< HEAD
// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
=======
// const tinderUser = new Object() // object constructor syntax
const tinderUser = {} // object literal syntax

tinderUser.id = "123abc"
tinderUser.name = "Raj"
tinderUser.isLoggedIn = false

console.log(tinderUser); // empty object

const regularUser = {
    email: "raj@example.com",
    fullname:{
        userfullname:{
            firstname: "Raj",
            lastname: "Prajapati"
>>>>>>> 39c5c238bf5e4b46191366b6e8624208935664a5
        }
    }
}

<<<<<<< HEAD
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

=======
console.log(regularUser.fullname.userfullname.lastname); // accessing nested object property

// combine objects

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "e", 6: "f"}

// const obj3 = {obj1, obj2}; // wrong way to combine objects

// const obj3 = Object.assign({}, obj1, obj2, obj4); // correct way to combine objects
// object assign method copies properties from source objects to a target object
// first parameter is target object, rest are source objects
// here we are creating a new empty object as target and copying obj1 and obj2 properties into it
// this way we avoid modifying the original objects


// spred operator method to combine objects
const obj3 = {...obj1, ...obj2, ...obj4};

// console.log(obj3); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }



// databse  se value aayegi toh kuch iss tarh kaa hoga

// user database se aayenge toh jyaada kr aaray of objects honge 
const users = [
    {
        id:1,
        email: "raj@example.com"
    },
    {
        id:1,
        email: "harsh@example.com"
    },
    {
        id:1,
        email: "raj@example.com"
    }
]

// console.log(users[1].email); // accessing email of second user in array of objects

console.log(tinderUser);// print object

// Methods to get keys , values and entries of object
console.log(Object.keys(tinderUser)); // print keys of object as array
console.log(Object.values(tinderUser)); // print values of object as array
console.log(Object.entries(tinderUser)); // print key-value pairs of object as array of arrays

// Object.keys() method returns an array of a given object's own property names
// Object.values() method returns an array of a given object's own enumerable property values
// Object.entries() method returns an array of a given object's own enumerable string-keyed property [key, value] pairs


console.log(tinderUser.hasOwnProperty("name")); // check if object has a property
// check if tinderUser has property 'name' , returns true or false



// Dstructuring objects
>>>>>>> 39c5c238bf5e4b46191366b6e8624208935664a5

const course = {
    coursename: "js in hindi",
    price: "999",
<<<<<<< HEAD
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

=======
    courseInstructor: "hitesh choudhary"
}

//course.courseInstructor; // accessing property without destructuring

// syntax : const {propertyName : newVariableName} = objectName;
const {courseInstructor : instruct} = course; // destructuring object
//  explain : we are extracting courseInstructor property from course object and assigning it to a new variable instruct
// this way we can directly use instruct variable instead of course.courseInstructor

console.log(instruct); // accessing destructured property 

// json backend se data aata hai toh json format me aata hai
// json = javascript object notation
// json format almost same as object literal but with double quotes for keys and string values
// json 
// syantax of json
//     ||
//     \/
//     \/
>>>>>>> 39c5c238bf5e4b46191366b6e8624208935664a5
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

<<<<<<< HEAD
[
    {},
    {},
    {}
]

=======

// api arraay ke form me bhi data bhej sakta hai or object ke form me bhi

// api se data aane ke baad hum usse javascript object me convert karte hai

// [
//     {

//     },
//     {

//     }
// ]
>>>>>>> 39c5c238bf5e4b46191366b6e8624208935664a5
