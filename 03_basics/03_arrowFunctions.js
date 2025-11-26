const user = { // 
    username: "Raj",
    price: 999,
    welcomeMessage: function(){ // current context refer use this keyword,context(simple value) uske andr jo jo variable hai kya hold kr rahe hai
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "Priyanshu"

// user.welcomeMessage();


// console.log(this);

// pahle js ko execute karne ke 1 hi tarika tha browser ke andr
// jo engine tha js ko execute krta tha wo engine sirf browser ke andr paya jaata tha
// ab uss engine ko nikala uska alag alag naam diya , kisi se node diya aur kisi ne kuch naam diya
// Browser ke andr jab bhi wo engine run karta hai toh sabse jyaada jo global object hai woh hai window object.



// function chai(){
//     let username = "Raj" // function ke andr this keyword use nahi kar sakkte, applicable for object only
//     console.log(this.username);// undefined output show
// }

// chai();


// const chai = function(){
//     let username = "Raj" 
//     console.log(this.username);
// }

// chai();


const chai = () => {  // Arrow Function
    let username = "Raj" 
    console.log(this.username);
    console.log(this) // empty parenthesis
}

//chai()



// explicit Return , return keyword lagana hi  parega

// const addTwo = (num1, num2) => {   // curly brace use hoga toh return keyword likhna parega 
//     return num1 + num2
// }




// Implicit Return(lagne ka jarurat nahi hai)

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) =>  (num1 + num2)

const addTwo = (num1, num2) => ({username : "Raj"})




console.log(addTwo(3,4))



