var arr = [11,12,8,2,3,21,88,10,12];
console.log(arr);

// length: property
console.log("Length");
console.log(arr.length);
console.log(" ");

// indexof
console.log("Indexof");
console.log(arr.indexOf(12));
console.log(" ");

//  lastIndexOf 
console.log("LastIndexof");
console.log(arr.lastIndexOf(12));
console.log(arr.lastIndexOf(120));
console.log(" ");

// Include:
console.log(" Include ");
console.log(arr.includes(12));
console.log(" ");

// foreach
console.log("Foreach");
var ans1 = arr.forEach( (element) => {
    return element;
});
console.log(ans1);

console.log(" ");

// map
console.log("Map");

var ans2 = arr.map( (element) => {
    return element*2;
});

console.log(ans2);

console.log(" ");

// filter
 console.log("Filter :");
 var ans3 = arr.filter((element)=>{
     return element*2;
 });
 console.log(ans3);
 console.log(" ");
 
// every

console.log("every");
var out1 = arr.every( (element) => {
    return element<100;
});
console.log(out1);
 console.log(" ");
 
// some

console.log("some");
var out1 = arr.some( (element) => {
    console.log(element);
    return element<100;
});
console.log(out1);
console.log(" ");


// short
var arr = [11,12,8,2,3,21,88,10,12];
console.log(arr);

arr.sort( (a,b) => {
    return a - b;
});
console.log(arr);

arr.sort( (a,b) => {
    return b - a;
});
console.log(arr);
