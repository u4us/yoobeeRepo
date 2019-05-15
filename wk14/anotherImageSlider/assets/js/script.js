//https://coolcarousels.frebsite.nl/c/71/

function moveNext(){
    var current = document.querySelector('.current');
    current.classList.remove('current');

    var old = document.querySelector('.old');
    old.classList.remove('old');

    var older = document.querySelector('.older');
    older.classList.remove('older');

    if(current.nextElementSibling != null){
        current.nextElementSibling.classList.add('current');
    }else{
        current.parentNode.firstElementChild.classList.add('current');
    }

    if(old.nextElementSibling != null){
        old.nextElementSibling.classList.add('old');
    }else{
        old.parentNode.firstElementChild.classList.add('old');
    }

    if(older.nextElementSibling != null){
        older.nextElementSibling.classList.add('older');
    }else{
        older.parentNode.firstElementChild.classList.add('older');
    }
};

function movePrev(){
    var current = document.querySelector('.current');
    current.classList.remove('current');

    var old = document.querySelector('.old');
    old.classList.remove('old');

    var older = document.querySelector('.older');
    older.classList.remove('older');

    if(current.previousElementSibling != null){
        current.previousElementSibling.classList.add('current');
    }else{
        current.parentNode.lastElementChild.classList.add('current');
    }

    if(old.previousElementSibling != null){
        old.previousElementSibling.classList.add('old');
    }else{
        old.parentNode.lastElementChild.classList.add('old');
    }

    if(older.previousElementSibling != null){
        older.previousElementSibling.classList.add('older');
    }else{
        older.parentNode.lastElementChild.classList.add('older');
    }
};

var right = document.querySelector('.fa-chevron-circle-right');
right.addEventListener('click', moveNext);

var left = document.querySelector('.fa-chevron-circle-left');
left.addEventListener('click', movePrev);
//assigning right images

// setInterval(moveNext, 5000);