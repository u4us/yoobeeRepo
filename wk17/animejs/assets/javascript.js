$(function(){

  var tl = anime.timeline({
    easing: 'linear',
    autoplay:false,

  });

  // Add children
  tl
  .add({
    targets: '.box:nth-child(-n+4)',
    translateX: ['200%',0],
    translateY: ['200%',0],
    opacity: [0,1],
    delay: anime.stagger(1000, {start: 0}),
    duration: 2000,
    // rotate: [anime.stagger([-180, 180], {grid: [3, 3], from: 'center'}),0],

  })
  .add({
    targets: '.box',
    translateX: [0,'-400%'],
    duration: 5000,
  })
  .add({
    targets: '.section2 .viewport',
    translateY: [0,'100vh'],
    duration: 5000,
  },'-=5000')
  .add({
    targets: '.box:nth-child(n+5)',
    scale:[1,2],
    opacity: [1,0],
    delay: anime.stagger(1000, {start: 0}),
    duration: 2000
  })


	var offset1 = $('.section1').offset().top;
	var offset2 = $('.section2').offset().top;
	var offset3 = $('.section3').offset().top;
	var offset4 = $('.section4').offset().top;
  var offset5 = $('.section5').offset().top;
  var offset6 = $('.section6').offset().top;
  var offset7 = $('.section7').offset().top;
  var offset8 = $('.section8').offset().top;
  var offset10 = $('.section10').offset().top;
  var screenHeight = offset2;

	$(document).on('scroll',function(){
		var scrollTop = $(document).scrollTop();

		

		var progress = scrollTop/(offset2*3);

		tl.seek(tl.duration * (progress));

		// var progress2 = (scrollTop-offset2)/offset2;
		// anime2.seek(anime2.duration * (progress2));

		// anime3.seek(anime2.duration * (progress2))
		

	});

  var tl2 = anime.timeline({
    easing: 'linear',
    autoplay:false,

  });

  // Add children
  tl2.add({
    targets: '.layer2',
    translateX: ['100%',0],
    translateY: ['100%',0],
    rotate: ['90deg','0deg'],
    duration: 2000,
  },1000)
  .add({
    targets: '.layer2 h1',
    translateX: ['-100vw',0],

    duration: 2000,
  },'-=2000')

  .add({
    targets: '.layer3',
    translateX: ['-100%',0],
    duration: 2000,
  },3000)
  .add({
    targets: '.layer3 h1',
    translateY: ['-100vh',0],

    duration: 2000,
  },'-=2000')

  .add({
    targets: '.layer4',
    // translateX: ['100%',0],
    translateY: ['-100%',0],
    duration: 2000,
  },6000)
  .add({
    targets: '.layer4 h1',
    translateX: ['100vw',0],
    rotate: ['180deg','0deg'],

    duration: 2000,
  },'-=2000')

  .add({
    targets: '.layer5',
    translateX: ['-100%',0],
    translateY: ['-100%',0],
    rotate: ['-90deg','0deg'],
    duration: 2000,
  },9000)
  .add({
    targets: '.layer5 h1',
    translateX: ['-100vw',0],
    translateY: ['100vh',0],
    duration: 2000,
  },'-=2000')

  .add({
    targets: '.layer6',
    translateY: ['-100%',0],
    duration: 2000,
  },12000)
  .add({
    targets: '.layer6 h1',
    translateX: ['-100vw',0],
  
    duration: 2000,
  },'-=2000')


  .add({
    targets: '.section4 .viewport',
    translateY: [0,'900vh'],
    duration: 14000,
  },0)


  $(document).on('scroll',function(){
    var scrollTop = $(document).scrollTop();

    var progress = (scrollTop-offset4)/(screenHeight*9);

    tl2.seek(tl2.duration * progress);


  });


  var tl3 = anime.timeline({
    easing: 'linear',
    autoplay:false,

  });

  // Add children
  tl3.add({
    targets: '.page1',
    rotateY: ['0deg','-180deg'],
    duration: 1000,
  },0)
  .add({
    targets: '.page2',
    rotateY: ['-180deg','-360deg'],
    duration: 1000,
  },0)
    .add({
      targets: '.page2 h1',
      translateY: ['-50vh',0],
      duration: 2000,
    },'-=1000')
    .add({
      targets: '.page3 h1',
      translateY: ['50vh',0],
      duration: 2000,
    },'-=2000')

  tl3.add({
    targets: '.page3',
    rotateY: ['0deg','-180deg'],
    duration: 1000,
  },3000)

  .add({
    targets: '.page4',
    rotateY: ['-180deg','-360deg'],
    duration: 1000,
  },3000)
    .add({
      targets: '.page4 h1',
      translateX: ['-50vw',0],
      duration: 2000,
    },'-=1000')
    .add({
      targets: '.page5 h1',
      translateX: ['50vw',0],
      duration: 2000,
    },'-=2000')

  tl3.add({
    targets: '.page5',
    rotateY: ['0deg','-180deg'],
    duration: 1000,
  },6000)
  .add({
    targets: '.page6',
    rotateY: ['-180deg','-360deg'],
    duration: 1000,
  },6000)
    .add({
      targets: '.page6 h1',
      rotate: ['-90deg',0],
      duration: 2000,
    },'-=1000')
    .add({
      targets: '.page7 h1',
      rotate: ['90deg',0],
      duration: 2000,
    },'-=2000')

  tl3.add({
    targets: '.page7',
    rotateY: ['0deg','-180deg'],
    duration: 1000,
  },9000)
  .add({
    targets: '.page8',
    rotateY: ['-180deg','-360deg'],
    duration: 1000,
  },9000)
    .add({
      targets: '.page8 h1',
      translateY: ['-50vh',0],
      translateX: ['-50vw',0],
      duration: 2000,
    },'-=1000')
    .add({
      targets: '.page9 h1',
      translateY: ['50vh',0],
      translateX: ['50vw',0],
      duration: 2000,
    },'-=2000')

  tl3.add({
    targets: '.page9',
    rotateY: ['0deg','-180deg'],
    duration: 1000,
  },12000)
  .add({
    targets: '.page10',
    rotateY: ['-180deg','-360deg'],
    duration: 1000,
  },12000)
    .add({
      targets: '.page10 h1',
      scale: [2,1],
      duration: 2000,
    },'-=1000')
    .add({
      targets: '.page11 h1',
      scale: [0,1],
      duration: 2000,
    },'-=2000')

  tl3.add({
    targets: '.page11',
    rotateY: ['0deg','-180deg'],
    duration: 1000,
  },15000)
  .add({
    targets: '.page12',
    rotateY: ['-180deg','-360deg'],
    duration: 1000,

    complete:function(){
      $('.page12 h1').addClass('tada').one('animationend',function(){
        $(this).removeClass('tada');
      })
    }
  },15000)


  .add({
    targets: '.section6 .viewport',
    translateY: [0,'500vh'],
    duration: 16000,
  },0)




  $(document).on('scroll',function(){
    var scrollTop = $(document).scrollTop();

    var progress = (scrollTop-offset6)/(screenHeight*5);

    tl3.seek(tl3.duration * progress);


  });


  var tl4 = anime.timeline({
    easing: 'linear',
    autoplay:false,

  });

  // Add children
  tl4.add({
    targets: '.slide1',
    translateY: ['0','-100vh'],
    duration: 2000,
  },0)
  .add({
    targets: '.slide1 h1',
    translateY: ['0','100vh'],
    duration: 2000,
  },0)

  tl4.add({
    targets: '.slide2',
    translateX: ['0','-100vw'],
    duration: 2000,
  },3000)
  .add({
    targets: '.slide2 h1',
    translateX: ['0','100vw'],
    duration: 2000,
  },3000)

  tl4.add({
    targets: '.slide3',
    translateY: ['0','100vh'],
    duration: 2000,
  },6000)
  .add({
    targets: '.slide3 h1',
    translateY: ['0','-100vh'],
    rotate:['0','360deg'],
    duration: 2000,
  },6000)
  .add({
    targets: '.slide4 h1',
    rotate:['0','360deg'],
    duration: 2000,
  },6000)
  .add({
    targets: '.section8 .viewport',
    translateY: [0,'400vh'],
    duration: 8000,
  },0)

  $(document).on('scroll',function(){
    var scrollTop = $(document).scrollTop();

    var progress = (scrollTop-offset8)/(screenHeight*4);

    tl4.seek(tl4.duration * progress);


  });

  var tl5 = anime.timeline({
    easing: 'linear',
    autoplay:false,

  })
  .add({
    targets: '.scene',
    translateZ: function(el,i,l){
      return [(-i*50)+'vw',((l-i-2)*50)+'vw'];
    },
    duration:function(el,i,l){
      return l*500;
    }
  },0)
  .add({
    targets: '.ground',
    translateZ: [0,'500vh'],
    rotateX: ['90deg','90deg'],
    duration:5000,
  },0)
    .add({
    targets: '.section10 .viewport',
    translateY: [0,'500vh'],
    duration: 6000,
  },0);

  $(document).on('scroll',function(){
    var scrollTop = $(document).scrollTop();

    var progress = (scrollTop-offset10)/(screenHeight*5);

    tl5.seek(tl5.duration * progress);

  });


   $(document).on('mousemove',_.throttle(function(e){
        var xCord = e.clientX;
        var yCord = e.clientY;

        var xPercent = (100-(xCord / $(window).width() * 100))+'%';
        var yPercent = (100-(yCord / $(window).height() * 100))+'%';
        $('.scenes').css('perspective-origin',xPercent+ ' ' +yPercent);
       
    },1000));
 

});
























