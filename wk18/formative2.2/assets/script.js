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
        if($($(this).data('target')).hasClass('current')){
            $($(this).data('target')).removeClass('current');
            $('.nav').children().removeClass('highlight');
        } else{
            $('.nav').children().removeClass('highlight');
            $(this).addClass('highlight');
            $('.panel').removeClass('current');
            $($(this).data('target')).addClass('current');
        }
    });
});

dragElement(document.querySelector('#test'));
dragElement(document.querySelector('#test2'));
dragElement(document.querySelector('#test3'));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}