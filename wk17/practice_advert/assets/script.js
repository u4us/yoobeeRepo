$(function(){
    var timeline = anime.timeline({
        duration: 3000,
        easing: 'linear',

    });

    timeline.add({
        targets: '.motion1 .someBox',
        translateX: ['250']
    }).add({
        targets: '.motion1 .someBox',
        translateY: ['250']
    }).add({
        targets: '.motion1 .someBox',
        translateX: ['250', 0]
    }).add({
        targets: '.motion1 .someBox',
        translateY: ['250', 0]
    });
});