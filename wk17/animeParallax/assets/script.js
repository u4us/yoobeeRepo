$(function(){
    //parallax perception, where reference is scroll speed, and reduce the scroll distance the further the object

    //can animate outside jquery

    var anime1 = anime({
        targets: '.section1 .layer',
        translateY: function(el,i,l){
            return (l-i) * 50;
        },
        easing: 'linear',
        duration: 2000,
        autoplay:false
    });

    //text
    var anime2 = anime({
        targets: '.layer2 h1',
        scale: [2,1],
        opacity: [0,1],
        easing: 'linear',
        duration: 2000,
        autoplay: false,
    });
    
    $(document).on('scroll', function(){
        var scrollTop = $(document).scrollTop();
        var progress = (scrollTop - 0)/500;
        anime1.seek(anime1.duration * progress);

        var progress2 = (scrollTop - 0)/300;
        anime2.seek(anime2.duration * progress2);
    });
});
 





