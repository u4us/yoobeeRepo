function changeColor(){
    this.parentNode.style.backgroundColor = this.value;
};

var textBox = document.querySelector('#textBox0');
textBox.addEventListener('blur', changeColor);

var textBox1 = document.querySelector('#textBox1');
textBox1.addEventListener('blur', changeColor);

