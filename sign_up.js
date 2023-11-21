// lable 
const inputs = document.querySelectorAll('input:not([type="button"])' );

function addLable(event) {
    event.target.nextSibling.nextSibling.style.display = "block";
    event.target.nextSibling.nextSibling.nextSibling.nextSibling.style.display = "flex";
}
function removeLable(event) {
    event.target.nextSibling.nextSibling.style.display = "none";
    event.target.nextSibling.nextSibling.nextSibling.nextSibling.style.display = "none";

}

function showHint(event) {
    const lable = event.target.nextSibling.nextSibling;
    lable.innerText += " "+lable.dataset.help;
}
function removeHint(event) {
    const lable = event.target.nextSibling.nextSibling;
    lable.innerText = lable.innerText.replace(lable.dataset.help, "");
}

inputs.forEach(input => {
    input.addEventListener('focus', (event) => {
        addLable(event);
        timer = setTimeout(() => {
            if (!event.target.checkValidity()){
                showHint(event)
            }
        }, 4000);
    });
    input.addEventListener('blur',(event) => {
        removeLable(event);
        removeHint(event);
        clearTimeout(timer);
    });
})

// password confirmation
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
        console.log('valid');
    }
    else {
        valid = false;
        changeBorderColor();
        console.log('invalid');
    }
}
pswConfirmation.addEventListener("input", checkPassword);

