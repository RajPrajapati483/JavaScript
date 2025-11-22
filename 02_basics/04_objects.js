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
        }
    }
}

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

const course = {
    coursename: "js in hindi",
    price: "999",
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
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }


// api arraay ke form me bhi data bhej sakta hai or object ke form me bhi

// api se data aane ke baad hum usse javascript object me convert karte hai

// [
//     {

//     },
//     {

//     }
// ]