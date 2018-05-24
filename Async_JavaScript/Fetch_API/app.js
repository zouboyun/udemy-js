document.getElementById('button1').addEventListener('click', getTxtData);

document.getElementById('button2').addEventListener('click', getJsonData);

document.getElementById('button3').addEventListener('click', getApiData);


function getTxtData() {
  // fetch function returns a promise
  fetch('test.txt')
    .then(response => response.text())
      .then(data => document.getElementById('output1').innerHTML = data)
    .catch(err => console.log(err))
}

function getJsonData() {
  // fetch function returns a promise
  fetch('test.json')
    .then(response => response.json())
      .then(data => {
        let output = '';
        data.forEach(obj => output += `<li>${obj.title}</li>`)
        document.getElementById('output2').innerHTML = output;
      })
    .catch(err => console.log(err))
}

function getApiData() {
  // fetch function returns a promise
  fetch('https://api.github.com/users')
    .then(response => response.json())
      .then(data => {
        let output = '';
        data.forEach(user => output += `<li>${user.login}</li>`)
        document.getElementById('output3').innerHTML = output;
      })
    .catch(err => console.log(err))
}

// arrow function does not need key word function
const testArrow = () => {console.log('success')};
// arrow function -- one line function does not need {}
const sayHello = (name, age) => console.log(`Hello, ${name}'s age is ${age}`);
// arrow function -- one parameter does not need ()
const testOnePar = name => console.log(`Yo ${name}`);
// arrow fucntion -- do not need the return key word, for object need ()
const sayHalo = () => ({msg: 'Halo'});
// arrow function -- can be used as call back
const users = ['Alice', 'John', 'Eric'];
const nameLength = users.map(name => name.length);



// testArrow()
// sayHello('tj', 30);
// testOnePar('tj');
// console.log(sayHalo());
// console.log(nameLength);
// console.log(users)