exports.myMap = function() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: new google.maps.LatLng(39.998757, -102.029690),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    zoom:4
  });

};
