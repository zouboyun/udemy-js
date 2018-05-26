// init weather class
const weather = new Weather('New York', 'NY');
// init ui class
const ui = new UI();

// add event listener
document.addEventListener('DOMContentLoaded', function() {
  weather.getWeather()
    .then(result => ui.displayResult(result))
    .catch(err => console.log(err));
});
