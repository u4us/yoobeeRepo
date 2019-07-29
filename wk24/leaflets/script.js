
//lat,long; not position absolute
var center = {lat:-36.8564947,lng:174.7601895};
var map = L.map('map').setView(center,17);

//mapbox
var OpenStreetMap_Mapnik = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoidGhhbHl4OTAiLCJhIjoiY2o2YjdrZHRlMWJmYjJybDd2cW1rYnVnNSJ9.j_DQLfixHfhioVjH6qmqkw').addTo(map);



// L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     id: 'mapbox.streets',
//     accessToken: 'pk.eyJ1IjoiZXVwaG9ydXMiLCJhIjoiY2p5ZXh5YTV5MDZmZTNuczk2aHUzZzVpdSJ9.y2Ek4u465Bk1wRqcoJYYRg'
// }).addTo(map);

//https://api.mapbox.com/styles/v1/euphorus/cjyey8k1i058t1coaw2otw33f/wmts?access_token=pk.eyJ1IjoiZXVwaG9ydXMiLCJhIjoiY2p5ZXh5YTV5MDZmZTNuczk2aHUzZzVpdSJ9.y2Ek4u465Bk1wRqcoJYYRg

//circle
L.circle(center, {
    radius: 200,
    color:'salmon',
    weight:1,
    fill:false
}).addTo(map);

//icon
// var peopleIcon = L.icon({
//     iconUrl:'people.svg',
//     iconSize:[50,50]
// });

//markers
// var myMarker = L.marker(center,{icon:peopleIcon}).addTo(map);
// myMarker.bindPopup('<div class="marker-box">X marks the spot!</div>');

// var latlngs = [[-36.8564947,174.7601895],];
// var polygon = L.polygon(latlngs, {color: 'red'}).addTo(map);
// map.fitBounds(polygon.getBounds());

//multiple markers
//geojson.io
var services = [
    {
        latlng: {lat: -36.857029503106894, lng: 174.76444602012634},
        description: 'Cafe La Ritz',
        icon: 'people.svg'
    },{
        latlng: {lat: -36.85751881886102, lng: 174.76380228996277},
        description: 'Langham Hotel',
        icon: 'people.svg'
    },{
        latlng: {lat: -36.8567204599639, lng: 174.76340532302856},
        description: 'KBab',
        icon: 'people.svg'
    }
];

console.log(services);

//addto servicegroup instead of map directly
var serviceGroup = L.layerGroup();

//LNG, LAT
var markers = services.map(function(service){
    var markerIcon = L.icon({iconUrl: service.icon, iconSize:[50,50]});
    var marker = L.marker(service.latlng, {icon: markerIcon}).addTo(serviceGroup);
    marker.bindPopup('<div class="marker-box">' + service.description + '</div>');
    return marker;
});

var landmarks = [
    {
        latlngs: [
            {lng: 174.76829767227173, lat: -36.854110712482715},
            {lng: 174.76599097251892, lat: -36.856239723702146},
            {lng: 174.76723551750183, lat: -36.857158270714336},
            {lng: 174.76905941963196, lat: -36.854960607137265},
            {lng: 174.76829767227173, lat: -36.854110712482715}
        ],
        description: 'University of Auckland',
        popup: {
            latlng: {lng: 174.76767539978027, lat: -36.855527198323685},
            description: 'Cool Uni'
        }
    },{
        latlngs: [
            {lng: 174.76463377475739, lat: -36.85731708379806},
            {lng: 174.76301908493042, lat: -36.85684064355689},
            {lng: 174.76249873638153, lat: -36.857411513042756},
            {lng: 174.76380228996277, lat: -36.85796520944801},
            {lng: 174.76463377475739, lat: -36.85731708379806}
        ],
        description: 'Cordis Hotel',
        popup:{
            latlng: {lng: 174.7633570432663, lat: -36.85734283724},
            description: 'A hotel'
        }
    }
];

console.log(landmarks);

var landmarkGroup = L.layerGroup();

var polygons = landmarks.map(function(landmark){
    //params, settings
    var polygon = L.polygon(landmark.latlngs,{
        color:'hotpink', 
        weight:1
    }).addTo(landmarkGroup);
    var popup = L.popup({
        closeButton: false,
        closeOnClick: false,
        className: 'landmark-popup',
        offset: [0,0]
    })
    .setLatLng(landmark.popup.latlng)
    .setContent(landmark.popup.description);
    polygon.on('click', function(){
        if(map.hasLayer(popup)){
            map.closePopup(popup);
        } else{
            map.addLayer(popup);
        }
    })
    return polygon;
});

var baseLayer = {};
var overLayers = {
    'Services': serviceGroup,
    'Landmarks': landmarkGroup
};
L.control.layers(baseLayer, overLayers).addTo(map);