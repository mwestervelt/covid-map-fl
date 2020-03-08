mapboxgl.accessToken = 'pk.eyJ1IjoibXdlc3RlcnZlbHQiLCJhIjoiY2s3aTUycXd4MGhsOTNybzkxN3IyZzV4MCJ9.4fRcyMrwwzjmgBVI2xwoQQ';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-82.671577, 27.870239],
    zoom: 6
});

var overlay = $('.mapboxgl-control-container').hide()

map.on('load', function () {
    counties.forEach(county => {
        // console.log(county)
        map.addSource(county.features[0].properties.name, {
            'type': 'geojson',
            'data': county,
        }),
        map.addLayer({
            'id': county.features[0].properties.name,
            'type': 'fill',
            'source': county.features[0].properties.name,
            'layout': {},
            'paint': {
                'fill-color': '#a29bfe',
                'fill-outline-color': '#6c5ce7',
                'fill-opacity': 0.4
            }
        })
       
    });
    map.addLayer({
        'id': "Pinellas-data",
        'type': 'fill',
        'source': "Pinellas",
        'layout': {},
        'paint': {
            'fill-color': '#a29bfe',
            'fill-outline-color': '#6c5ce7',
            'fill-opacity': 0.8
        }
    })
});






