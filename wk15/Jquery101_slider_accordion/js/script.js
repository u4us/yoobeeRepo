$(function(){

    //--nav-slider
    var sState = 'close';

    //convention, becuase already shorthand, no need to store in variables
    //.addEventListener() => .on()
    //anonymous function, where function is integrated into the line
    $('#slide-button').on('click', function(){

        if(sState == 'close'){
            //open

            //.style.border => .css()
            // $('header').css({left: '0em'});
            //adding a function ensures code will run in series, not parallel
            $('header').animate({left: '0em'}, 1000, function(){
                $('#slide-button .fa').removeClass('fa-arrow-circle-right').addClass('fa-arrow-circle-left');
            });

            sState = 'open';
        } else{
            //close

            $('header').animate({left: '-17em'}, 1000, function(){
                $('#slide-button .fa').removeClass('fa-arrow-circle-left').addClass('fa-arrow-circle-right');
            });

            sState = 'close';
        }

    });

    //--accordion
    //no loop required
    $('#accordion p').hide();

    $('#accordion h2').on('click', function(){
        //$('#accordion p').slideDown();
        
            var sState = $(this).data('state');
            //keep the state on the dom element
            if(sState == 'close'){

                //find within the element
                $(this).next().slideDown(function(){
                    //context of 'this' has changed, therefore need to traverse to the parent
                    $(this).prev().find('i').removeClass('fa-chevron-circle-down').addClass('fa-chevron-circle-up');
                });

                //update state of the element
                $(this).data('state', 'open');

            } else{

                $(this).next().slideUp(function(){
                    $(this).prev().find('i').removeClass('fa-chevron-circle-up').addClass('fa-chevron-circle-down');
                });

                $(this).data('state', 'close');

            }

        //find within the element
        // $(this).find('i').removeClass('fa-chevron-circle-down').addClass('fa-chevron-circle-up');
    });
});