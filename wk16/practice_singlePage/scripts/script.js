$(function(){


    //highlight
    var offset1 = $('.section1').offset().top;
    var offset2 = $('.section2').offset().top;
    var offset3 = $('.section3').offset().top;
    var offset4 = $('.section4').offset().top;
    var offset5 = $('.section5').offset().top;
    // var activeList = [];
    $(document).on('scroll', function(){
        var scrollTop = $(document).scrollTop();
        var activeList;
        if(scrollTop >= offset1 && scrollTop < offset2){
            // activeList.add($('ul>li:nth-child(1)'));
            activeList = ($('ul>li:nth-child(1)'));
        }
        if(scrollTop >= offset2 && scrollTop < offset3){
            activeList = ($('ul>li:nth-child(2)'));
        }

        if(scrollTop >= offset3 && scrollTop < offset4){
            activeList = ($('ul>li:nth-child(3)'));
        }

        if(scrollTop >= offset4 && scrollTop < offset5){
            activeList = ($('ul>li:nth-child(4)'));
        }
        if(scrollTop >= offset5){
            activeList = ($('ul>li:nth-child(5)'));
        }

        // activeList.each().addClass('active');
        activeList.addClass('active');
        $('ul>li').not(activeList).removeClass('active');
        // console.log($(document).height()-$(window).height());


        //scrollable height = $(document).height()-$(window).height()
        var progress = scrollTop/10;
        $('.progress').css('width',progress+'%');

    });

    //jumpto
    $('[data-to]').on('click', function(e){
        e.preventDefault();
        var section = $(this).data('to');
        var sectionOffset = $(section).offset().top+1;
        $('html,body').animate({scrollTop:sectionOffset});
    });
});