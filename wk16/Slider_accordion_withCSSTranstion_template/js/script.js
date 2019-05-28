$(function(){

    var sState = 'close';
    $('#slide-button').on('click', function(){
        if(sState == 'close'){
            //css event
            $('header').addClass('open');
            //on => one, to remove process after completion, to prevent clashes
            //for transisitonend and animation ends
            $('header').one('transitionend', function(){
                $('#slide-button i').removeClass('fa-arrow-circle-right').addClass('fa-arrow-circle-left');
            });
            sState = 'open';
        } else{
            $('header').removeClass('open');
            $('header').one('transitionend', function(){
                $('#slide-button i').removeClass('fa-arrow-circle-left').addClass('fa-arrow-circle-right');
            });
            sState = 'close';
        }
    });

    //jquery cannot transition to 'auto' height without hack
    $('#accordion h2').on('click', function(){
        var sState = $(this).data('state');
        if(sState == 'close'){
            $(this).next().addClass('open').one('transitionend', function(){
                $(this).prev().find('i').removeClass('fa-chevron-circle-down').addClass('fa-chevron-circle-up');
            });
            $(this).data('state', 'open');
        } else{
            $(this).next().removeClass('open').one('transitionend', function(){
                $(this).prev().find('i').removeClass('fa-chevron-circle-up').addClass('fa-chevron-circle-down');
            });
            $(this).data('state', 'close');
        }
    });

    //simply add breakpoints of the same transition classes for responsive.
});
