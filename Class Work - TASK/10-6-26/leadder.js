var n1 = Number(prompt("Enter the Value of N1"));
var n2 = Number(prompt("Enter the Value of N2"));
var n3 = Number(prompt("Enter the Value of N3"));

document.querySelectorAll('p')[0].innerHTML = "Value of N1 :" + n1;
document.querySelectorAll('p')[1].innerHTML = "Value of N2 :" + n2;
document.querySelectorAll('p')[2].innerHTML = "Value of N3 :" + n3;

if (n1 > n2 && n1 > n3) {
    document.querySelector('h1').innerHTML = "N1 is Greater";
}
else if (n2 > n1 && n2 > n3) {
    document.querySelector('h1').innerHTML = "N2 is Greater";
}
else if (n3 > n1 && n3 > n2) {
    document.querySelector('h1').innerHTML = "N3 is Greater";
}
else if (n1 == n2 && n1 > n3) {
    document.querySelector('h1').innerHTML = "N1 and N2 both are same and greater";
}
else if (n1 == n3 && n1 > n2) {
    document.querySelector('h1').innerHTML = "N1 and N3 both are same and greater";
}
else if (n2 == n3 && n2 > n1) {
    document.querySelector('h1').innerHTML = "N2 and N3 both are same and greater";
}
else {
    document.querySelector('h1').innerHTML = "All Are Equal";
}