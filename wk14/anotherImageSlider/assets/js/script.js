//https://coolcarousels.frebsite.nl/c/71/

function moveNext(){
    var current = document.querySelector('.current');
    current.classList.remove('current');

    if(current.nextElementSibling != null){
        current.nextElementSibling.classList.add('current');
    }else{
        current.parentNode.firstElementChild.classList.add('current');
    }
};

function movePrev(){

};

var right = document.querySelector('.fa-chevron-circle-right');
right.addEventListener('click', moveNext);

var left = document.querySelector('.fa-chevron-circle-left');
left.addEventListener('click', movePrev);
//assigning right images