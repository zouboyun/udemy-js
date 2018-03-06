// local and session storage

// set local storage item -- local will stay until you manually clear it

localStorage.setItem('name', 'John'); // key and value
localStorage.setItem('age', '18'); // key and value
// session storage -- temporary when you close the browser it's gone
sessionStorage.setItem('name', 'Eric'); // key and value
sessionStorage.setItem('age', '31'); // key and value
// remove from storage

// localStorage.removeItem('name');

// get item from storage

const name = localStorage.getItem('name');
const age = localStorage.getItem('age');

// clear local storage
// localStorage.clear();

console.log(name, age);

document.querySelector('form').addEventListener('submit', function(e){
  const task = document.getElementById('task').value;

  let tasks;

  if (localStorage.getItem('tasks') === null){
    tasks = []
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task); // add task to the array

  localStorage.setItem('tasks', JSON.stringify(tasks));

  alert('Task Saved!');

  e.preventDefault();
})

const tasks = JSON.parse(localStorage.getItem('tasks'));

console.log(tasks);

tasks.forEach(function(task){
  console.log(task);
});