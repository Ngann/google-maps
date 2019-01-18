import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Dino } from './../src/dino.js';
import { WeatherService } from './../src/weather-service.js';
// import { Bike } from './../src/bike.js';

$(document).ready(function() {
  //BIKE INDEX //
  // let bikeServices = new Bike();
  // let promise = bikeServices.getBikeInfor();
  //
  // promise.then(function(response) {
  //   let bikeBody = JSON.parse(response);
  //    $('.bikeName').text(`Bike brand ${bikeBody.manufacturer.name}`);
  //    $('.bikeNumber').text(`Bike Id ${bikeBody.manufacturer.id}`);
  // }, function(error) {
  //   $('.bikeErrors').text(`There was an error processing your request: ${error.message}`);
  // });

// //Bike location
//   $('#bikeLocation').click(function() {
//     let bike = $('#bikeId').val();
//     $('#bikeId').val("");
//     console.log(bike)
//
//
//     let bikeService = new Bike();  // create instance of WeatherService class
//     let promise = bikeService.getBikeInfor(bike);  // call the instance method and pass in user input
//
//     promise.then(function(response) {
//       let body = JSON.parse(response);
//       $('.bikeName').text(`Bike brand ${body.manufacturer.name}`);
//       $('.bikeNumber').text(`Bike Id ${body.manufacturer.id}`);
//     }, function(error) {
//       $('.bikeErrors').text(`There was an error processing your request: ${error.message}`);
//     });
//   });

  / Weather Services ///
  $('#cityLocation').click(function() {
    // let city = $('#location').val();
    let lon = $('#lonCord').val();
    let lat = $('#latCord').val();
    console.log(lon)
    $('#lonCord').val("");
    $('#latCord').val("");


    let weatherService = new WeatherService();  // create instance of WeatherService class
    let promise = weatherService.getWeatherByCity(lon,lat);  // call the instance method and pass in user input

  //   promise.then(function(response) {
  //     let body = JSON.parse(response);
  //     $('.showHumidity').text(`The humidity in ${city} is ${body.main.humidity}%`);
  //     $('.showTemp').text(`The temperature in Kelvins is ${body.main.temp} degrees.`);
  //     $('.showLon').text(`The longtitude of ${city} is ${body.coord.lon}`);
  //     $('.showLat').text(`The latitude of ${city} is ${body.coord.lat}`);
  //   }, function(error) {
  //     $('.showErrors').text(`There was an error processing your request: ${error.message}`);
  //   });
  // });

    promise.then(function(response) {
      let body = JSON.parse(response);
      $('.showCity').text(`The city is ${body.name}%`);
      $('.showTemp').text(`The temperature in Kelvins is ${body.main.temp} degrees.`);
      }, function(error) {
        $('.showErrors').text(`There was an error processing your request: ${error.message}`);
      });
});


///// DINO ///
  // let dinoServices = new Dino();
  // let promise = dinoServices.getDinoLorem();
  //
  // promise.then(function(response) {
  //   let dinoBody = JSON.parse(response);
  // }, function(error) {
  //   $('.showErrors').text(`There was an error processing your request: ${error.message}`);
  // });

});
