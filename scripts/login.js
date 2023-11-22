import { addLable } from "./shared.mjs";
import { removeLable } from "./shared.mjs";
import { changeBorderColor } from "./shared.mjs";
import { checkPassword } from "./shared.mjs";
const pswConfirmation = document.querySelector("#psw-confirmation");

// lable 
const inputs = document.querySelectorAll('input:not([type="button"])' );

inputs.forEach(input => {
    input.addEventListener('focus', (event) => {addLable(event)});
    input.addEventListener('blur',(event) => {removeLable(event)});
})

// redirect to 'thank you' message on submit
document.getElementById('log-in').addEventListener('submit', function(event) {
    event.preventDefault();
    window.location.href = './message.html';
});

// password confirmation
pswConfirmation.addEventListener('focus', changeBorderColor);
pswConfirmation.addEventListener('blur', () => {
    pswConfirmation.style.border = "none";
    pswConfirmation.style.borderBottom = "2px solid var(--white)";
})

pswConfirmation.addEventListener("input", checkPassword);