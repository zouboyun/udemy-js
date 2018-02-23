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

// DOM selectors

// document.getElementById()

console.log(typeof document.getElementById('task-title'));

console.log(document.getElementById('task-title').className);

// you can do css stufff through document.getElementById('task-title').style
const taskTitle = document.getElementById('task-title');
document.getElementById('task-title').style.background = '#225';
document.getElementById('task-title').style.color = '#fff';
document.getElementById('task-title').style.padding = '10px';

// you can access other elements inside of this object as well e.g. can change the text content
taskTitle.textContent = 'Meow Meow';
taskTitle.innerText = 'Weeeeeee';
taskTitle.innerHTML = '<h1>Yo What Up</h1>';
console.log(taskTitle.id);    

// query selector -- newer and more powerful like J Query

console.log(document.querySelector('#task-title')); // By ID
console.log(document.querySelector('.card-title')); // By Class, will grab the first one
console.log(document.querySelector('li')); // By tag, will grab the first one

// css stuff using query selector
document.querySelector('li:last-child').style.color = 'black';
document.querySelector('ul li:last-child').style.color = 'red'; // css 3 stuff pseudo class, make the last child red
// specify nth child

document.querySelector('ul li:nth-child(4)').style.color = 'yellow';

document.querySelector('ul li:nth-child(2)').textContent= 'Busy Being Awesome';

// select odd or even child
document.querySelector('ul li:nth-child(odd)').style.background= '#ccc'; // first odd

document.querySelector('ul li:nth-child(even)').style.background= '#333'; // first even