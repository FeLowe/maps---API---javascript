// exports.mapIt = function(latitude, longitude) {
//   map = new google.maps.Map(document.getElementById('map'), {
//     center: {lat: latitude, lng: longitude},
//     zoom:8
//     });
//   var userLatLong = new google.maps.LatLng(latitude, longitude, true);
//   new google.maps.Marker({
//   map: map,
//   position: userLatLong
// });
// };

exports.myMap = function() {
   map = new google.maps.Map(document.getElementById('map'), {
    center: new google.maps.LatLng(41.976816, -87.659916),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    zoom:8
  });

  var marker = new google.maps.Marker({
    position: LatLng,
    map: map,
    title: 'Hello World!'
  });
};
