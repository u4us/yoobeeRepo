$(function(){

    //sticky menu
    var menuOffsetTop = $('.pure-menu-horizontal').offset().top;
    $(document).on('scroll', function(){
        var scrollTop = $(document).scrollTop();
        if(scrollTop >= menuOffsetTop){
            $('.pure-menu-horizontal').addClass('fixed');
        } else{
            $('.pure-menu-horizontal').removeClass('fixed');
        }
    });

    //highlighting sections
    var offset1 = $('.section1').offset().top;
    var offset2 = $('.section2').offset().top;
    var offset3 = $('.section3').offset().top;
    var offset4 = $('.section4').offset().top;
    $(document).on('scroll', function(){
        var scrollTop = $(document).scrollTop();
        
        var activeLi;
        if(scrollTop >= offset1 && scrollTop <offset2){
            activeLi = $('ul>li:nth-child(1)');
        }
        if(scrollTop >= offset2 && scrollTop <offset3){
            activeLi = $('ul>li:nth-child(2)');
        }
        if(scrollTop >= offset3 && scrollTop <offset4){
            activeLi = $('ul>li:nth-child(3)');
        }
        if(scrollTop >= offset4){
            activeLi = $('ul>li:nth-child(4)');
        }
        activeLi.addClass('active');
        $('ul>li').not(activeLi).removeClass('active');

        // switch(true){
        //     case scrollTop >= offset1 && scrollTop <offset2:
        //         activeLi = $('ul>li:nth-child(1)');
        //     break;
        //     case scrollTop >= offset2 && scrollTop <offset3:
        //         activeLi = $('ul>li:nth-child(2)');
        //     break;
        //     case scrollTop >= offset3 && scrollTop <offset4:
        //         activeLi = $('ul>li:nth-child(3)');
        //     break;
        //     case scrollTop >= offset4:
        //         activeLi = $('ul>li:nth-child(4)');
        //     break;
        // }
        // activeLi.addClass('active');
        // $('ul>li').not(activeLi).removeClass('active');
    });

    //smooth scrolling
    $('[data-to]').on('click', function(e){
        //prevent hopping between pages on click; or use empty '#'
        e.preventDefault();

        var sSection = $(this).data('to');
        var sectionOffset = $(sSection).offset().top + 2;
        $('html, body').animate({scrollTop: sectionOffset}, 1000);
    });

    //bonus
    $(document).on('scroll', function(){

        var scrollTop = $(document).scrollTop();

        //function(index 0, element @ index){}
        $('h1.animated').each(function(i, el){

            //offset is calculated for every heading
            var headingOffset = $(el).offset().top;

            if(scrollTop > headingOffset - 300){
                $(el).parent().addClass('grow');
                $(this).addClass('slideInLeft');
                $(this).addClass('show');
            } else{
                //rollback
                $(el).parent().removeClass('grow');
                $(this).removeClass('slideInLeft');
                $(this).removeClass('show');
            }
        });
    });
});
