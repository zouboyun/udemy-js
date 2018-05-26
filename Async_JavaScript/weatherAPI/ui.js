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
  }
  displayResult(weather) {
    this.location.textContent = weather.display_location.full;
    this.desc.textContent = weather.weather;
    this.tem.textContent = weather.temperature_string;
    this.icon.src = weather.icon_url;
    this.humidity.textContent = `Humidity: ${weather.relative_humidity}`;
    this.wind.textContent = `Wind: ${weather.wind_mph} mph`;
    this.feels_like.textContent = `Feels like ${weather.feelslike_string}`
  }
}