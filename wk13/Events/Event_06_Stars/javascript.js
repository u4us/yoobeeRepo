function makeStars(iNum){
	var sStars = "";
	for(var iCount=0; iCount<iNum; iCount++){
		sStars += "*";
	}
	return sStars;//string of stars
}

//---------------------------------------------


function drawStars(){
	var box = document.querySelector('#box');
	document.getElementById(box.value).innerHTML = makeStars(Number(stars.value));
}
var stars = document.querySelector('#stars');
var draw = document.querySelector('#draw');
draw.addEventListener('click', drawStars);
