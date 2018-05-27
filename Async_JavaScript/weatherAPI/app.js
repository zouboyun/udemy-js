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
document.addEventListener('DOMContentLoaded', () => {
  getWeather();
  ui.clearError();
});

document.getElementById('change-location').addEventListener('click', () => {
  document.getElementById('city').value = '';
  document.getElementById('state').value = '';
  ui.clearError();
})

document.getElementById('w-change-btn').addEventListener('click', (e) => {
  // define new city and new state
  const newCity = document.getElementById('city').value;
  const newState = document.getElementById('state').value;
  // alert when no city or state was input
  if (newState === '') {
    alert('Please input a state.')
  }
  if (newCity === '') {
    alert('Please input a city.')
  }
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
  if (storage.city !== '' && storage.state !== '') {
    weather.city = storage.city;
    weather.state = storage.state;
    weather.getWeather()
      .then(result => ui.displayResult(result))
      .catch(() => ui.displayError(`Location ${storage.city}, ${storage.state} is not valid.`, 'alert alert-danger'));
  } else {
    ui.displayError('Please input both City and State.', 'alert alert-danger');
  }
}