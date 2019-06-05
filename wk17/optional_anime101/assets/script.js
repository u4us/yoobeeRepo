$(function(){
    //json
    //imperative ct. declarative
    //jquery is not required for anime.js

    // var anime1 = anime({
    //     targets: '.section2 label',

    //     // duration for different effects notation
    //     // translateX:{
    //     //     value: ['-50vw', 0],
    //     //     delay: anime.stagger(300),
    //     //     duration: 3000,
    //     //     easing: 'easeInOutQuart'
    //     // },
    //     translateX: ['-50vw', 0],
    //     opacity: [0,1],

    //     // rotate:{
    //     //     value: ['180deg','0deg'],
    //     //     delay: anime.stagger(300),
    //     //     duration: 5000,
    //     // }
    //     rotate: ['180deg','0deg'],
        
    //     //delay: function(el,i,l){return i*300}
    //     //either use data-type="300", or anime.stagger()
    //     delay: anime.stagger(300),
    //     duration: 3000,
    //     easing: 'easeInOutQuart',
    //     autoplay: false
    // });

    // var anime2 = anime({
    //     targets: '.section2 input',
    //     translateX: ['-50vw', 0],
    //     opacity: [0,1],
    //     delay: anime.stagger(300),
    //     duration: 3000,
    //     easing: 'easeInOutQuart',
    //     autoplay: false
    // });

    // var anime3 = anime({
    //     targets: '.section2 .btn',
    //     scale: [2,1],
    //     backgroundColor: ['#FFF', '#f00'],
    //     duration: 3000,
    //     direction: 'alternate',
    //     loop: true,
    //     autoplay: false
    // });

    //common properties among animations
    var timeline = anime.timeline({
        duration: 3000,
        easing: 'easeInOutQuart',

        autoplay: false
    });

    //to initiate sequentially
    timeline.add({
        targets: '.section2 label',
        translateX: ['-50vw', 0],
        opacity: [0,1],
        delay: anime.stagger(300),
    }).add({
        targets: '.section2 input',
        translateX: ['-50vw', 0],
        opacity: [0,1],
        delay: anime.stagger(300),
    //time offset, to start simultaneously at the beginning of time    
    },0).add({
        targets: '.section2 .btn',
        scale: [2,1],
        opacity: [0,1]
    }, '-=1000');

    timeline.seek();

    console.log(timeline.duration *0.5);

    //how section2 is from the top of the document :yes
    var section2Offset = $('.section2').offset().top;

    $(document).on('scroll', function(){
        //how far down you have scrolled
        var scrollTop = $(document).scrollTop();

        // if(scrollTop >= section2Offset){
        //     anime1.play();
        //     anime2.play();
        // }

        // $(document).height()-$(window).height()
        var progress = (scrollTop-section2Offset+500)/500;
        timeline.seek(timeline.duration*progress);
        console.log(scrollTop);
    });
});


