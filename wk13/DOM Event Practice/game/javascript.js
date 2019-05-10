function changeColor(){
    var box = document.querySelector('#box0');
    box.style.backgroundColor = 'red';
};

var box = document.querySelector('#box0');
box.addEventListener('click', changeColor);

function changeColorBlue(){
    var box = document.querySelector('#box1');
    box.classList.toggle('blueBackground');
}

var box1 = document.querySelector('#box1');
box1.addEventListener('click',changeColorBlue);

