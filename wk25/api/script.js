var clientId = '1LVYHNHHAZJHDA2LNCOF1MBG31HDWFFNW2OJN2S2KIGFBBOC';
var clientSecret = 'E300I3CDFPTAXKC3J3F1RAEJOLHPRV4USRIZQ1KY5WKKRFDZ';
//?
var key = '?client_id='+clientId+'&client_secret='+clientSecret+'&v=20190801';

var yoobee = '-36.856992,174.764437';

//?ll=123 &near=chicago &llAcc=
var venuesUrl = 'https://api.foursquare.com/v2/venues/explore' + key + '&ll=' + yoobee
//jsonview extension
// console.log(venuesUrl);

//Promises in conjunction with AJAX
//doTask1().then(doTask2(data1)).then(doTask3(data2))


// get list of venues
//fetch takes time
//.json() takes time
fetch(venuesUrl)
    // .then(function(resp){return resp.json()})
    .then(resp=>resp.json())
    .then((data)=>{
        //console.log(data)
        return data.response.groups[0].items
    })
    .then((data)=>{
        // console.log(data)
        //transform data into readable format
        //item refers to individual items
        return data.map(function(item){
            // console.log(item);
            var venue = {
                id: item.venue.id,
                name: item.venue.name,
                address: item.venue.location.formattedAddress,
                category: item.venue.categories[0].shortName,
            };
            return venue;
        });
    })
    .then((data)=>{
        // console.log(data)
    });

// get details of 1 venue
var venueId = '4b5a5f48f964a520ccc028e3';
var venueUrl = 'https://api.foursquare.com/v2/venues/'+venueId+key;
// console.log(venueUrl);

fetch(venueUrl)
    .then(resp=>resp.json())
    .then((data)=>{
        // console.log(data)
        // return data.response.groups[0].items
        var item = data.response.venue;
        // console.log(item);
        var venue = {
            name: item.name,
            description: item.description,
            category: item.categories[0].shortName,
            address: item.location.formattedAddress,
            photo: item.bestPhoto.prefix+'300x300'+item.bestPhoto.suffix
        };
        // console.log(venue);
    });

// load venues
function loadVenues(){
    var venuesUrl = 'https://api.foursquare.com/v2/venues/explore' + key + '&ll=' + yoobee
    fetch(venuesUrl)
    .then(resp=>resp.json())
    .then((data)=>{
        return data.response.groups[0].items
    })
    .then((data)=>{
        return data.map(function(item){
            var venue = {
                id: item.venue.id,
                name: item.venue.name,
                address: item.venue.location.formattedAddress,
                category: item.venue.categories[0].shortName,
            };
            return venue;
        });
    })
    .then((data)=>{
        console.log(data)
    })
}
loadVenues();

function loadVenue(venueId){
    var venueUrl = 'https://api.foursquare.com/v2/venues/'+venueId+key;
    fetch(venueUrl)
    .then(resp=>resp.json())
    .then((data)=>{
        var item = data.response.venue;
        var venue = {
            name: item.name,
            description: item.description,
            category: item.categories[0].shortName,
            address: item.location.formattedAddress,
            photo: item.bestPhoto.prefix+'300x300'+item.bestPhoto.suffix
        };
    });
}