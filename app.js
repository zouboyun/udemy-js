//log to console
console.log("hello world");
console.clear();
// console.log; console.error; console.clear; console.warn; console.table

// declare variables let const var

var name = "James";

console.log(name);

let firstName = "Alice";

console.log(firstName);

const age = 18; // cannot be reassigned, but you can change the values inside of an object and push more values into an array

//letters, numbers, _, $ are allowed in the variable names
//cannot start with numbers

var testName = "a"; // Camel case
var test_name = "b"; // Underscore
var TestName = "c" ; // Pascal case

const person = {
  name: "James",
  age: 45
}

console.log(person.name);
person.name = "Jamie";
console.log(person.name);

const numbers = [1,2 ,3, 4, 5];

numbers.push(6);

console.log(numbers);

// Data types in JS

// Primitive Data Types

// String
const string =  "John";

console.log(typeof string);

// Number
const number = 45;

console.log(typeof number);

// Boolean
const boolean = true;

console.log(typeof boolean);

// Null - intentionally left empty
const nullValue = null;

console.log(typeof nullValue);

// Undefined - not defined when created
var movie;

console.log(typeof movie);

// Symbols
const sym = Symbol();

console.log(typeof sym);

// Reference Data Types

// Array
const hobbies = ['movies', 'music'];
console.log(typeof hobbies);
// Object
const address = {
  city: 'Boston',
  state: 'MA'
}

console.log(typeof address);

const today = new Date();

console.log(today);
console.log(typeof today);


// Type Conversion

let val;

// Anything to String you can either use String(yourdata) or (yourdata).toString()

// Number to String

val = String(5);
val = String(4+4);

// Boolean to String

val = String(true);
val = (true).toString();

// Object to String
// val = String(new Date());
// val = String([1, 2, 3]);

// Anything to Number you can either use Number(yourdata) or parseInt(yourdata) and parseFloat(yourdata)

// String to Number

val = Number('3.1415926'); // 3.1415926
val = Number(false); // 0
val = Number('hello'); // not a number
val = Number([12,3]); // not a number
val = parseInt('100.34'); // parse as a integer
val = parseFloat('100.34'); // parse as a decimal
console.log(val);
console.log(typeof val);
console.log(val.length);
console.log(val.toFixed(6));

// Type coercion

const val1 = '5';
const val2 = 6;

const sum = Number(val1 + val2);

console.log(sum);
console.log(typeof sum);

// Math and Operations

const num1 = 101;
const num2 = 50;
let value;

// math with numbers

value = num1 + num2; // plus
value = num1 - num2; // minus
value = num1 * num2; // multiply
value = num1 / num2; // divide
value = num1 % num2; // residule
value = Math.PI; // 3.14159
value = Math.E; // natual exponential
value = Math.round(2.4); // round to the nearest integer
value = Math.ceil(2.4);
value = Math.floor(2.4);
value = Math.sqrt(3.69);
value = Math.abs(-4);
value = Math.pow(2, 3);
value = Math.min(1, 2, 3);
value = Math.max(1, 2, 3);
value = Math.random(); // a random decimal

console.log(value);

// Strings and Concatenation
const firstString = 'Janeeee is a Janurary born kid';
const lastString = 'Woo';

let vari;

vari = firstString + lastString; 

// Concatenate
vari = firstString + ' ' + lastString;

// Append
vari = 'Apple';
vari += 'Pen';

// Escaping
vari = "That's awesome.";
vari = 'I\'m Alice'; // backslash makes sure the single quote after it does not count as the end quote of the string

// Length

vari = firstString.length;

// concat()

vari = firstString.concat(' ', lastString, ' ', 'Awesome');

// Change cases

vari = firstString.toUpperCase();
vari = lastString.toLowerCase();

// Take part of the string like an array

vari = firstString[0];

// indexOf()

vari = firstString.indexOf('e'); // search for the first time substring appears

vari = firstString.lastIndexOf('e'); // search for the last time substring appears

// charAt()

vari = firstString.charAt('2');

vari = firstString.charAt(firstString.length - 1); // get the last char in the string

// substring()

vari = firstString.substring(0,3); // start index and last index

// slice()

vari = firstString.slice(0,3);

// split()
vari = firstString.split(' '); // gives you an object wihch contains the parts of the old string after splitting

// replace()
vari = firstString.replace('Jan', 'Jack'); //to replace a specific part of string to some other string; it replaces the first match only; enclose the string you want to replace with slashes will also replace the first mathc only; same as for RegExp()
vari = firstString.replace(new RegExp('Jan'), 'Jack');
vari = firstString.replace(/Jan/, 'Jack');

// To replace all, use /string/g

