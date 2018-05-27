class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.tem = document.getElementById('w-tem');
    this.icon = document.getElementById('w-icon');
    this.details = document.getElementById('w-details');
    this.humidity = document.getElementById('w-humidity');
    this.wind = document.getElementById('w-wind');
    this.feels_like = document.getElementById('w-feels-like');
    this.city = document.getElementById('city');
    this.state = document.getElementById('state');
  }
  displayResult(weather) {
    this.location.textContent = weather.display_location.full;
    this.desc.textContent = weather.weather;
    this.tem.textContent = weather.temperature_string;
    this.icon.src = weather.icon_url;
    this.humidity.textContent = `Relative Humidity: ${weather.relative_humidity}`;
    this.wind.textContent = `Wind: ${weather.wind_string}`;
    this.feels_like.textContent = `Feels like: ${weather.feelslike_string}`
  }
  displayDropdown(location) {
    let cityList = '<option selected disabled>-- Please Select --</option>';
    let stateList = '<option selected disabled>-- Please Select --</option>';
    location.states.forEach(state => {
      stateList += `
        <option>${state}</option>
      `
    })
    this.state.innerHTML = stateList;
    location.cities.forEach(city => {
      cityList += `
        <option>${city}</option>
      `
    })
    this.city.innerHTML = cityList;

  }
}