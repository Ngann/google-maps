// export class Dino {
// // Vanilla JavaScript example
//   getDinoLorem() {
//     return new Promise(function(resolve, reject){
//       let xhr = new XMLHttpRequest();
//       let url = 'http://dinoipsum.herokuapp.com/api/?format=html&words=10&paragraphs=3';
//       xhr.onload = function(){
//         if (this.status === 200) {
//           resolve(document.querySelector('#some-awesome-container').innerHTML = this.response);
//           // resolve(xhr.response);
//         } else {
//           reject(Error(xhr.statusText));
//         }
//       }
//       xhr.open("GET", url, true);
//       xhr.send();
//     });
//   }
// }


// Vanilla JavaScript example
// var xhr = new XMLHttpRequest();
//
// xhr.open('GET', 'http://dinoipsum.herokuapp.com/api/?format=html&words=10&paragraphs=3');
// xhr.onload = function() {
//   if (this.status === 200) {
//     document.querySelector('#some-awesome-container').innerHTML = this.response;
//   } else {
//     console.log('Where did all the dinosaurs go?');
//   }
// };
// xhr.send();
