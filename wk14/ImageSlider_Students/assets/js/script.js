function moveNext(){
    console.log('but where will it take me? on...');

    var current = document.querySelector('.current');
    current.classList.remove('current');
    
    if(current.nextElementSibling != null){
        current.nextElementSibling.classList.add('current');
    } else{
        current.parentNode.firstElementChild.classList.add('current');
    }
}

function movePrev(){
    var current = document.querySelector('.current');
    current.classList.remove('current');

    if(current.previousElementSibling != null){
        current.previousElementSibling.classList.add('current');
    } else{
        current.parentNode.lastElementChild.classList.add('current')
    }
}

var right = document.querySelector('.image-slider .fa-chevron-circle-right');
//make sure to target correct chevron
right.addEventListener('click', moveNext);

var left = document.querySelector('.fa-chevron-circle-left');
left.addEventListener('click',movePrev);

setInterval(moveNext, 3000);