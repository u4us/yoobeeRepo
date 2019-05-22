










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