function updateStage(){
	var offset = (current*(-100))+'%';
	var slides = document.querySelector('.slides');
	slides.style.left = offset;
}

function moveNext(){
	current++;
	if(current >= total) {
		current = total - 1;
	}
	
	updateStage();

	var dot = document.querySelector('.current-dot');
	if(dot.nextElementSibling != null){
		dot.classList.remove('current-dot');
		dot.nextElementSibling.classList.add('current-dot');
	}
	
}

function movePrev(){
	current--;
	if(current < 0) {
		current = 0;
	}

	updateStage();

	var dot = document.querySelector('.current-dot');
	if(dot.previousElementSibling != null){
		dot.classList.remove('current-dot');
		dot.previousElementSibling.classList.add('current-dot');
	}
}

function moveTo(){
	current = parseInt(this.dataset.index);
	updateStage();

	var currentDot = document.querySelector('.current-dot');
	currentDot.classList.remove('current-dot');
	this.classList.add('current-dot');
}

//global variable to track current
var current = 0;
//total amount of slides
var total = 4;

var right = document.querySelector('.fa-chevron-circle-right');
right.addEventListener('click', moveNext);

var left = document.querySelector('.fa-chevron-circle-left');
left.addEventListener('click', movePrev);

//all
var dots = document.querySelectorAll('.dot');
for (let i = 0; i < dots.length; i++) {
	dots[i].addEventListener('click', moveTo);	
}