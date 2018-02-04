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

