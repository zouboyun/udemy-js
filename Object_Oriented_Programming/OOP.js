// Person constructor

function Person(name, dob) {
  this.name = name;
  this.birthday = new Date(dob);
  this.age = new Date().getFullYear() - this.birthday.getFullYear();
};


const alice = new Person('Alice', '11/29/2001');
const john = new Person('John', '9/19/1987');

// String

const name1 = 'Jeff'; // this is a primitive value
const name2 = new String('Jeff'); // this is an object

console.log(typeof name1);
console.log(typeof String(name2));

// Number

const num1 = 15;
const num2 = new Number(15);

console.log(typeof num1);
console.log(typeof Number(num2));

// Boolean

const bool1 = true;
const bool2 = new Boolean(true);

console.log(typeof bool1);
console.log(typeof Boolean(bool2));

// Function

const func1 = function(a, b) {
  return a + b;
}
const func2 = new Function('a', 'b', 'return a + b;');

console.log(typeof func1);
console.log(typeof func2);

// Object

const person1 = {'name': 'Eric'};
const person2 = new Object({'name': 'Eric'});

console.log(typeof person1);
console.log(typeof person2);

// Array

const arr1 = [1, 2, 3, 4];
const arr2 = new Array(1, 2, 3, 4);

console.log(typeof arr1);
console.log(typeof arr2);

// Regular Expression

const regex1 = /\w+/;
const regex2 = new RegExp('\w+');

console.log(typeof regex1);
console.log(typeof regex2);