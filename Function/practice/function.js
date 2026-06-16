// Q1. Write a named function to print "Hello World".
console.log(" Q1.. :");

function print()
{
    console.log("Hello World");
}
print();
console.log(" ");


// Q2. Write a named function to display numbers 1 to 5.
console.log(" Q2... :");

function printNumber()
{
    for(let i=1; i<=5 ; i++)
    {
        console.log(i);
    }
}
printNumber();
console.log(" ");

// Q3. Write a named function that prints a given name.
console.log(" Q3.. :");
function printName(name)
{
    console.log(name);
    
}
printName("Shruti");
console.log(" ");

// Q4. Write a named function that prints the multiplication table of a given number.
console.log(" Q4.. :");

function printTable(table)
{
    for (let i = 0; i <=10; i++) {
       console.log( table , "*", i , "=" , table*i);
           
    }
}
printTable(2);
console.log(" ");

function Table(num)
{
    for (let i = 1; i <=10; i++) {
        console.log(`${num}  * ${i} = ${num*i} ` );    
    }
}
Table(10);
console.log(" ");

// Q5. Write a named function that returns today's date.
console.log(" Q5.. :");

function date()
{
    return Date();
}
console.log(date());
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

// Q8. Write a named function that returns the square of a given number.
console.log(" Q8.. :");

function square(n)
{
    return n*n;
}
console.log(" Square is :", square(2));
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


// Q10. Write a named function that checks whether a string is a palindrome
console.log(" Q10.. :");

function palindrome(str)
{
   var revstr = "";

   for (let  i = str.length-1;  i >=0;  i--) {
    revstr += str[i];  
   }

   if(revstr == str)
   {
    return true;
    
   }
   else
   {
    return false
   }
}
console.log(palindrome("madam"));
