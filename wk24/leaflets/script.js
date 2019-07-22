
//lat,long
var center = {lat:-36.8564947,lng:174.7601895};
var map = L.map('map').setView(center,17);

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
var peopleIcon = L.icon({
    iconUrl:'people.svg',
    iconSize:[50,50]
});

//markers
var myMarker = L.marker(center,{icon:peopleIcon}).addTo(map);
myMarker.bindPopup('<div class="marker-box">X marks the spot!</div>');

var latlngs = [[-36.8564947,174.7601895],];
var polygon = L.polygon(latlngs, {color: 'red'}).addTo(map);
map.fitBounds(polygon.getBounds());
