// Type of Function
// 1. Without argument and Without return type
// 2. With argument and Without return type
// 3. Without argument and With return type
// 4. Without argument and Without return type


// 1. Without argument and Without return type

function greeting()
{
    console.log("Welcomr to js");
    alert("Hello");   
}
greeting();

function textchange()
{
    document.querySelector('h1').innerHTML = " This is H1";
}
textchange();

console.log(" ");

// 2. With argument and Without return type

function add(n1 , n2)
{
    console.log("Addition is : ", n1+n2);
}
add(12,11);

console.log(" ");

// 3. Without argument and With return type

function pi()
{
    return 3.14;
}
console.log ("PI = ",   pi());
// pi();
console.log(" ");


// 4. Without argument and Without return type

function result(mark)
{
    if(mark>=35)
    {
        console.log("Pass");
    }
    else
    {
        console.log("Fail");
    }
}
console.log(result(5));

console.log(" ");

// function in switch case

function Arithmatic(n1 , n2 , op)
{
    switch(op)
    {
        case "+":
            return n1+n2;
        case "-":
            return n1-n2;
        default:
            return "Enter the vaild choice";
    }

}
alert(Arithmatic(11 , 12 , "+"));
