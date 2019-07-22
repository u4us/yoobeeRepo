
var distanceService;

function initMap(){
        distanceService = new google.maps.DistanceMatrixService();
};

$(function(){

    $('button').on('click',function(e){
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

                //console.log(response);

                var iDistance = response.rows["0"].elements["0"].distance.value;
                var sDistance = response.rows["0"].elements["0"].distance.text;
                var sTravelingTime = response.rows["0"].elements["0"].duration_in_traffic.text;
                
                $('h1>span').html(iDistance);
                $('.distance').html(sDistance);
                $('.time').html(sTravelingTime);
            }
        });

    });

});








