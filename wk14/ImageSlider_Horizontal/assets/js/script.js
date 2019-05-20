function moveNext(){

	iCurrent++;

	if(iCurrent >= iTotal){
		iCurrent = 0;

		var oSlides = document.querySelector('.active');
		oSlides.style.left = (iTotal*(-100)) + '%';
		oSlides.classList.remove('active');
		oSlides.nextElementSibling.classList.add('active');
	}

	updateStage();
	prepareStage();

	var oCurrentDot = document.querySelector('.current-dot');
	oCurrentDot.classList.remove('current-dot');
	if(oCurrentDot.nextElementSibling != null){
		oCurrentDot.nextElementSibling.classList.add('current-dot');
	}else{
		oCurrentDot.parentNode.firstElementChild.classList.add('current-dot');
	}

}

function movePrevious(){
	iCurrent--;
	if(iCurrent < 0){
		iCurrent = iTotal-1;

		var oSlides = document.querySelector('.active');
		oSlides.style.left ='100%';
		oSlides.classList.remove('active');
		oSlides.previousElementSibling.classList.add('active');
	
	}

	prepareStage();
	updateStage();

	var oCurrentDot = document.querySelector('.current-dot');
	oCurrentDot.classList.remove('current-dot');
	if(oCurrentDot.previousElementSibling != null){
		oCurrentDot.previousElementSibling.classList.add('current-dot');
	}else{
		oCurrentDot.parentNode.lastElementChild.classList.add('current-dot');
	}

}

function moveTo(){

	iCurrent = parseInt(this.dataset.index);
	var oCurrentDot = document.querySelector('.current-dot');
	oCurrentDot.classList.remove('current-dot');
	this.classList.add('current-dot');

	updateStage()
	prepareStage();

}

function prepareStage(){
	var oSlides = document.querySelector('.active');
	if(iCurrent == iTotal-1){
		if(oSlides.nextElementSibling == null){
			var clone = oSlides.cloneNode(true);
			clone.style.left = '100%';
			clone.classList.remove('active');
			oSlides.parentNode.append(clone);
		}
	}
	if(iCurrent == 0){
		if(oSlides.previousElementSibling == null){
			var clone = oSlides.cloneNode(true);
			clone.style.left = (iTotal*(-100)) + '%';
			clone.classList.remove('active');
			oSlides.parentNode.prepend(clone);
		}
	}
}

function updateStage(){
	var oSlides = document.querySelector('.active');
	var sOffset = (iCurrent*(-100)) + '%';
	oSlides.style.left = sOffset;
}

//-----main body
var iTotal = 4;
var iCurrent = 0;

prepareStage();

var oRight = document.querySelector('.fa-chevron-circle-right');
oRight.addEventListener('click',moveNext);

var oLeft = document.querySelector('.fa-chevron-circle-left');
oLeft.addEventListener('click',movePrevious);

var oDots = document.querySelector('.dots');
for (var i = 0; i < oDots.children.length; i++) {
	oDots.children[i].addEventListener('click',moveTo);
}








