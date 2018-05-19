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
- instances of objects won't have prototype
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

console.log(typeof Person);
console.log(alice);
console.log(alice.calculateAge());
console.log(john.hasOwnProperty('firstName')); // true
console.log(john.hasOwnProperty('getNickName')); // true
console.log(john.hasOwnProperty('getFullName')); // false because getFullName is not a property in the object but in the prototype of the Person object
console.log(Person.prototype.hasOwnProperty('getFullName')); // true

// Prototypal Inheritance

/*
- Have one object inherited from another object
- In the example below, Customer object will inherit the prototype from the Ppl object
*/

// create Ppl constructor
function Ppl(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

// add greeting function to Ppl prototype
Ppl.prototype.greeting = function() {
  return `Hello ${this.firstName} ${this.lastName}.`;
}

// create Customer constructor
function Customer(firstName, lastName, phone, membership) {
  Ppl.call(this, firstName, lastName);
  this.phone = phone;
  this.membership = membership;
}

// inherit Ppl prototype
Customer.prototype = Object.create(Ppl.prototype);
Customer.prototype.constructor = Customer;

const eric = new Ppl('Eric', 'Gu');
const customer1 = new Customer('foo', 'bar', '12324', 'Standard');

// change Customer greeting function
Customer.prototype.greeting = function() {
  return `Welcome to costco ${this.firstName} ${this.lastName}!`
}
console.log(eric);
console.log(eric.greeting());
console.log(customer1);
console.log(customer1.greeting());

// Using Object.create

/*
create prototypes inside of parent object and have different properties with different prototype methods
*/

const personPrototypes = {
  greeting: function() {
    return `Hello ${this.firstName} ${this.lastName}!` ;
  },
  getMarried: function(newLastName) {
    this.lastName = newLastName;
  }
}

const mary = Object.create(personPrototypes); // pass in prototype as a parameter for Object.create

mary.firstName = 'Mary';
mary.lastName = 'Wana';
mary.age = 16;
mary.getMarried('Dickson');

console.log(mary.greeting());

// Different way of using Object.create method is to include prototype as the first parameter, the values of the object as the second parameter following the syntax below

const james = Object.create(personPrototypes, {
  firstName: {value: 'James'},
  lastName: {value: 'Wu'},
  age: {value: 37}
});

console.log(james.greeting());

// ES6 classes

class PersonClass {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
  }

  greeting() {
    return `Hello ${this.firstName} ${this.lastName}!`
  }

  getAge() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  getMarried(newLastName) {
    this.lastName = newLastName;
  }

  // static methods cannot be called with the instance because it is not part of the property, has to be called with the class, it's under prototype -> constructor

  static addNumbers(x, y) {
    return x + y;
  }
}

const lily = new PersonClass('Lily', 'Bass', '1/1/1950');
lily.getMarried('James');

console.log(lily);