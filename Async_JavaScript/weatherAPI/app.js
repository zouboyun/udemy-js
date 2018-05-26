// init weather class
const weather = new Weather('San Francisco', 'CA');
// init ui class
const ui = new UI();

// add event listener
document.addEventListener('DOMContentLoaded', getWeather);

document.getElementById('change-location').addEventListener('click', () => {
  document.getElementById('city').value = '';
  document.getElementById('state').value = '';
})

document.getElementById('w-change-btn').addEventListener('click', (e) => {
  // define new city and new state
  const newCity = document.getElementById('city').value;
  const newState = document.getElementById('state').value;
  // pass in new city and new state to change location method
  weather.changeLocation(newCity, newState);
  // close modal
  $('#localModal').modal('hide');
  // fetch and display new weather
  getWeather();
})

// define getWeather method
function getWeather() {
  weather.getWeather()
    .then(result => ui.displayResult(result))
    .catch(err => console.log(err));
}