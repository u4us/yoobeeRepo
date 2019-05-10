function changeColor(){
    var input = this.children[1];
    this.style.backgroundColor = input.value;
}

var container = document.querySelector('.container');
var boxes = container.children;

for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('keypress', changeColor);
}