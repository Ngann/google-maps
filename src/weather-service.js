export class WeatherService {
  getWeatherByCity(lon,lat) {
    return new Promise(function(resolve, reject) {
      let key = process.env.API_KEY
      let request = new XMLHttpRequest();
      // let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;
    let url = `http://api.openweathermap.org/data/2.5/weather?lon=${lon}&lat=${lat}&appid=${key}`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }
}
