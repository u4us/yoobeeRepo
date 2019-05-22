
function moveNext(){
    var current = document.querySelector('.current');
    current.classList.remove('current');
    if(current.nextElementSibling != null){
        current.nextElementSibling.classList.add('current');
    } else{
        current.parentNode.firstElementChild.classList.add('current');
    }
    
};

function movePrev(){
    var current = document.querySelector('.current');
    current.classList.remove('current');
    if(current.previousElementSibling != null){
        current.previousElementSibling.classList.add('current');
    } else{
        current.parentNode.lastElementChild.classList.add('current');
    }
};

document.querySelector('.fa-chevron-right').addEventListener('click', moveNext);
document.querySelector('.fa-chevron-left').addEventListener('click', movePrev);


//on keydown, update card display


function updateNumber(){
    var temp = document.querySelectorAll('.displayCreditNumber');
    for (let i = 0; i < temp.length; i++) {
        temp[i].innerHTML = this.value;
    }
}

document.querySelector('#credit').addEventListener('keyup', updateNumber);


function updateName(){
    var temp = document.querySelectorAll('.displayName');
    for (let i = 0; i < temp.length; i++) {
        temp[i].innerHTML = this.value;
    }
}

document.querySelector('#name').addEventListener('keyup', updateName);

function updateExpiry(){
    var temp = document.querySelectorAll('.displayExpiry');
    for (let i = 0; i < temp.length; i++) {
        temp[i].innerHTML = this.value;
    }
}

document.querySelector('#expiry').addEventListener('change', updateExpiry);

function updateCvv(){
    var temp = document.querySelectorAll('.displayCvv');
    for (let i = 0; i < temp.length; i++) {
        temp[i].innerHTML = this.value;
    }
}

document.querySelector('#cvv').addEventListener('keyup', updateCvv);

//on blur, validate

function checkNumeric(){

    var isValid = false;

    var sValue = this.value;
    if(sValue == ''){
        this.nextElementSibling.innerHTML = 'Field cannot be empty';
        this.nextElementSibling.className = 'incorrect';
    } else{
        var oAphabeticExp = /^[0-9]*$/;
        var bTest = oAphabeticExp.test(sValue);
        if(!bTest){
            this.nextElementSibling.innerHTML = 'Numbers only';
            this.nextElementSibling.className = 'incorrect';
        } else{
            this.nextElementSibling.innerHTML = 'Thanksss';
            this.nextElementSibling.className = 'correct';

            isValid = true;
        }
    }

    return isValid;
}

var creditNumber = document.querySelector('#credit');
creditNumber.addEventListener('blur', checkNumeric);

// function checkFilled(){

//     var isValid = false;

//     var sValue = this.value;
//     if(sValue == ''){
//         this.nextElementSibling.innerHTML = 'incorrect chars';
//         this.nextElementSibling.className = 'message-error';
//     } else{
//         this.nextElementSibling.innerHTML = 'Thanksss';
//         this.nextElementSibling.className = 'message-success';

//         isValid = true;
//     }

//     return isValid;
// }

// function checkAlphabetic(){

//     var isValid = false;

//     var sValue = this.value;
//     if(sValue == ''){
//         this.nextElementSibling.innerHTML = 'incorrect chars';
//         this.nextElementSibling.className = 'message-error';
//     } else{
//         var oAphabeticExp = /^[A-Za-z]*$/;
//         var bTest = oAphabeticExp.test(sValue);
//         if(!bTest){
//             this.nextElementSibling.innerHTML = 'letters only';
//             this.nextElementSibling.className = 'message-error';
//         } else{
//             this.nextElementSibling.innerHTML = 'Thanksss';
//             this.nextElementSibling.className = 'message-success';

//             isValid = true;
//         }
//     }

//     return isValid;
// }

// function checkEmail(){

//     var isValid = false;

//     var sValue = this.value;
//     if(sValue == ''){
//         this.nextElementSibling.innerHTML = 'need email';
//         this.nextElementSibling.className = 'message-error';
//     } else{
//         var oEmailExp = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{1,4})+$/;
//         var bTest = oEmailExp.test(sValue);
//         if(!bTest){
//             this.nextElementSibling.innerHTML = 'email only';
//             this.nextElementSibling.className = 'message-error';
//         } else{
//             this.nextElementSibling.innerHTML = 'Thanksss';
//             this.nextElementSibling.className = 'message-success';

//             isValid = true;
//         }
//     }

//     return isValid;
// }

// function checkAll(e){
//     e.preventDefault();
//     console.log(e);

//     // no dom calls the functions, thus cannot use 'this'

//     var isFirstNameValid = checkAlphabetic.call(firstNameInput);
//     var isLastNameValid = checkAlphabetic.call(lastNameInput);
//     var isEmailValid = checkEmail.call(emailInput);
//     var isPasswordValid = checkFilled.call(firstNameInput);

//     var isAllValid = isFirstNameValid && isLastNameValid && isEmailValid && isPasswordValid;
//     if(isAllValid == false){
//         e.preventDefault();
//     }


// }

// var firstNameInput = document.querySelector('#firstName');
// firstNameInput.addEventListener('blur', checkAlphabetic);

// var lastNameInput = document.querySelector('#lastName');
// lastNameInput.addEventListener('blur', checkAlphabetic);

// var emailInput = document.querySelector('#email');
// emailInput.addEventListener('blur', checkEmail);

// var passwordInput = document.querySelector('#password');
// passwordInput.addEventListener('blur', checkFilled);

// var oForm = document.querySelector('form');
// oForm.addEventListener('submit', checkAll);

// // var temp = document.querySelectorAll('.pure-control-group'>input);
// // for (let i = 0; i < temp.length; i++) {
// //     temp[i].addEventListener('blur', check);
// // }