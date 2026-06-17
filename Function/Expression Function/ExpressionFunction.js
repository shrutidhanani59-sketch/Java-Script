
// 1. Without argument and Without return type

 var greeting = function ()
{
    console.log("Welcomr to js");   
}
greeting();

console.log(" ");

// ----------------------------------------------------------------

// 2. With argument and Without return type

 var add = function (n1 , n2)
{
    console.log("Addition is : ", n1+n2);
}
add(12,11);

console.log(" ");

// ----------------------------------------------------------------

// 3. Without argument and With return type

 const pi = function ()
{
    return 3.14;
}
console.log ("PI = ",   pi());
// pi();
console.log(" ");


// ----------------------------------------------------------------

// 4. Without argument and Without return type

 let result = function (mark)
{
    if(mark>=35)
    {
        return "Pass";
    }
    else
    {
      return "fail";
    }
}
console.log(result(50));