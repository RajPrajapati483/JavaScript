const accountId = 144553
let accountEmail = "rajp23509@gmail.com";
var accountPassword = "12345"
accountCity = "jaipur"
let accountState;

// accountId = 2  // not allowed


// let,var,const are used to declare variables in js 

accountEmail = "hc@hc.com"
accountPassword = "25252"
accountCity = "kolkata"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword,accountCity,accountState])

/*
prefer not to use var
becaue of issue in block scope aand functional scope

*/
// difference between var, let and const
// const cannot be re assigned
// var can be re assigned and re declared
// let can be re assigned but cannot be re declared


// let and const are block scoped
//var is functional scoped
