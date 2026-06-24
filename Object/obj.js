// What is an object
// It's is collaction of properties and method

// properties: key+value

// Method : object: Function

// How to creat and object
//  1. Using Object Literal : {}

var user = {};
console.log(user);

// 2. Using Object Class :

var user = new Object();
console.log(user);

// 3. Using Object.create() Method : 

var user = Object.create({});
console.log(user);

// 4. Using Object.assign() Method :

var user = Object.assign({});
console.log(user);

// 5. Using Function ()

var user = {
    fname : "shruti",
    lname : "Dhanani",
    age : 18,
    gender : "female",
    biodata : function ()
    {
        // Method
       
        console.log( `My name is ${this.fname} and last name is ${this.lname}`);
        
    }

};
user.biodata();

// 1. How to Access Object
console.log(user);

// 2. How to Access Object Property Value 

// i. using Dot method:
console.log(user.fname);
// ii. using [] bracket
console.log(user['lname']);

// 3. How to Modify Object Property Value

user.fname = "xyz";
user.lname = "xyz";
console.log(user);

// 4. How to Add Property 
// i. using Dot method:
user.contactno = 1234567890;
// ii. using [] bracket
user['position'] = "CEO";
console.log(user);

// 5. How to remove Property 
delete user.age;
delete user.position;

// 6. How to User Method : 
user.biodata();
