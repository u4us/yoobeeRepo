$(function(){

    var tl = anime.timeline({
        easing: 'linear',
        autoplay: false
    }).add({
        targets: '.section1 .layer',
        translateY: function(el,i,l){
            return [i*10,0];
        }
        // translateZ: function(el,i,l){
        //     return [(i-l)*10+'vh',0];
        //     // add perspective onto the viewport
        // }
    }).add({
        targets: '.section1 .viewport',
        translateY: [0,'100vh'],
        //animation length; console.log
        duration: 1000
    },0);

    var screenHeight = $(window).height();
    $(document).on('scroll', function(){
        var scrollTop = $(document).scrollTop();
        var progress = (scrollTop-0)/screenHeight;
        tl.seek(tl.duration * progress);
    });
});
 





