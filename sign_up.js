const inputs = document.querySelectorAll('input:not([type="button"])' );
const pswConfirmation = document.querySelector("#psw-confirmation");
let valid = false;


function addLable(event) {
    event.target.nextSibling.nextSibling.style.display = "block";
}
function removeLable(event) {
    event.target.nextSibling.nextSibling.style.display = "none";
}
inputs.forEach(input => {
    input.addEventListener('focus', addLable);
    input.addEventListener('blur', removeLable);
})


function changeBorderColor () {
    pswConfirmation.style.border = valid? "2px solid green": "2px solid red";
}

pswConfirmation.addEventListener('focus', changeBorderColor);
pswConfirmation.addEventListener('blur', () => {
    pswConfirmation.style.border = "none";
    pswConfirmation.style.borderBottom = "2px solid var(--white)";
})

function checkPassword(event) {
    const password = document.querySelector("#password");
    if (event.target.value == password.value && password.checkValidity()){
        valid = true;
        changeBorderColor();
        console.log('valid');
    }
    else {
        valid = false;
        changeBorderColor();
        console.log('invalid');
    }
}
pswConfirmation.addEventListener("input", checkPassword);

