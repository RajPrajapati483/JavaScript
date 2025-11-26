// var c = 300

const { StrictMode } = require("react");

let a = 300
if(true){
    let a = 10; 
    const b = 20;
    var c = 30; 
    // console.log("Inner : ",a);
}

// console.log(a);
// console.log(b);
// console.log(c); 



function one(){
    const username = "Raj"

    function two(){ // Inner function access upper function
        const website = "Youtube"
        console.log(username);
    }
    // console.log(website);

    two() // access one property
}

// one()

if (true) {
    const username = "Raj" 
    if(username === "Raj"){
        const website = "Youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);





// ******************** Interesting *******************************

console.log(addone(5))

function addone(num){
    return num + 1
}




addTwo(5) // not access beacuse some concept of hoisting
const addTwo = function(num){ // addTwo hold function
    return num + 2
}

// addTwo(5)