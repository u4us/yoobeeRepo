function changeText(){
    var name = document.querySelector('.content').children[0];
    var nameInput = document.querySelector('#name');
    name.innerHTML = nameInput.value;

    var position = document.querySelector('.content').children[1];
    var positionInput = document.querySelector('#position');
    position.innerHTML = positionInput.value;
};

var submit = document.querySelector('#submit');
submit.addEventListener('click', changeText);