/*function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}*/

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const close = document.querySelector(".close");
const succesMessage = document.getElementById("succes-message");

const formElt = document.querySelectorAll("#form");
const errorElt = document.getElementById('#error')

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

//close modal form event

close.addEventListener("click", () => {
  closeModal();
});

// launch succes message

function launchSuccesMessage() {
  succesMessage.style.display = "block";
}




// Form elements
const firstElt = document.getElementById("first");
const errorFirst = document.getElementById("errorFirst");
const logoError1 = document.getElementById("error-logo-1");
const logoCheck1 = document.getElementById("check-logo-1");

const lastElt = document.getElementById("last");
const error2 = document.getElementById("error2");
const logoError2 = document.getElementById("error-logo-2");
const logoCheck2 = document.getElementById("check-logo-2");



const email = document.getElementById("email");
const error3 = document.getElementById("error3");
const logoError3 = document.getElementById("error-logo-3");
const logoCheck3 = document.getElementById("check-logo-3");


const birthdateElt = document.getElementById("birthdate");
const error4 = document.getElementById("error4");
const logoError4 = document.getElementById("error-logo-4");
const logoCheck4 = document.getElementById("check-logo-4");

const quantityElt = document.getElementById("quantity");
const error5 = document.getElementById("error5");
const logoError5 = document.getElementById("error-logo-5");
const logoCheck5 = document.getElementById("check-logo-5");

const radioButtons = document.querySelectorAll(".checkbox-input[type=radio]");
const radioButtonsTest = document.querySelectorAll(".checkbox-input");
const location1 = document.getElementById("location1");
const location2 =  document.getElementById("location2");
const location3 =  document.getElementById("location3");
const location4 =  document.getElementById("location4");
const location5 =  document.getElementById("location5");
const location6 =  document.getElementById("location6");
const error6 = document.getElementById("error6");
const logoError6 = document.getElementById("error-logo-6");
const logoCheck6 = document.getElementById("check-logo-6");

const checkboxInput = document.getElementById("checkbox1");
const error7 = document.getElementById("error7");



// utils: check the length of a value
function isLongEnough(currentLength, minimumLength) {
  return currentLength >= minimumLength ? true : false;
} 

btn = document.getElementById('btn-submit');
birthdate = document.getElementById('birthdate');

btn.addEventListener("click", function(e){

  e.preventDefault();

  const isFirstValid = isLongEnough(firstElt.value.length, 2) ? true : false;
  console.log(isFirstValid);

  if(isFirstValid === false) {
	errorFirst.textContent = 'Le champ prénom doit être composé de minimum 2 caractères.';
	errorFirst.style.visibility = "visible";
  firstElt.style.borderColor = "#e74c3c";
  logoError1.style.visibility = "visible";
  logoCheck1.style.visibility = "hidden";
  
  } else {
    errorFirst.textContent = '';
    errorFirst.style.visibility = "hidden";
    firstElt.style.borderColor = "#2ecc71";
    logoError1.style.visibility = "hidden";
    logoCheck1.style.visibility = "visible";

  }

  const isLastValid = isLongEnough(lastElt.value.length, 2) ? true : false;
  console.log(isLastValid);

  if(isLastValid === false) {
    error2.textContent = 'Le champ nom doit être composé de minimum 2 caractères.';
    error2.style.visibility = "visible";
    lastElt.style.borderColor = "#e74c3c";
    logoError2.style.visibility = "visible";
    logoCheck2.style.visibility = "hidden";

    } else {
      error2.textContent = '';
      error2.style.visibility = "hidden";
      lastElt.style.borderColor = "#2ecc71";
      logoError2.style.visibility = "hidden";
      logoCheck2.style.visibility = "visible";
  
    }

var regularExpressions = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


if (!regularExpressions.test(email.value) ) {  

  error3.textContent = 'L\'email entré n\'est pas valide.';
  error3.style.visibility = "visible";
  email.style.borderColor = "#e74c3c";
  logoError3.style.visibility = "visible";
  logoCheck3.style.visibility = "hidden";
  
} else {
  error3.textContent = '';
  error3.style.visibility = "hidden";
  email.style.borderColor = "#2ecc71";
  logoError3.style.visibility = "hidden";
  logoCheck3.style.visibility = "visible";

}





let todayDate = new Date(birthdate.value);
let dateBirthdate = new Date();
let dateBirthdateOld = new Date();

dateBirthdate.setFullYear(dateBirthdate.getFullYear() - 18);
dateBirthdateOld.setFullYear(dateBirthdateOld.getFullYear() - 130);

if(todayDate == 'Invalid Date') {
  error4.textContent = 'Veuillez rentrer une date valide.';
  error4.style.visibility = "visible";
  birthdateElt.style.borderColor = "#e74c3c";
  logoError4.style.visibility = "visible";
  logoCheck4.style.visibility = "hidden";
  

} else if (todayDate.getTime() >= dateBirthdate.getTime()) {
  error4.textContent = 'Vous n\'avez pas l\'âge nécessaire pour participer à ce concours';
  error4.style.visibility = "visible";
  birthdateElt.style.borderColor = "#e74c3c";
  logoError4.style.visibility = "visible";
  logoCheck4.style.visibility = "hidden";
} else if (todayDate.getTime() <= dateBirthdateOld.getTime()) {
  error4.textContent = 'Vous êtes un peu âgé, non ? :)';
  error4.style.visibility = "visible";
  birthdateElt.style.borderColor = "#e74c3c";
  logoError4.style.visibility = "visible";
  logoCheck4.style.visibility = "hidden";
} else {
    error4.textContent = '';
    error4.style.visibility = "hidden";
    birthdateElt.style.borderColor = "#2ecc71";
    logoError4.style.visibility = "hidden";
    logoCheck4.style.visibility = "visible";

  } 




  const isQuantityValid = isLongEnough(quantityElt.value.length, 1) ? true : false;
  console.log(isQuantityValid);

  if(isQuantityValid === false || quantityElt.value < 0 || quantityElt.value > 99)  {
    error5.textContent = 'Veuillez rentrer un chiffre entre 0 et 99.';
    error5.style.visibility = "visible";
    quantityElt.style.borderColor = "#e74c3c";
    logoError5.style.visibility = "visible";
    logoCheck5.style.visibility = "hidden";
    } else {
      error5.textContent = '';
      error5.style.visibility = "hidden";
      quantityElt.style.borderColor = "#2ecc71";
      logoError5.style.visibility = "hidden";
      logoCheck5.style.visibility = "visible";
  
    }


    if ((location1.checked)|| (location2.checked) || (location3.checked)
    ||(location4.checked) ||(location5.checked) ||(location6.checked)) {

    error6.textContent = "";
  }
  else{
   
    error6.textContent = "Vous devez choisir une option";
    error6.style.visibility = "visible";
  }

  if ((checkboxInput.checked)) {

  error7.textContent = "";
}
else{
 
  error7.textContent = "Vous devez accepter les termes et conditions.";
  error7.style.visibility = "visible";
}


if ((checkboxInput.checked) && (location1.checked) && isQuantityValid === true && isLastValid === true && isFirstValid === true && error4.textContent == '' &&  error3.textContent == '') {
  
 
  launchSuccesMessage();
  
}


});





/*}*/








// Validate form
/*formElt.forEach(elt => elt.addEventListener("submit", validate));*/
/*
formElt.forEach(elt => elt.addEventListener("click") );
*/
