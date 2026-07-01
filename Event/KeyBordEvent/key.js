var mydata = document.querySelector('h2').innerText;

document.querySelector('h2').innerHTML = "";

for (const i in mydata) {

    document.querySelector('h2').innerHTML += `<span>${mydata[i]}</span>`;

}
var index = 0;
var count1 = 0;
var count2 = 0;
var total = 0;

document.querySelector('#T').innerHTML = count1;
document.querySelector('#F').innerHTML = count2;
document.querySelector('#Total').innerHTML = total;

document.body.onkeypress = function (event) {
    if (event.key == mydata[index]) {

        if (event.key == " ") {
            total++;
        }
        document.querySelectorAll('span')[index].style.color = "green";
        count1++;
    }

    else {
        document.querySelectorAll('span')[index].style.color = "red";
        count2++;
    }

    document.querySelector('#T').innerHTML = count1;
    document.querySelector('#F').innerHTML = count2;
    document.querySelector('#Total').innerHTML = total;


    index++;
}

