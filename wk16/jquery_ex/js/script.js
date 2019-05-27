$(function(){

    var isOpen = false;
    //slider
    $('.bars').on('click', function(){
        $('.nav').animate({left: '0'});
        // isOpen = true;
    });
    $('.fa-chevron-circle-left').on('click', function(){
        $('.nav').animate({left: '-70%'});
        if(isOpen){
            $('.accordion h2').next().slideUp();
            $('.accordion h2').data('open', 'false');
            isOpen = false;
        }
    });
    
    //accordion
    $('.accordion p').hide();
    $('.accordion h2').on('click', function(){
        //by not using string for compare, must typecast the isAccOpen value;
        var isAccOpen = ($(this).data('open') == true);
        if(!isAccOpen){
            $(this).next().slideDown();
            $(this).data('open', true);
            isOpen = true;
        } else{
            $(this).next().slideUp();
            $(this).data('open', false);
            isOpen = false;
        }
    });
});