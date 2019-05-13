

function changeCard(){
    
    var cardLeftFront = document.querySelector('.card-left-front');

    var image = document.querySelector('#background-image');
    cardLeftFront.style.backgroundImage = image.value;
       


    var cardLeftBack = document.querySelector('.card-left-back');

    var colour = document.querySelector('#background-colour');
    // cardLeftBack.style.backgroundColor = colour.value;
    // cardLeftBack.classList.add() = ('card-left-back' + colour.value);
    cardLeftBack.dataset.color = colour.value;
    console.log(cardLeftBack.classList);

    var font = document.querySelector('#font-family');
    cardLeftBack.style.fontFamily = font.value;

    var text = document.querySelector('#text');
    cardLeftBack.children[0].innerHTML = text.value;

};

var submit = document.querySelector('#submit');
submit.addEventListener('click', changeCard);

// var settings = document.querySelector('.settings').children;
// for (let i = 0; i < settings.length; i++) {
//     settings[i].addEventListener('click', changeCard);  
// }

// problems
// by not using classList, only able to change one property