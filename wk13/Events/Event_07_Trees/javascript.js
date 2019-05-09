function makeStars(iNum){
	var sStars = "";
	for(var iCount=0; iCount<iNum; iCount++){
		sStars += "*";
	}
	return sStars;//string of stars
}

function makeTree(iHeight){
	var sTree = "";

	for(var iCount=1; iCount<=iHeight;iCount++){
		sTree += makeStars(iCount) + "<br />";
	}
	sTree += makeStars(1);
	return sTree;
}


//---------------------------------------------


function drawTree(){
	var box = document.querySelector('#box');
	var treeColor = document.querySelector('#color');
	document.getElementById(box.value).innerHTML = makeTree(treeSize.value);
	document.getElementById(box.value).style.color = treeColor.value;
};

var treeSize = document.querySelector('#treeSize');
var draw = document.querySelector('#draw');
draw.addEventListener('click', drawTree);