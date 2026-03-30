<<<<<<< HEAD

function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))


function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]
=======
// console.log("hi");
// console.log("hello");
// functions are block of code designed to perform a particular task


// function declaration
// function definition
function sayMyName(){
    console.log("hi");
    console.log("hello");
}

sayMyName; // function reference
// sayMyName(); // funxction execution / function invocation / function call


// function with parameter without return value

// function addTwoNumbers(num1, num2){ // num1 and num2 are parameters
//     console.log(num1 + num2)
// }


// function with parameter with return value

function addTwoNumbers(num1, num2){ // num1 and num2 are parameters
    // let result = num1 + num2;
    // return result;
    // console.log("This line will not be executed"); // unreachable code

    return num1 + num2;
}
const result = addTwoNumbers(3,4);



// console.log("Result : ",result); // undefined as function does not return anything



// addTwoNumbers(); // NaN
// addTwoNumbers(3, 4); // 7 (3 and 4 are called arguments)
// addTwoNumbers(10, "15");
// addTwoNumbers("10", "a"); // 10a
// addTwoNumbers(3, null); // 3
// addTwoNumbers(3); // NaN
// addTwoNumbers(3, 4, 5, 6); // 7 extra parameters are ignored
// addTwoNumbers(undefined, 4); // NaN undefined is treated as NaN in arithmetic operations
// addTwoNumbers(true, false); // 1 true is treated as 1 and false as 0 in arithmetic operations



// function with return value

function loginUserMessage(username = "Prajapati"){ // default parameter value 
    if(!username){
        console.log("Please enter username")
        return; // early return to exit function if username is not provided
    }
    return `${username} just logged in` 
}

// console.log(loginUserMessage("raj")); // "raj just logged in"
// console.log(loginUserMessage()); // "undefined just logged in" --> IMP FOR INTERVIEW



// ****************************function*********************


function calculateCartPrice1(...num1){ // rest operator to accept variable number of arguments
    return num1
}

function calculateCartPrice(val1, v1l2, ...num1){ // rest operator to accept variable number of arguments
    return num1
}

console.log(calculateCartPrice1(100,200,167,890,837,229,833)); // [ 100, 200, 167, 890, 837, 229, 833 ]
console.log(calculateCartPrice(100,200,167,890,837,229,833)); // [ 167, 890, 837, 229, 833 ]


const user = {
    username: "Raj",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleObject(user); // passing object as argument

handleObject({ // passing object directly
    username: "Harsh",
    price: 399
})


const myNewArray = [200,400,900,456,766]
>>>>>>> 39c5c238bf5e4b46191366b6e8624208935664a5

function returnSecondValue(getArray){
    return getArray[1]
}

<<<<<<< HEAD
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));
=======
console.log(returnSecondValue(myNewArray)); // 400
console.log(returnSecondValue([100,300,500,700])); // 300 // passing array directly
>>>>>>> 39c5c238bf5e4b46191366b6e8624208935664a5
