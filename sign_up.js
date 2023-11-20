const pswConfirmation = document.querySelector("#psw-confirmation");
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
    const password = document.querySelector("#password");
    if (event.target.value == password.value && password.checkValidity()){
        valid = true;
        changeBorderColor();
        console.log('valid')
    }
    else {
        valid = false;
        changeBorderColor();
        console.log('invalid')
    }
}
pswConfirmation.addEventListener("input", checkPassword)

