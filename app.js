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

// Number to String

val = String(5);
val = String(4+4);

// Boolean to String

val = String(true);

// Object to String
val = String(new Date());
val = String([1, 2, 3]);


console.log(val);
console.log(typeof val);
console.log(val.length);