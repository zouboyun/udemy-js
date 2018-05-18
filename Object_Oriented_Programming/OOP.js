// Person constructor

function Person(name, dob) {
  this.name = name;
  this.birthday = new Date(dob);
  this.age = new Date().getFullYear() - this.birthday.getFullYear();
};


const alice = new Person('Alice', '11/29/2001');
const john = new Person('John', '9/19/1987');

console.log(alice.age);
console.log(john.age);