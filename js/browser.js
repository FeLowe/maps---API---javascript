// var mapIt = require('../js/google-maps.js').mapIt;
//
// $(document).ready(function() {
//   $('#map').append(mapIt);
//   navigator.geolocation.getCurrentPosition(function(response) {
//     var latitude = response.coords.latitude;
//     var longitude = response.coords.longitude;
//     mapIt(latitude, longitude);
//   });
// });

var myMap = require('../js/google-maps.js').myMap;

$(document).ready(function() {
  $('#map').append(myMap);

});
