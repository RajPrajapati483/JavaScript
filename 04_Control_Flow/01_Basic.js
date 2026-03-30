// if

// const isUserloggedIn = true;
// const temperature = 41;

// if (temperature < 50){
//     console.log("less than 50");
// } else{
//     console.log("temperature is greater than 50");
// }

// console.log("Executed");



const score = 200

// if(score > 100){
//     var power = "fly"; // iska scope variable hai , to ye function scope ke bahar bhi access hai
//     // const power = "fly"
//     console.log(`User Power ${power}`);
// }
// console.log(`User Power ${power}`);





// const balance = 1000

// if(balance < 500){
//     console.log("less than 500");
// } else if(balance < 750) {
//     console.log("less than 750");
// } else if(balance < 900){
//     console.log(balance < 750);
// }
// else {
//     console.log("less than 1200");
// }




const userLoggedIn = true;
const debitCard = true;

const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if(userLoggedIn && debitCard & 2==3){
    console.log("Allow to buy course");
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("User logged IN");
}