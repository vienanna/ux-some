

// ÅBNINGSTIDER PÅ FORSIDEN

var today = new Date();
var hourNow = today.getHours();
var open;


if (hourNow < 8 ) {
    open = '<div class="roed"></div>';
    console.log('lukket');
} else if (hourNow > 8 ) {
    open = '<div class="groen"></div>';
    console.log('Åben');
}

now.innerHTML = open;




mapboxgl.accessToken = 'pk.eyJ1Ijoic29maWVncm9uYmVyZyIsImEiOiJjanRpYnFmMGMxM3o0M3lwZHNrcXhvazl2In0.zvZxr4rV4hziAJdG6ZM79A';

var geojson = {
    "type": "FeatureCollection",
    "features": [{
         "type": "Feature",
         "geometry": {
             "type": "Point",
             "coordinates": [10.149965, 56.117309]
         },
         "properties": {
             "title": "Mapbox",
             "description": "Washington, D.C."
         }
     },
     {
         "type": "Feature",
         "geometry": {
         "type": "Point",
         "coordinates": [10.159147, 56.119846]
        },
         "properties": {
             "title": "Mapbox",
             "description": "San Francisco, California"
         }
     }]
};

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/sofiegronberg/cjtibvkd50xqk1fk2slb6v0wx',
    center: [10.154678, 56.118114],
    zoom: 15.5
});

// add markers to map
geojson.features.forEach(function(marker) {

    // create a HTML element for each feature
    var el = document.createElement('div');
    el.className = 'marker';

    // make a marker for each feature and add it to the map
    new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .setPopup(new mapboxgl.Popup({offset: 25}) // add popups
            .setHTML('<h3>' + marker.properties.title + '</h3><p>' + marker.properties.description + '</p>'))
        .addTo(map);
});
