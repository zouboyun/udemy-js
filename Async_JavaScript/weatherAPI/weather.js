class Weather {
  constructor(city, state) {
    this.city = city;
    this.state = state;
    this.api_key = '99dfe35fcb7de1ee';
  }

  async getWeather() {
    const response = await fetch(`http://api.wunderground.com/api/${this.api_key}/conditions/q/${this.state}/${this.city}.json`);
    const responseData = await response.json();
    return responseData.current_observation;
  }

  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}