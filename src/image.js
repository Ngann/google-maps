export function changeImage(el)
 {
   var script = document.createElement("script");
   script.id = "api";
   script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyAgkQk68IFd1BrTCRJxs_5GRlESXpy9gN4";

   el.appendChild(script);
 }
