function show(){
    //slides
    var currentSlide = document.querySelector('.current');
    currentSlide.classList.remove('current');

    var targetSlide = document.querySelector(this.dataset.target);
    targetSlide.classList.add('current');

    //triangles
    var currentTriangle = document.querySelector('.current-triangle');
    currentTriangle.classList.remove('current-triangle');

    var targetTriangle = document.querySelector(this.dataset.triangle);
    targetTriangle.classList.add('current-triangle');
    //action
    var aTriangle = document.querySelector('.triangles').children[0];
    aTriangle.className = 'triangle';

    var targetAction = document.querySelector(this.dataset.action);
    document.querySelector('.triangle').classList.add(targetAction);

    //sidebar
    var currentItem = document.querySelector('.current-item');
    currentItem.classList.remove('current-item');
    this.classList.add('current-item');


}

function moveNext(){
    var current = document.querySelector('.current');
	current.classList.remove('current');
	if(current.nextElementSibling != null){
		current.nextElementSibling.classList.add('current');
	}else{
		current.parentNode.firstElementChild.classList.add('current');
	}

    var currentItem = document.querySelector('.current-item');
    currentItem.classList.remove('current-item');
    if(currentItem.nextElementSibling != null){
		currentItem.nextElementSibling.classList.add('current-item');
	}else{
		currentItem.parentNode.firstElementChild.classList.add('current-item');
	}
}

var items = document.querySelector('.sidebar').children;
for (let i = 0; i < items.length; i++) {
    items[i].addEventListener('click',show);
}

// setInterval(moveNext, 5000);