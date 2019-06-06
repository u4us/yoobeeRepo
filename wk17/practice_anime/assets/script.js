$(function(){
    var timeline = anime.timeline({
        duration: 3000,
        easing: 'easeInOutQuart',
    });

    timeline.add({
        targets: '.section1 .card1',
        translateX: ['-50vw', 0],
    })
    .add({
        targets: '.section1 .card2',
        translateX: ['50vw', 0],
    }, '-=3000')
    .add({
        targets: '.section1 .jumbotron',
        translateY: ['-50vh', 0],
    }, '-=2500')

    var timeline2 = anime.timeline({
        duration: 3000,
        easing: 'linear',
        autoplay: false
    });

    timeline2.add({
        targets: '.section2 .card1',
        translateX: ['-50vw', 0],
    })
    .add({
        targets: '.section2 .card2',
        translateX: ['50vw', 0],
    }, '-=3000')
    .add({
        targets: '.section2 .jumbotron',
        opacity: [0,1],
    }, '-=2500')

    $(document).on('scroll', function(){
        var scrollTop = $(document).scrollTop();
        var progress = (scrollTop-400)/400;
        timeline2.seek(timeline2.duration * progress);
    });
});