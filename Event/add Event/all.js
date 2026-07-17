// document.querySelector('h1').onclick = function ()
// {
//     console.log("here");
    
// }

// document.querySelector('h1').addEventListener('click', function (){
// console.log("here");

// });

document.body.addEventListener('click', function(){
    window.a = 12;
    console.log("Body Event Target");
    
});

document.querySelector('div').addEventListener('click', function(){
    console.log("Div Event Target");
    
});

document.querySelector('h1').addEventListener('click', function(){
    console.log("H1 Event Target");
    console.log(window.a);
    
    
})