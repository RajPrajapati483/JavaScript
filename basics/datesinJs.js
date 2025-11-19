// Dates

let myDate = new Date(); // current date and time
/*console.log(myDate.toString());// converts date to string and displays it
console.log(myDate.toDateString()); // displays only date part
console.log(myDate.toISOString()); // date in ISO format
console.log(myDate.toJSON()); // date in JSON format
console.log(myDate.toLocaleDateString()); // date in locale-specific format
console.log(myDate.toLocaleString()); // date and time in locale-specific format
console.log(myDate.toLocaleTimeString()); // time in locale-specific format
console.log(typeof myDate);*/ // object interview question: what is the data type of date in JavaScript?


let myCreatedDate = new Date(2025,0,20); // year, month (0-indexed), day
console.log(myCreatedDate.toString());

let myCreatedDate2 = new Date("2025-11-19"); // date string
console.log(myCreatedDate2.toString());

let myTimeStamp = Date.now();// current timestamp in milliseconds since Jan 1, 1970
// console.log(myTimeStamp); // value in milliseconds
// console.log(myCreatedDate.getTime()); // timestamp of myCreatedDate in milliseconds since Jan 1,// value in milliseconds 
console.log(Date.now()); // value in milliseconds
console.log(Math.floor(Date.now()/1000)); // convert in second // current timestamp in seconds


let newDate = new Date();
console.log(newDate.getMonth()+1);
console.log(newDate.getDay()); // day of the week (0-6) 0=> Sunday

newDate.toLocaleString('default', {
    weekday: 'long' 
    
}); // full name of the day

console.log(newDate.toLocaleString('default', { month: 'long' })); // full name of the month
