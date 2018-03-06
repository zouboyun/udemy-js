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

// const newHeading = document.createElement('h2');

// // add id

// newHeading.id = 'task-title';

// // new text node

// newHeading.appendChild(document.createTextNode('Task List'));

// // get the old heading

// const oldHeading = document.getElementById('task-title');
// // get old heading's parent

// const cardAction = document.querySelector('.card-action');

// // replace -- replaceChild(new element, old element);

// cardAction.replaceChild(newHeading, oldHeading);

// // remove element
// const lis = document.querySelectorAll('li');
// const list = document.querySelector('ul');

// lis[0].remove(); // remove from lis
// list.removeChild(lis[3]); // remove from list the parent

// // class

// const firstLi = document.querySelector('li:first-child');
// const link = firstLi.children[0];
// link.classList.add('test'); // add a new class
// link.classList.remove('delete-item'); // remove a class


// // attribute

// link.setAttribute('href', 'http://www.google.com'); // set attribute specify attribute name and the value you want to pass
// link.hasAttribute('title'); // test if an attribtue exist or ntoe, returns true or false
// link.setAttribute('title', 'Google');
// link.removeAttribute('title');
// link.hasAttribute('title');

// console.log(link.getAttribute('href'));
// console.log(link.getAttribute('class'));
// console.log(firstLi);
// console.log(link);
// console.log(link.className); // returns all class names without parsing
// console.log(link.classList[0]); // class list is a token list, looks like an array, youc an fetch each class by specifying the index

// console.log(newHeading);
// console.log(oldHeading);
// console.log(cardAction);


// event listener - interact with the UI

// document.querySelector('.clear-tasks').addEventListener('click', function (e) {
//   console.log('hello');
//   // e.preventDefault();
// }) -- define the function inside of event listener

// document.querySelector('.clear-tasks').addEventListener('click', onClick);

// function onClick(a) {
//   let val;
//   // event target element
//   val = a.target;
//   // val = a.target.id;
//   val = a.target.className;
//   val = a.target.classList[0];


//   // event type
//   val = a.type;// click, mouseover, etc..

//   // time stamp

//   val = a.timeStamp;

//   // coords event relative to the window

//   val = a.clientY; // vertical coords
//   val = a.clientX; // horizontal coords

//   // coords event relative to the element itself

//   val = a.offsetY;
//   val = a.offsetX;
//   a.preventDefault();
//   console.log(val);
// } // define the function outside of event listener

// mouse events

// const clearBtn = document.querySelector('.clear-tasks');
// const card = document.querySelector('.card');
// const heading = document.querySelector('h5');

//click

// clearBtn.addEventListener('click', runEvent);

// double click

// clearBtn.addEventListener('dblclick', runEvent);
// event handler

// mouse down -- when you press mouse down

// clearBtn.addEventListener('mousedown', runEvent);

// mouse up -- when you let go the click

// clearBtn.addEventListener('mouseup', runEvent);

// mouse enter -- move mouse over the element not triggered if enter sub element

// clearBtn.addEventListener('mouseenter', runEvent);

// mouse leave -- leave mouse over the element not triggered if enter sub element

// clearBtn.addEventListener('mouseleave', runEvent);

// mouse over -- move mouse over the element -- gets triggered when you are in any sub element of the elements

// card.addEventListener('mouseover', runEvent);

// mouse out - move out of the element -- gets triggered when you are in any sub element of the elements

// card.addEventListener('mouseout', runEvent);

// mouse move -- very interactive like games

// card.addEventListener('mousemove', runEvent);

// function runEvent(e) {
//   console.log(`Event type: ${e.type}`);

//   heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

//   document.body.style.backgroundColor = `rgb(${e.offsetX} , ${e.offsetY}, 40)`

//   e.preventDefault();
// }

// keyboard and input events

const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');
const select = document.querySelector('select');
// clear input
taskInput.value = '';

// form.addEventListener('submit', runEvent);

// key down
// taskInput.addEventListener('keydown', runEvent);

// key up -- let go your key
// taskInput.addEventListener('keyup', runEvent);

// key press
// taskInput.addEventListener('keypress', runEvent);

// focus -- click inside of the box to show the little I
// taskInput.addEventListener('focus', runEvent);

// blur -- click outside of the box
// taskInput.addEventListener('blur', runEvent);

// cut -- ctrl x also fires the event
// taskInput.addEventListener('cut', runEvent);

// paste -- ctrl x also fires the event
// taskInput.addEventListener('paste', runEvent);

// Input -- triggers any event
// taskInput.addEventListener('input', runEvent);

// change event on select list
// select.addEventListener('change', runEvent);


// function runEvent(e) {
//   console.log(`EVENT TYPE: ${e.type} `);
//   // console.log(taskInput.value);
//   console.log(e.target.value);

  // heading.innerText = e.target.value; // it is like data binding in angular
  // e.preventDefault();
// }


// event bubbling and delegation

// bubbling is put the event on child and bubble up to parent


// document.querySelector('.card-title').addEventListener('click', function (){
//   console.log('card title');
// });


// document.querySelector('.card-content').addEventListener('click', function (){
//   console.log('card content');
// }); // card title's parent


// document.querySelector('.card').addEventListener('click', function (){
//   console.log('card');
// }); // card content's parent

// document.querySelector('.col').addEventListener('click', function (){
//   console.log('col');
// }); // card's parent

// when you click on card-title all its parents and grand and great grand parents and of course great great parents get triggered too


// delegation is put the event on parent and target on one of the children

// const deleteItem = document.querySelector('.delete-item');

// deleteItem.addEventListener('click', delItem);

document.body.addEventListener('click', delItem);

function delItem(e) {
 
  if(e.target.parentElement.classList.contains('delete-item')) {
    console.log('delete item');
    e.target.parentElement.parentElement.remove();
  } // specify child, tartget the item
}

