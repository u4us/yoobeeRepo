$(function(){
    var tl1 = anime.timeline({
        easing: 'linear',
        autoplay: false
    }).add({
        targets: '.section1 .layer5',
        translateX: ['100vw',0]
    });

    var screenHeight = $(window).height();
    var section1Offset = $('.section1').offset().top;
    $(document).on('scroll', function(){
        var scrollTop = $(document).scrollTop();
        var progress = (scrollTop-section1Offset)/(screenHeight*5);
        tl1.seek(tl1.duration*progress);
    });
});