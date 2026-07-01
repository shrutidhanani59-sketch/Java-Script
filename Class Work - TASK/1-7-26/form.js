document.querySelector('form').onsubmit = function(event)
{
    event.preventDefault();
    document.querySelectorAll('span')[0].innerHTML = document.querySelectorAll('input')[0].value;
    document.querySelectorAll('span')[1].innerHTML = document.querySelectorAll('input')[1].value;
    document.querySelectorAll('span')[2].innerHTML = document.querySelectorAll('input')[2].value;
    document.querySelectorAll('span')[3].innerHTML = document.querySelectorAll('input')[3].value;
}

document.querySelector('table').onsubmit = function(event){
   document.querySelectorAll('input')[0].value =   
}
