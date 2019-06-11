// anime({
//     targets: '.things path',
//     strokeDashoffset: [anime.setDashoffset, 0],
//     easing: 'easeInOutSine',
//     duration: 1500,
//     delay: function(el, i) { return i * 250 },
//     direction: 'alternate',
//     loop: true
//   });

var tl = anime.timeline({
    easing: 'linear',
}).add({
    targets: '.things path',
    strokeDashoffset: [anime.setDashoffset, 0],
    duration: 1500,
}).add({
	targets: '.things path',
    fill: '#00ff00',
    duration: 1500,
})