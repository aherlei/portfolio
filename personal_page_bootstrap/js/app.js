const email    = document.getElementById('email');
const password = document.getElementById('password');
const emailMsg = document.getElementById('emailHelp');
const passMsg  = document.getElementById('passHelp');
const language = document.querySelector(".check")

language.addEventListener('click', lan);

function lan(){
    let check = language.checked;
    
    if (check) {
        location.href="../index.html";
    } else {
        location.href="es/index.html";
    }
}

function validation() {

    //!email.value?false:email.style.borderBlockColor = "red";
    if (email.value == "") {
        email.style.borderColor = "red";
        emailMsg.classList.remove("visually-hidden");
        return false;
    }
    
    if (password.value == ""){
        password.style.borderColor = "red";
        passMsg.classList.remove("visually-hidden");
        return false;

    }
}

password.addEventListener('keydown', reset, false);
email.addEventListener('keydown', reset, false);

function reset(){

    emailMsg.classList.add("visually-hidden");
    email.style.borderColor = "green";

    passMsg.classList.add("visually-hidden");
    password.style.borderColor = "green";
}



