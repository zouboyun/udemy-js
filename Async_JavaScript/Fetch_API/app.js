document.getElementById('button1').addEventListener('click', getTxtData);

document.getElementById('button2').addEventListener('click', getJsonData);

document.getElementById('button3').addEventListener('click', getApiData);


function getTxtData() {
  // fetch function returns a promise
  fetch('test.txt')
    .then(function(response) {
      return response.text();  
    })
      .then(function(data) {
        document.getElementById('output1').innerHTML = data;
      })
    .catch(function(err) {
      console.log(err);
    })
}

function getJsonData() {
  // fetch function returns a promise
  fetch('test.json')
    .then(function(response) {
      return response.json();  
    })
      .then(function(data) {
        let output = '';
        data.forEach(function(obj) {
          output += `<li>${obj.title}</li>`
        })
        document.getElementById('output2').innerHTML = output;
      })
    .catch(function(err) {
      console.log(err);
    })
}

function getApiData() {
  // fetch function returns a promise
  fetch('https://api.github.com/users')
    .then(function(response) {
      return response.json();  
    })
      .then(function(data) {
        let output = '';
        data.forEach(function(user) {
          output += `<li>${user.login}</li>`
        })
        document.getElementById('output3').innerHTML = output;
      })
    .catch(function(err) {
      console.log(err);
    })
}