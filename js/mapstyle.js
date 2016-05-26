exports.mapStyle = function() {
map.set('styles', [
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [
      { color: 'red' },
      { weight: 1.6 }
    ]
  }, {
    featureType: 'road',
    elementType: 'labels',
    stylers: [
      { saturation: -100 },
      { invert_lightness: true }
    ]
  }, {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [
      { hue: 'red' },
      { gamma: 1.4 },
      { saturation: 82 },
      { lightness: 96 }
    ]
  }, {
    featureType: 'poi.schools',
    elementType: 'geometry',
    stylers: [
      { hue: 'red' },
      { lightness: -15 },
      { saturation: 99 }
    ]
  }
]);
}
