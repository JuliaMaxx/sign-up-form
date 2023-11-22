const telInput = document.querySelector('input[type="tel"]');
const pswConfirmation = document.querySelector("#psw-confirmation");
const inputs = document.querySelectorAll('input:not([type="button"])' );
const weakStrengthIndicator = document.querySelector('.weak');
const midStrengthIndicator = document.querySelector('.medium');
const highStrengthIndicator = document.querySelector('.strong');

import { addLable } from "./shared.mjs";
import { removeLable } from "./shared.mjs";
import { changeBorderColor } from "./shared.mjs";
import { checkPassword } from "./shared.mjs";


// redirect to 'thank you' message on submit
document.getElementById('sign-up').addEventListener('submit', function(event) {
    event.preventDefault();
    window.location.href = './message.html';
});

// show user right format on sumbmiting invalid phone number input
telInput.addEventListener('invalid', function() {
    if (telInput.validity.patternMismatch) {
      telInput.setCustomValidity('Format: +999999999999');
    }
  });

telInput.addEventListener('input', function() {
telInput.setCustomValidity('');
});

// hint
function showHint(event) {
    const lable = event.target.nextSibling.nextSibling;
    lable.innerText += " "+lable.dataset.help;
}
function removeHint(event) {
    const lable = event.target.nextSibling.nextSibling;
    lable.innerText = lable.innerText.replace(lable.dataset.help, "");
}

// password indicators
function changeIndicators(event) {
    const midPswRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const strongPswRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (event.target.checkValidity()){
        weakStrengthIndicator.style.backgroundColor = 'red';
        if (strongPswRegex.test(event.target.value)){
            highStrengthIndicator.style.backgroundColor = 'green';
            midStrengthIndicator.style.backgroundColor = 'yellow';
        }
        else if (midPswRegex.test(event.target.value)){
            highStrengthIndicator.style.backgroundColor = 'rgba(255, 255, 255, 0.483)';
            midStrengthIndicator.style.backgroundColor = 'yellow';
        }
        else {
            midStrengthIndicator.style.backgroundColor = 'rgba(255, 255, 255, 0.483)';
            highStrengthIndicator.style.backgroundColor = 'rgba(255, 255, 255, 0.483)';
        }
    }
    else{
        midStrengthIndicator.style.backgroundColor = 'rgba(255, 255, 255, 0.483)';
        weakStrengthIndicator.style.backgroundColor = 'rgba(255, 255, 255, 0.483)';
        highStrengthIndicator.style.backgroundColor = 'rgba(255, 255, 255, 0.483)';
    }
}

// add lables, hints and indicators to inputs
let timer;
inputs.forEach(input => {
    input.addEventListener('focus', (event) => {
        addLable(event);
        timer = setTimeout(() => {
            if (!event.target.checkValidity()){
                showHint(event)
            }
        }, 4000);
        changeIndicators(event);
    });
    input.addEventListener('blur',(event) => {
        removeLable(event);
        removeHint(event);
        clearTimeout(timer);
    });
    input.addEventListener('input', changeIndicators);
})

// password confirmation
pswConfirmation.addEventListener('focus', changeBorderColor);
pswConfirmation.addEventListener('blur', () => {
    pswConfirmation.style.border = "none";
    pswConfirmation.style.borderBottom = "2px solid var(--white)";
})
pswConfirmation.addEventListener("input", checkPassword);


