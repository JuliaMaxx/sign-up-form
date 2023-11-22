const password = document.querySelector("#password");
const pswConfirmation = document.querySelector("#psw-confirmation");

// lable 
export function addLable(event) {
    event.target.nextSibling.nextSibling.style.display = "block";
    if(event.target === password){
        event.target.nextSibling.nextSibling.nextSibling.nextSibling.style.display = "flex";
    }
}
export function removeLable(event) {
    event.target.nextSibling.nextSibling.style.display = "none";
    if(event.target === password){
        event.target.nextSibling.nextSibling.nextSibling.nextSibling.style.display = "none";
    }
}


// password confirmation
export let valid = false;

export function changeBorderColor () {
    pswConfirmation.style.border = valid? "2px solid green": "2px solid red";
}

export function checkPassword(event) {
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
