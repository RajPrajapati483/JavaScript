// const userEmail = "Rajesh@987" // sring ke andr kuch hai toh true value maan liya jaat hai
const userEmail = []                          

if(userEmail){
    console.log("Got user email");
} else{
    console.log("Don't have user email");
}



// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN


// truthy values

// true, "0" , 'false', " " , [] , {} ,function(){} --> empty function


// if(userEmail.length == 0){
//     console.log("Array is Empty");
// }


const emptyObject = {}

if(Object.keys(emptyObject).length == 0){
    console.log("Object is empty");
}


// interview perspective
// console.log(false == 0);
// console.log(false == '');
// console.log(0 == '');



//  Nullish Coalescing Operator (??) : null undefined ke liye bana hai

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15;
val1 = null ?? 10 ?? 20 



// console.log(val1);




// Ternary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");