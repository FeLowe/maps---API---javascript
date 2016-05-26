
exports.loadPins = function() {

  var locations = [
    ['UFO Beach','South Padre Island, Texas', 26.363023, -97.213036, '<img src="/img/nude.jpg">'],
    ['San Gregorio', 'San Mateo County, California', 37.324946, -122.403381],
    ['Lighthouse Beach','Islip, New York', 40.629925, -73.217469],
    ['Gunnison Beach','Middletown, New Jersey', 40.460670, -73.993221],
    ['Collins Beach','Sauvie Island, Oregon', 45.788356, -122.786906],
    ['Little Beach','Maui, Hawaii', 20.634840, -156.451942],
    ['Haulover Beach','Bal Harbour, Florida', 25.913497, -80.121584],
    ['Secret Cove','Incline Village, Nevada', 39.155276, -119.933023]
  ];

  for (i = 0; i < locations.length; i++) {
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[i][2], locations[i][3]),
      map: map
    });
}
    google.maps.event.addListener(marker, 'click', (function(marker, i) {
      return function() {
        infowindow.setContent(locations[i][0]);
        infowindow.open(map, marker);
      };

    })(marker, i));
  };
