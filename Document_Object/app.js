// let val;

// val = document;
// val = document.all;
// val = document.all[3];
// val = document.all.length;
// val = document.URL;
// val = document.forms[0].id;
// val = document.forms[0].method;
// val = document.forms[0].action;
// val = document.links[0].attributes;
// val = document.images;
// val = document.scripts[0].getAttribute('src');


// let scripts = document.scripts;
// let sarray = Array.from(scripts); //Array.from() method creates a new Array instance from an array-like or iterable object.
// sarray.forEach(function(s)  {
//   console.log(s.getAttribute('src'));
// }); // a loop to go through the array of scripts

// console.log(typeof val);
// console.log(val);
// console.log(scripts);
// console.log(sarray);

// // DOM selectors

// // document.getElementById()

// console.log(typeof document.getElementById('task-title'));

// console.log(document.getElementById('task-title').className);

// // you can do css stufff through document.getElementById('task-title').style
// const taskTitle = document.getElementById('task-title');
// document.getElementById('task-title').style.background = '#225';
// document.getElementById('task-title').style.color = '#fff';
// document.getElementById('task-title').style.padding = '10px';

// // you can access other elements inside of this object as well e.g. can change the text content
// taskTitle.textContent = 'Meow Meow';
// taskTitle.innerText = 'Weeeeeee';
// taskTitle.innerHTML = '<h1>Yo What Up</h1>';
// console.log(taskTitle.id);    

// // query selector -- newer and more powerful like J Query

// console.log(document.querySelector('#task-title')); // By ID
// console.log(document.querySelector('.card-title')); // By Class, will grab the first one
// console.log(document.querySelector('li')); // By tag, will grab the first one

// // css stuff using query selector
// document.querySelector('li:last-child').style.color = 'black';
// document.querySelector('ul li:last-child').style.color = 'red'; // css 3 stuff pseudo class, make the last child red
// // specify nth child

// document.querySelector('ul li:nth-child(4)').style.color = 'black';

// document.querySelector('ul li:nth-child(2)').textContent= 'Busy Being Awesome';

// // select odd or even child
// document.querySelector('ul li:nth-child(odd)').style.background= '#ccc'; // first odd

// document.querySelector('ul li:nth-child(even)').style.background= '#333'; // first even

// // DOM selector for multiple elements

// // document.getElementsByClassName

// const items = document.getElementsByClassName('collection-item');

// console.log(items);

// items[0].style.color = 'red';
// items[3].textContent = 'Hiahia';

// const listItems = document.querySelector('ul').getElementsByClassName('collection-item'); // not under global scope, will not include nodes that are not ul tags

// console.log(listItems);

// // document.getElementsByTagName

// let lis = document.getElementsByTagName('li');
// console.log(lis);

// // convert html collection to array

// lis = Array.from(lis);

// console.log(lis.reverse());

// lis.forEach(function(li, index) {
//   console.log(li.className);
//   li.textContent = `${index}: wow`;
// })

// // document.querySelectorAll

// const allItems = document.querySelectorAll('ul.collection li.collection-item');

// console.log(allItems); // log the Nodelist

// const liOdd = document.querySelectorAll('li:nth-child(odd)');
// const liEven = document.querySelectorAll('li:nth-child(even)');

// liOdd.forEach(function(liOdd, index) {
//   liOdd.style.background = '#ccc';
// });

// liEven.forEach(function(liEven, index) {
//   liEven.style.color = 'red';
// });

// for(let i = 0; i < liEven.length; i++) {
//   liEven[i].style.background = '#f4f4f4';
// }

// Traverse DOM -- move things up and down
// let val;

// const list = document.querySelector('ul.collection');
// const listItem = document.querySelector('li.collection-item:first-child');

// val = listItem;
// val = list;

// // get child nodes

// val = list.childNodes;// there are 5 li children and 6 text which are just line breakers
// val = list.childNodes[0].nodeName;
// val = list.childNodes[1].nodeName;
// val = list.childNodes[0].nodeType;// 3
// val = list.childNodes[1].nodeType;// 1
// val = list.childNodes[3].nodeType;// 8

// // node types

// // 1 - Element
// // 2 - Attribute (deprecated)
// // 3 - Text node
// // 8 - Comment
// // 9 - Document itself
// // 10 - Doctype

// // get children element nodes

// val = list.children; // no text just the children elements
// val = list.children[1];
// list.children[1].textContent = 'hello';
// val = list.children[3].children[0];
// val = list.firstChild;// could be text node
// val = list.firstElementChild;// the first element child
// val = list.lastChild;
// val = list.lastElementChild;

// val = list.childElementCount; // gives the number of children

// // we can also get parent information

// val = listItem.parentNode;
// val = listItem.parentElement; // non text result
// val = listItem.parentNode.parentNode; // grand parents

// // get sibling information

// val = listItem.nextSibling;
// val = listItem.nextElementSibling; // non text result
// val = listItem.previousSibling;
// val = listItem.previousElementSibling; // it is null becuase listItem is the first child there is no previous element sibling

// console.log(val);

// create elements and insert into DOM
// const li = document.createElement('li');

// // Add class
// li.className = 'collection-item';
// li.id = 'new-item';
// li.setAttribute('title', 'New Item');

// // create text node and append
// li.appendChild(document.createTextNode('Hello World'));

// // create new link element
// const link = document.createElement('a');

// // Add class
// link.className = 'delete-item secondary-content';

// // Add icon html
// link.innerHTML = '<i class =  "fa fa-remove"></i>';

// // append link to li
// li.appendChild(link);
// // append li as child of ul

// document.querySelector('ul.collection').appendChild(li);

// console.log(li);
// console.log(link);

// replace elements

// create element

const newHeading = document.createElement('h2');

// add id

newHeading.id = 'task-title';

// new text node

newHeading.appendChild(document.createTextNode('Task List'));

// get the old heading

const oldHeading = document.getElementById('task-title');
// get old heading's parent

const cardAction = document.querySelector('.card-action');

// replace -- replaceChild(new element, old element);

cardAction.replaceChild(newHeading, oldHeading);

// remove element
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

lis[0].remove(); // remove from lis
list.removeChild(lis[3]); // remove from list the parent

// class

const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];
link.classList.add('test'); // add a new class
link.classList.remove('delete-item'); // remove a class


// attribute

link.setAttribute('href', 'http://www.google.com'); // set attribute specify attribute name and the value you want to pass
link.hasAttribute('title'); // test if an attribtue exist or ntoe, returns true or false
link.setAttribute('title', 'Google');
link.removeAttribute('title');
link.hasAttribute('title');

console.log(link.getAttribute('href'));
console.log(link.getAttribute('class'));
console.log(firstLi);
console.log(link);
console.log(link.className); // returns all class names without parsing
console.log(link.classList[0]); // class list is a token list, looks like an array, youc an fetch each class by specifying the index

console.log(newHeading);
console.log(oldHeading);
console.log(cardAction);