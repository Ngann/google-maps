import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { WeatherService } from './../src/weather-service.js';
// import { Map } from './../src/map.js';
// const loadGoogleMapsApi = require('load-google-maps-api')
// import { changeImage } from './../src/image.js';


$(document).ready(function() {
  //  let myLatLng = {lat: -25.363, lng: 131.044};
  //  let mapElement = document.getElementById('map');
  //  let map, marker = null;
  //  let loadPromise = Map.loadMap();
  // loadPromise.then(function(googleMaps) {
  //   let map = Map.createMap(googleMaps, mapElement);
  //   // let marker = new googleMaps.Marker({position: myLatLng, map:map });
  //   map.addListener('click', function(e) {
  //     if (!(marker === null)) {
  //       marker.setMap(null)
  //      }
  //     marker = Map.placeMarkerAndPanTo(googleMaps, e.latLng, map);
  //     marker.addListener('mouseup', function(e) {
  //       console.log(e.latLng);
  //     console.log(marker);
  //   });
  //   })
  //  // });
  // }).catch(function(error) {
  //   console.error(error);
  // });


  // changeImage(document.body);
  // {lat: -34.397, lng: 150.644}

  $('#cityLocation').click(function() {
    // let city = $('#location').val();
    let lonInput = parseInt($('#lonCord').val());
    let latInput = parseInt($('#latCord').val());
    console.log(lonInput)
    console.log(latInput)
    $('#lonCord').val("");
    $('#latCord').val("");


    let weatherService = new WeatherService();  // create instance of WeatherService class
    let promise = weatherService.getWeatherByCity(lonInput,latInput);  // call the instance method and pass in user input

    promise.then(function(response) {
    let body = JSON.parse(response);
    $('.showCity').text(`The city is ${body.name}%`);
    $('.showTemp').text(`The temperature in Kelvins is ${body.main.temp} degrees.`);
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });


    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: latInput, lng: lonInput},
      zoom: 10
    });
  });

});
