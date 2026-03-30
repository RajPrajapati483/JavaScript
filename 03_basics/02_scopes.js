<<<<<<< HEAD
//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
=======
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
>>>>>>> 39c5c238bf5e4b46191366b6e8624208935664a5
        console.log(username);
    }
    // console.log(website);

<<<<<<< HEAD
     two()

=======
    two() // access one property
>>>>>>> 39c5c238bf5e4b46191366b6e8624208935664a5
}

// one()

if (true) {
<<<<<<< HEAD
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
=======
    const username = "Raj" 
    if(username === "Raj"){
        const website = "Youtube"
>>>>>>> 39c5c238bf5e4b46191366b6e8624208935664a5
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


<<<<<<< HEAD
// ++++++++++++++++++ interesting ++++++++++++++++++


=======



// ******************** Interesting *******************************

>>>>>>> 39c5c238bf5e4b46191366b6e8624208935664a5
console.log(addone(5))

function addone(num){
    return num + 1
}



<<<<<<< HEAD
addTwo(5)
const addTwo = function(num){
    return num + 2
}
=======

addTwo(5) // not access beacuse some concept of hoisting
const addTwo = function(num){ // addTwo hold function
    return num + 2
}

// addTwo(5)
>>>>>>> 39c5c238bf5e4b46191366b6e8624208935664a5
