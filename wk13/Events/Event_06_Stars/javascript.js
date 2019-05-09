function makeStars(iNum){
	var sStars = "";
	for(var iCount=0; iCount<iNum; iCount++){
		sStars += "*";
	}
	return sStars;//string of stars
}

//---------------------------------------------


function drawStars(){
	console.log('event handler hooked up');

	var box = document.querySelector('#box');
	var stars = document.querySelector('#stars');

	console.log(box.value);

	document.getElementById(box.value).innerHTML = makeStars(Number(stars.value));
	//querySelector('#'+box.value)
}

var draw = document.querySelector('#draw');
draw.addEventListener('click', drawStars);
