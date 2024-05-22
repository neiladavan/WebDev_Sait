/**
 * Date: May 22, 2024
 * Author: Neil Aldrin Adavan
 * ===================================================================
 */
/**
 * Start
 * Onload Function
 * To Add onfocus and onblur event in all text input in frmRegistration
 */

const frmRegistrationInput = document.frmRegistration.querySelectorAll('input[type=text]');

for (let i = 0; i < frmRegistrationInput.length; i++) {
  document
    .getElementById(frmRegistrationInput[i].id)
    .addEventListener('focus', function () {
      document.getElementById(
        `${frmRegistrationInput[i].id}Error`
      ).style.display = 'inline';
    });

  document
    .getElementById(frmRegistrationInput[i].id)
    .addEventListener('blur', function () {
      document.getElementById(
        `${frmRegistrationInput[i].id}Error`
      ).style.display = 'none';
    });
}
/** End */

/**
 * frmRegistration Validation
 * 1. Check if all text field has value else show error message in frmSubmitMessage
 * 2. Check if Postal Code has the correct format A1A 1A1
 * @returns true if all validation passed
 * else returns false
 */
function frmRegistrationValidation() {
  const postalCodeRegex = /^[A-Z]\d[A-Z] ?\d[A-Z]\d$/;
  let result = confirm('Are you sure you want to submit?');
  let errMessage = '';
  let inputInvalidField = '';

  if (!result) return false;
  else {
    for (let i = 0; i < frmRegistrationInput.length; i++) {
      if (frmRegistrationInput[i].value == '') {
        //console.log(frmRegistrationInput[i].name);

        if (!inputInvalidField) inputInvalidField = frmRegistrationInput[i];

        document.getElementById(`${frmRegistrationInput[i].id}Error`).style.display = 'inline';

        errMessage += document.getElementById(`${frmRegistrationInput[i].id}Error`).innerHTML + '<br>'

        document.getElementById('frmSubmitMessage').innerHTML = errMessage;
      }
    }

    console.log('.....', errMessage);
    if (errMessage) {
      inputInvalidField.focus();

      return false;
    }

    let postalCodeValue = document.getElementById('postalCode').value;

    if (!postalCodeRegex.test(postalCodeValue)) {
      document.getElementById(`postalCodeError`).style.display = 'inline';
      document.getElementById('frmSubmitMessage').innerHTML = 'Postal Code format is incorrect. (N2A 2A2)';
      document.getElementById(`postalCode`).focus();

      return false;
    }
  }

  return true;
}

/**
 * Just an added function for computing totalAmount to be paid.
 */
function computeTotalAmount() {
  let totalAdult = document.getElementById('adults').value * 150;

  let noOfChild = document.getElementById('child').value;

  let totalChild = 0;
  if (noOfChild) totalChild = noOfChild * 100;

  let totalAmount = totalAdult + totalChild;

  document.getElementById('totalAmount').value = totalAmount;
}
