export class Bike {
// Vanilla JavaScript example
  getBikeInfor(bike) {
    return new Promise(function(resolve, reject){
      let request = new XMLHttpRequest();
      let url = `https://bikeindex.org:443/api/v3/manufacturers/${bike}`;
      // let url = `https://bikeindex.org:443/api/v3/manufacturers/1`;
      request.onload = function(){
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
