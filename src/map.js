const loadGoogleMapsApi = require('load-google-maps-api');
const key = process.env.GOOGLE_KEY;

export class Map {
  constructor() {
    this.markers = [];
    console.log(this.markers);
  }
  static loadMap() {
    return loadGoogleMapsApi({ key: key });
  }

  static createMap(googleMaps, mapElement) {
    return new googleMaps.Map(mapElement, {
      center: {
        lat: -25.363,
        lng: 131.044
      },
      zoom: 5
    });
  }

  static placeMarkerAndPanTo(googleMaps, latLng, map) {
    let marker = new googleMaps.Marker({
       position: latLng,
       map: map,
       draggable:true,
    });
    // this.markers.push(marker)
    map.panTo(latLng);
    return marker;
 }
}



//
//    initMap() {
//     let map = new google.maps.Map(document.getElementById('map')), {
//       center: {lat: -34.397, lng: 150.644},
//       zoom: 8
//     });
//   }
//
//   getMap() {
//     return new Promise(function(resolve, reject) {
//       // let key = process.env.GOOGLE
//       let request = new XMLHttpRequest();
//       let url = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAgkQk68IFd1BrTCRJxs_5GRlESXpy9gN4&callback=initMap`;
//       request.onload = function(initMap()) {
//         if (this.status === 200) {
//           resolve(request.response);
//         } else {
//           reject(Error(request.statusText));
//         }
//       }
//       request.open("GET", url, true);
//       request.send();
//     })
//   }
// }
