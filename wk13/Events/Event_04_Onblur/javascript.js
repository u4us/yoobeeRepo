function changeColor(){
    var textBox = document.querySelector('#textBox0');
    textBox.parentNode.style.backgroundColor = textBox.value;
};

var textBox = document.querySelector('#textBox0');
textBox.addEventListener('blur', changeColor);

function changeColor1(){
    var textBox1 = document.querySelector('#textBox1');
    textBox1.parentNode.style.backgroundColor = textBox1.value;
};

var textBox1 = document.querySelector('#textBox1');
textBox1.addEventListener('blur', changeColor1);