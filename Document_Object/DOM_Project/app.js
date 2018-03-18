//define UI vars

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// load all event listeners

loadEventListerners();

// load all event listeners

function loadEventListerners() {
  // Add task event
  form.addEventListener('submit', addTask);
  // Remove task event
  taskList.addEventListener('click', removeTask);
  // clear task event
  clearBtn.addEventListener('click', clearTasks);
  // filer tasks event
  filter.addEventListener('keyup', filterTasks);
}
// Add Task

function addTask(e) {
  // if no input then alert
  if(taskInput.value === '') {
    alert('Add a task');
  }
  else {
  // create list items
  const li = document.createElement('li');
  // add class name
  li.className = 'collection-item';
  // create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));
  // create new link element
  const link = document.createElement('a');
  // add class name
  link.className = 'delete-item secondary-content';
  // add icon html
  link.innerHTML = '<i class ="fa fa-remove"></i>';
  // append the link to li
  li.appendChild(link);
  // append the li to the ul
  taskList.appendChild(li);

  // store in Local Storage
  storeTaskInLocalStorage(taskInput.value);

  // clear the input
  taskInput.value = '';
  e.preventDefault();
  }
}
// Store Task
function storeTaskInLocalStorage(task) {
  let tasks;
  if(localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}



// Remove task

function removeTask(e) {
  // target at the link a tag and remove the link's parent
  if(e.target.parentElement.classList.contains('delete-item')) {
    if(confirm('Are you sure?')) {
      e.target.parentElement.parentElement.remove();
    }
  }
}

// Clear tasks

function clearTasks(e) {
  // clear the innerHTML
  // taskList.innerHTML = '';
  // loop through each child this is faster
  if(confirm('Are you sure?')) {
    while(taskList.firstChild) {
      taskList.removeChild(taskList.firstChild);
    }
  }
}

// Filter tasks
function filterTasks (e) {
  const text = e.target.value.toLowerCase();
  document.querySelectorAll('.collection-item').forEach(function (task) {
    const item = task.firstChild.textContent;
    if(item.toLowerCase().indexOf(text) != -1) {
        task.style.display = 'block';
    }
    else {
      task.style.display = 'none';
    }
  });
  // console.log(text);
}