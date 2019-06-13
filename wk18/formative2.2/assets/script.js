var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);

$(function(){
    
    var tl1 = anime.timeline({
        easing: 'linear',
        autoplay: false
    })
    .add({
        targets: '.section1 .layer5',
        translateX: ['100vw','-50vw']
    },500)
    .add({
        targets: '.section1 .layer6',
        translateX: ['100vw','-50vw']
    },1000)
    .add({
        targets: '.section1 .layer7',
        translateX: ['100vw','-50vw']
    },1500)
    .add({
        targets: '.section1 .layer8',
        translateX: ['100vw','-100vw']
    },3000)
    .add({
        targets: '.section1 .layer9',
        translateY: ['-100vh',0]
    },3500)
    .add({
        targets: '.section1 .viewport',
        translateY: [0,'1000vh'],
        duration: 4500
    },0);

    console.log(tl1.duration);

    var screenHeight = $(window).height();
    var section1Offset = $('.section1').offset().top;
    $(document).on('scroll', function(){
        var scrollTop = $(document).scrollTop();
        var progress = (scrollTop-section1Offset)/(screenHeight*10);
        tl1.seek(tl1.duration*progress);
    });

    $('[data-target]').on('click', function(){
        $($(this).data('target')).addClass('animated swing');
        $($(this).data('target')).one('animationend', function(){
            $(this).removeClass('swing').addClass('invisible');
        });
    });
});