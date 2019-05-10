function changeColorBox(){
	this.style.backgroundColor = this.children[0].innerHTML;
	
	var input = this.children[1];
	if (input.value == this.children[0].innerHTML) {
		this.style.border = 'thick green solid';
		score++;
	} else{
		this.style.border = 'thick red solid';
	}

	var iscore = document.querySelector('#score');
	iscore.innerHTML = score
}	

//----------Main program

var score = 0; //global variable

var container = document.querySelector('#container');
var boxes = container.children;

for (let i = 0; i < boxes.length; i++) {
	boxes[i].addEventListener('click',changeColorBox);
};

