//google services
var distanceService;

function initMap() {
    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;

    var auckland = {lat: -36.848167, lng: 174.765997};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 7, 
        center: auckland,
        disableDefaultUI: true
    });
    directionsDisplay.setMap(map);
    var onChangeHandler = function() {
        calculateAndDisplayRoute(directionsService, directionsDisplay);
    };
    document.getElementById('from').addEventListener('change', onChangeHandler);
    document.getElementById('to').addEventListener('change', onChangeHandler);
    // var marker = new google.maps.Marker({position: auckland, map: map});

    distanceService = new google.maps.DistanceMatrixService();
}

function calculateAndDisplayRoute(directionsService, directionsDisplay) {
    directionsService.route({
        origin: document.getElementById('from').value,
        destination: document.getElementById('to').value,
        travelMode: 'DRIVING'
    }, function(response, status) {
        if (status === 'OK') {
            directionsDisplay.setDirections(response);
        } else {
            window.alert('Directions request failed due to ' + status);
        }
    });
}

//vehicle calculations
var motorbike = document.querySelector('.vehicle1');
var smallcar = document.querySelector('.vehicle2');
var largecar = document.querySelector('.vehicle3');
var motorhome = document.querySelector('.vehicle4');

function calcVehicles(peopleamount, daysamount){
    if(peopleamount == 1 && daysamount >= 1 && daysamount <= 5){
        motorbike.classList.add('available');
    } else{
        motorbike.classList.remove('available');
    }

    if(peopleamount >= 1 && peopleamount <= 2 && daysamount >=1 && daysamount <= 10){
        smallcar.classList.add('available');
    } else{
        smallcar.classList.remove('available');
    }

    if(peopleamount >= 1 && peopleamount <= 5 && daysamount >=3 && daysamount <= 10){
        largecar.classList.add('available');
    } else{
        largecar.classList.remove('available');
    }

    if(peopleamount >= 2 && peopleamount <= 6 && daysamount >=2 && daysamount <= 15){
        motorhome.classList.add('available');
    } else{
        motorhome.classList.remove('available');
    }
}

//slider calculations
var peopleNumber;
var daysNumber;

var people = document.querySelector('#peopleRange');
var days = document.querySelector('#daysRange');

var peopleIcon = document.querySelector('.peopleIcon');
var daysIcon = document.querySelector('.daysIcon');

people.oninput = function(){
    var temp = document.querySelector('.vehicle');
    for (let i = 0; i < temp.length; i++) {
        temp.classList.remove('selected');
    }
    peopleIcon.innerHTML = this.value;
    peopleNumber = this.value;
    calcVehicles(peopleNumber, daysNumber);

    
}
days.oninput = function(){
    var temp = document.querySelector('.vehicle');
    for (let i = 0; i < temp.length; i++) {
        temp.classList.remove('selected');
    }
    daysIcon.innerHTML = this.value;
    daysNumber = this.value;
    calcVehicles(peopleNumber, daysNumber);
}

//1. function to calc no. of people
    //display to main screen 
    //display to final screen

//2. function to calc no. of days
    //display to main screen 
    //display to final screen

//3. function to calc vehicle available (no. of people, no. of days)
    //show only available vehicles
    //display to main screen(?)
    //display to final screen

    //grab values from selection


$(function(){

    //show/hide modals
    $('[data-target').on('click', function(){
        if($($(this).data('target')).hasClass('showModal')){
            $($(this).data('target')).removeClass('showModal');
        } else{
            $('.showModal').removeClass('showModal');
            $($(this).data('target')).addClass('showModal');
        }
    });

    $('.closeModal').on('click', function(){
        $('.showModal').removeClass('showModal');
    });

    //selection
    var selectionName;
    var selectionCost;
    var selectionFuel;

    $('.vehicle').on('click', function(){
        if($(this).hasClass('selected')){
            $(this).removeClass('selected');
        } else{
            $('.vehicle').removeClass('selected');
            $(this).addClass('selected');
            selectionName = $(this).data('name');
            selectionCost = $(this).data('cost');
            selectionFuel = $(this).data('fuel');
        }        
    });

    //printing
    $('.calculate').on('click', function(){
        $('.final').addClass('showModal');
        $('#printPeople').text(peopleNumber);
        $('#printDays').text(daysNumber);
        $('#vehicleName').text(selectionName);
        $('#vehicleCost').text('$' + selectionCost*daysNumber + ' ('+ selectionCost+'/Day)');
        // $('#vehicleFuel').text(selectionFuel);
    });

    //google distance services
    $('.calculate').on('click',function(e){
        e.preventDefault();
        var sFrom = $('#from').val();
        var sTo = $('#to').val();

        distanceService.getDistanceMatrix({
            origins: [sFrom + ' New Zealand'],
            destinations: [sTo  + ' New Zealand'],
            travelMode: google.maps.TravelMode.DRIVING,
            unitSystem: google.maps.UnitSystem.METRIC,
            durationInTraffic: true,
            avoidHighways: false,
            avoidTolls: false
        },
        function (response, status) {
            if (status !== google.maps.DistanceMatrixStatus.OK) {
                console.log('Error:', status);
            } else {

                // console.log(response);

                var iDistance = response.rows["0"].elements["0"].distance.value;
                var sDistance = response.rows["0"].elements["0"].distance.text;
                var sTravelingTime = response.rows["0"].elements["0"].duration_in_traffic.text;
                
                $('#vehicleFuel').text(parseInt((iDistance/1000)/100*selectionFuel)+'L' + ' ('+ selectionFuel +'/100km)');
                $('#distance').html(sDistance);
            }
        });
    });
});
