var myMap = require('../js/google-maps.js').myMap;
var loadPins = require('../js/markers.js').loadPins;
var mapStyle = require('../js/mapstyle.js').mapStyle;

$(document).ready(function() {
  $('#map').append(myMap);
  $('#map').append(mapStyle);
  $('#user-age').submit(function(event){
    event.preventDefault();
    var userAge = parseInt($('#age').val());
    $('#age').val(""); // removes "age" after click submit
    if (userAge >= 18){
      $(loadPins).show();
    } else {
      $("#sorry").show();
    }
  });
});
