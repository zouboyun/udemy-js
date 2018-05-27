// init weather class
const weather = new Weather();
// init ui class
const ui = new UI();
// init storage class
const storage = new Storage();
// display dropdown
weather.setDropdown()
  .then(dropdown => ui.displayDropdown(dropdown))
  .catch(err => console.log(err));

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
  // change location in local storage
  storage.setLocation(newCity, newState);
  // close modal
  $('#localModal').modal('hide');
  // fetch and display new weather
  getWeather();
})

// define getWeather method
function getWeather() {
  storage.getLocation();
  weather.city = storage.city;
  weather.state = storage.state;
  weather.getWeather()
    .then(result => ui.displayResult(result))
    .catch(err => console.log(err));
}