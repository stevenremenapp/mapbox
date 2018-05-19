//Display Map
mapboxgl.accessToken = 'pk.eyJ1Ijoic3RldmVucmVtZW5hcHAiLCJhIjoiY2pndm5sODNmMTBlZDJ3bnY2ZTBsdnl3NyJ9.e4iOvDiQjPMT9ebCzL6CKA';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/stevenremenapp/cjh5o0t982kqk2sqh6firjwlj',
  center: [-83.289770, 42.414672],
  zoom: 17.5
});

//Display Map Nav Controls
map.addControl(new mapboxgl.NavigationControl());

//Display Map Popups for POIs
map.on('click', function(e) {
  var features = map.queryRenderedFeatures(e.point, {
    layers: ['rtdl-poi']
  });

  if (!features.length) {
    return;
  }

  var feature = features[0];

  var popup = new mapboxgl.Popup({ offset: [0, -15] })
    .setLngLat(feature.geometry.coordinates)
    .setHTML('<h3>' + feature.properties.title + '</h3><p>' + feature.properties.description + '</p>')
    .setLngLat(feature.geometry.coordinates)
    .addTo(map);
});

//Geolocate user
map.addControl(new mapboxgl.GeolocateControl({
  positionOptions: {
    enableHighAccuracy: true
  },
    trackUserLocation: true
}));
