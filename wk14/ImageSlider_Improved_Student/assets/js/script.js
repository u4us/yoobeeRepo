function moveNext(){

	var oCurrent = document.querySelector('.current');
	oCurrent.classList.remove('current');

	if(oCurrent.nextElementSibling != null){
		oCurrent.nextElementSibling.classList.add('current');
	}else{
		oCurrent.parentNode.firstElementChild.classList.add('current');
	}

	var currentDot = document.querySelector('.current-dot');
	currentDot.classList.remove('current-dot');

	if(currentDot.nextElementSibling != null){
		currentDot.nextElementSibling.classList.add('current-dot');
	}else{
		currentDot.parentNode.firstElementChild.classList.add('current-dot');
	}

}

function movePrevious(){
	var oCurrent = document.querySelector('.current');
	oCurrent.classList.remove('current');

	if(oCurrent.previousElementSibling != null){
		oCurrent.previousElementSibling.classList.add('current');
	}else{
		oCurrent.parentNode.lastElementChild.classList.add('current');
	}

	var currentDot = document.querySelector('.current-dot');
	currentDot.classList.remove('current-dot');

	if(currentDot.previousElementSibling != null){
		currentDot.previousElementSibling.classList.add('current-dot');
	}else{
		currentDot.parentNode.lastElementChild.classList.add('current-dot');
	}

}

function moveTo(){

	//slide
	var oCurrent = document.querySelector('.current');
	oCurrent.classList.remove('current');

	var sTarget = this.dataset.target;
	var oTarget = document.querySelector(sTarget);
	oTarget.classList.add('current');
	
	//dot
	var currentDot = document.querySelector('.current-dot');
	currentDot.classList.remove('current-dot');

	this.classList.add('current-dot');
}

var oRight = document.querySelector('.fa-chevron-circle-right');
oRight.addEventListener('click',moveNext);

var oLeft = document.querySelector('.fa-chevron-circle-left');
oLeft.addEventListener('click',movePrevious);

var dots = document.querySelector('.dots');
for (let i = 0; i < dots.children.length; i++) {
	dots.children[i].addEventListener('click', moveTo);
}








