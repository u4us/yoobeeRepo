$(function(){
    // scalable, ca add sections without needing to re-time

    // 1: plan and animate your scenes in autoplay -- usually in a timeline

    var tl = anime.timeline({
        easing: 'linear',
        autoplay: false
    }).add({
        targets: '.section2 .layer2',
        translateX: ['100vw',0]
    },1000).add({
        targets: '.section2 .layer3',
        translateX: ['-100vw',0]
    },3000).add({
        targets: '.section2 .layer4',
        translateY: ['-100vh',0]
    },5000).add({
        targets: '.section2 .layer5',
        translateY: ['100vh',0]
    },7000).add({
        targets: '.section2 .layer6',
        translateX: ['100vw',0],
        translateY: ['100vh',0]
    },9000)
    // 2: determine the amount of scroll length to unravel over
    // height is 100vh + 500vh, .section2: => 600vh

    // 3: Add translateY to move viewport along with your scrolling
    .add({
        targets: '.section2 .viewport',
        translateY: [0,'500vh'],
        duration: 10000
    },0);

    // duration is 10s
    console.log(tl.duration);
    
    var screenHeight = $(window).height();
    var s2 = $('.section2').offset().top;

    // 4: Map timeline to scroll length
    $(document).on('scroll', function(){
        var scrollTop = $(document).scrollTop();

        //scrollTop - reference / scrollLength
        var progress = (scrollTop - s2)/(screenHeight*5);
        tl.seek(tl.duration * progress);
    });
});
























