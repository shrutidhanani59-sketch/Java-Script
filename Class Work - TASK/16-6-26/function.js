// Q1. Write a named function to print "Hello World".
console.log(" Q1.. :");

function print()
{
    console.log("Hello World");
}
print();
console.log(" ");


// Q3. Write a named function that prints a given name.
console.log(" Q3.. :");
function printName(name)
{
    console.log(name);
    
}
printName("Shruti");
console.log(" ");




// Q6. Write a named function that returns a random number between 1 and 100.
console.log(" Q6.. :");

function randomNumber()
{
    return Math.floor(Math.random()*100)+1;
}
console.log(randomNumber());

console.log(" ");

// Q7. Write a named function that returns the sum of two numbers.
console.log(" Q7.. :");

function sum(n1 , n2)
{
    return n1+n2;
}
console.log(" Sum is :", sum(11 , 12));
console.log(" ");


// Q9. Write a named function that returns the factorial of a number.
console.log(" Q9.. :");

function factorial(num)
{
    let fact = 1;

    for (let i = 1; i <= num; i++) {
        fact *= i;
    }

    return fact;
}

console.log(factorial(5));
console.log(" ");


