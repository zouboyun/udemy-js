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

// Object and Prototype

/*
- Prototype is an object, it has its own properties and methods
- there are Object.prototype and NewObject.prototype
- NewObject which is initialized from the object will have the prototype of object included in its own prototype
*/
// Person constructor

function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = new Date(dob);
  this.getNickName = function() {
    return this.firstName + 'xixi';
  }
};

Person.prototype.calculateAge = function() {
  return new Date().getFullYear() - this.birthday.getFullYear();
}

Person.prototype.getFullName = function() {
  return this.firstName + ' ' + this.lastName;
}
const alice = new Person('Alice', 'Zou', '11/29/2001');
const john = new Person('John', 'Wang', '9/19/1987');

console.log(alice.calculateAge());
console.log(john);
console.log(john.hasOwnProperty('firstName')); // true
console.log(john.hasOwnProperty('getNickName')); // true
console.log(john.hasOwnProperty('getFullName')); // false because getFullName is not a property in the object but in the prototype of the Person object
console.log(Person.prototype.hasOwnProperty('getFullName')); // true