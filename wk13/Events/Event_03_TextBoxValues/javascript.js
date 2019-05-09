
function changeColor(){

    var textBox = document.querySelector('#textBox0');
    var box = document.querySelector('#box0');
    box.style.backgroundColor = textBox.value;

}

var box = document.querySelector('#box0');
box.addEventListener('keypress',changeColor);

function changeColor(){

    var textBox = document.querySelector('#textBox1');
    textBox.parentNode.style.backgroundColor = textBox.value;

}

var box1 = document.querySelector('#box1');
box1.addEventListener('keypress',changeColor);