var num = Math.floor(Math.random() * 20);
var count = 0;
let win = false;



for(;;)
{
    while (count <= 10 ) {

    let number = Number(prompt("Enter the Number between 1 10 100"));
    count++;

    if (num > number) {
        alert("Too  High");
    }
    else if (num == number) {
        alert("Congratulations! You Win!");
        alert(count);
        win = true;
        break;
    }
    else {
        alert("Too Low");
    }

}

let play =   prompt(" What You Play Again : yes / no ");

if(play =="yes")
{
    console.log(" Start Game");   
}
else
{
    console.log(" Game is Over");
    break;
    
}
}

if(!win)
{   
alert(" Game is over");
}




