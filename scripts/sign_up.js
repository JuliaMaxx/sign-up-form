const telInput = document.querySelector('input[type="tel"]');
const password = document.querySelector("#password");
const inputs = document.querySelectorAll('input:not([type="button"])' );
const weakStrengthIndicator = document.querySelector('.weak');
const midStrengthIndicator = document.querySelector('.medium');
const highStrengthIndicator = document.querySelector('.strong');
const pswConfirmation = document.querySelector("#psw-confirmation");

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

// lable 
function addLable(event) {
    event.target.nextSibling.nextSibling.style.display = "block";
    if(event.target === password){
        event.target.nextSibling.nextSibling.nextSibling.nextSibling.style.display = "flex";
    }
}
function removeLable(event) {
    event.target.nextSibling.nextSibling.style.display = "none";
    if(event.target === password){
        event.target.nextSibling.nextSibling.nextSibling.nextSibling.style.display = "none";
    }
}

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
let valid = false;

function changeBorderColor () {
    pswConfirmation.style.border = valid? "2px solid green": "2px solid red";
}

pswConfirmation.addEventListener('focus', changeBorderColor);
pswConfirmation.addEventListener('blur', () => {
    pswConfirmation.style.border = "none";
    pswConfirmation.style.borderBottom = "2px solid var(--white)";
})

function checkPassword(event) {
    if (event.target.value == password.value && password.checkValidity()){
        valid = true;
        changeBorderColor();
        event.target.setCustomValidity('');
    }
    else {
        valid = false;
        event.target.setCustomValidity('Two passwords must match')
        changeBorderColor();
    }
}

pswConfirmation.addEventListener("input", checkPassword);

