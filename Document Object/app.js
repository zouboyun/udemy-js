let val;

val = document;
val = document.all;
val = document.all[3];
val = document.all.length;
val = document.URL;
val = document.forms[0].id;
val = document.forms[0].method;
val = document.forms[0].action;
val = document.links[0].attributes;
val = document.images;
val = document.scripts[0].getAttribute('src');


let scripts = document.scripts;
let sarray = Array.from(scripts); //Array.from() method creates a new Array instance from an array-like or iterable object.
sarray.forEach(function(s)  {
  console.log(s.getAttribute('src'));
}); // a loop to go through the array of scripts

console.log(typeof val);
console.log(val);
console.log(scripts);
console.log(sarray);