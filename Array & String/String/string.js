// String : It's a collaction of chars.

// Using Double Quota

var fname = "Shruti Dhanani";
console.log(fname , typeof fname);

// Using single Quota
var fname = 'Shruti Dhanani';
console.log(fname , typeof fname);

// Using Backtick Quota
var fname = `Shruti Dhanani`;
console.log(fname , typeof fname);

console.log(" ");

var fname = "Shruti";
var age = 12;

console.log("First name is ", fname , " Age is ", age);
console.log('First name is ', fname , ' Age is ', age);
console.log(`First name is `, fname , ` Age is `, age);

console.log(`First name is  ${fname}  Age is  ${age}`);
console.log("First name is  ${fname}  Age is  ${age}");   // wrong
console.log('First name is  ${fname}  Age is  ${age}');   // wrong

var str = "Java script";

//  1. length : proprty
console.log(str.length);

// Method

console.log(str.toUpperCase());
console.log(str.toLowerCase());

console.log(str.includes("erw"));

console.log(str.split());
console.log(str.split(""));
console.log(str.split(" "));


