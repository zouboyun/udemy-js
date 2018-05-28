// using try and catch, the error will be caught meanwhile the program won't stop running
try {
  // this will be a reference error, myFunction is not declared / defined
  // myFunction();
  // this will be a type error
  // null.myFunction();
  // evaluate js code
  eval('"hello');
} catch(e) {
  // see which type of error it is
  console.log(e.name);
  // see which message the error has
  console.log(e.message);
  // returns boolean
  console.log(e instanceof TypeError);
  console.log(e instanceof ReferenceError);
} finally {
  console.log('finally...')
}

console.log('Program continues...');