vari = firstString.replace(/Jan/g, 'Jack');
vari = firstString.replace(new RegExp('Jan', 'g'), 'Jack');

// includes()

vari = firstString.includes('Jan'); // gives boolean results of whether the string you are searching for appears or not


console.log(typeof vari);
console.log(vari);


// Template Literals

const namie = 'Alice';
const agie = 20;
const job = 'front end developer';
const city = 'NYC';
let html;

// without template string (es5 way)
html = '<ul>' +
       '<li>Name:' + namie + '</li>' +
       '<li>Age:' + agie + '</li>' +
       '<li>Job:' + job + '</li>' +
       '<li>City:' + city + '</li>' +
       '</ul>';

function hello() {
  return 'hello';
}
// with template string (es6 way) using backtick instead of single quote; you can put in numeric operations; call a function; have an if statement using ? and : as if then and else then
html = `
  <ul>
    <li>Name:${namie}</li>
    <li>Age:${agie}</li>
    <li>Job:${job}</li>
    <li>City:${city}</li>
    <li>${2+2}</li>
    <li>${hello()}</li>
    <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
  </ul>`;

document.body.innerHTML = html;

// Array and Array methods

// Create some arrays
const numbers1 = [32, 100, 12, 53, 6]; // declare array using square brackets
const numbers2 = new Array(22, 45, 23, 45, 12); // declare array by calling Array

const fruit = ['apple', 'pineapple', 'kiwi'];
const mix = [22, 'hello', undefined, null, {a:1, b:2}, new Date()];

let cal;
// get the length of array
cal = numbers1.length;
// check if is array
cal = Array.isArray(numbers1); // check if a variable is an array
// get single value through index
cal = numbers1[0];
// insert into array
numbers1[6] = 100; // by assigning values to a certain position of an array you can insert elements into array, it's okay to insert more than the length it will just the positions in between as empty which is undefined data type

// Find index of a value use indexOf() when it finds the first match, i.e. if the value you are searching appears multiple times in the same array it will only return the smallest index
cal = numbers1.indexOf(100);

// // mutate arrays
// numbers1.push(250); // push will append the value at the end of the array
// numbers1.unshift(99); // add to the front of the array
// numbers1.pop(); // take off the value at the end of array
// numbers1.shift(); // take off the front value in the array

// // slice values
// var a = numbers1.slice(1,3); // start index and end index as parameters, the value at start index is included but not the end index

// // reverse array
// numbers1.reverse(); // reverse will change the status of the orginal array but slice doesn't
// a = numbers1.slice().reverse(); // reverse without mutate
// // concatenate array
// cal = numbers1.concat(numbers2);
// cal = numbers1.concat(34);
// cal = numbers1.concat('ohayo'); // you can concat anything you want

// sort array
cal = fruit.sort(); // sort alphabetically
// cal = numbers1.sort(); // sort from large to small and it mutates the array
cal = numbers1.concat().sort(); // sort without mutation
// use the compare function inside of sort
cal = numbers1.sort(function(a, b) {
  return a - b;
}); // sort from small to large

cal = numbers1.sort(function(a, b) {
  return b - a;
}); // change a - b to b - a and you will get large to small again

// find
function under50(num) {
  return num < 50;
}

cal = numbers1.find(under50); // find the first number smaller than 50

// console.log(a);
console.log(numbers1);
console.log(cal);


// Object Literal

const personie = {
  firstName: 'Alice',
  lastName: 'Zou',
  age: 18,
  hobbies: ['music', 'movies', 'badminton'],
  getBirthYear: function() {
    return 2018 - this.age;
  },
  address: {
    state: 'MA',
    city: 'Boston',
    postCode: 10018
  }
}

let val3;

val3 = personie.firstName; // access items inside an object by the key name
val3 = personie.lastName;
val3 = personie.address['city']; // access items inside an object of an object by the key name in quotes
val3 = personie.address.city;
val3 = personie.getBirthYear(); // access function inside of an object

console.log(val3);

// Date and Time

let val4;

const todayDate = new Date(); // Date is a default object in JavaScript, by default it is today's date
val4 = todayDate;

const birthday = new Date('11-29-2000'); // you can pass in any date you want

const birthday1 = new Date('November 29 2000'); // you can change the format but it will be printed out in the same format as before

val4 = birthday1;

val4 = todayDate.getDate(); // get the date of today
val4 = todayDate.getMonth(); // get the month of today and it is 0 based if this month is feb you will get 1 as result
val4 = todayDate.getYear(); // get the year of today
// val4 = todayDate.getDate(); // get the date of today

val4 = todayDate.getTime();

birthday.setDate(12); // chaneg the date of a date time object using setDate

birthday.setFullYear(1987);

console.log(val4);
console.log(typeof val4);
console.log(birthday);

