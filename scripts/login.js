// lable 
const inputs = document.querySelectorAll('input:not([type="button"])' );

function addLable(event) {
    event.target.nextSibling.nextSibling.style.display = "block";
}
function removeLable(event) {
    event.target.nextSibling.nextSibling.style.display = "none";
}

inputs.forEach(input => {
    input.addEventListener('focus', (event) => {addLable(event)});
    input.addEventListener('blur',(event) => {removeLable(event)});
})


// password confirmation
const pswConfirmation = document.querySelector("#psw-confirmation");
const password = document.querySelector("#password");
document.getElementById('log-in').addEventListener('submit', function(event) {
    event.preventDefault();
    window.location.href = './message.html';
});
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