document.getElementById('get-jokes').addEventListener('click', getJokes);

function getJokes(e) {
  const num = document.getElementById('number-jokes').value;
  if (num > 0) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `http://api.icndb.com/jokes/random/${num}`, true);
    xhr.onload = function() {
      if (this.status === 200) {
        const response = JSON.parse(this.responseText);
        const jokeList = document.getElementById('jokes');
        let output = '';
        if (response.type === 'success') {
          Array.from(response.value).forEach(function(joke) {
            output += `<li>${joke.joke}</li>`;
          })
        } else {
          output += `<li>Oops! Something went wrong...</li>`;
        }
        console.log(output);
        jokeList.innerHTML = output;
      }
    }
    xhr.send();
  } else {
    alert('Please input a valid number!')
  }
  e.preventDefault();
}