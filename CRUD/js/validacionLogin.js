const user = document.getElementById('user')
const userHelp = document.getElementById('userHelp')
const password = document.getElementById('password')
const passwordHelp = document.getElementById('passwordHelp')

const eye = document.querySelector(".input-icon")

function validar(){
    //e.preventDefault();

    let option = true;

    if (!user.value || !(/^[a-zA-Z0-9]{8,12}$/.test(user.value)) ) {
        userHelp.style.display="block"
        option=false;
    }

    if (!password.value || !(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}$/.test(password.value))) {
        passwordHelp.style.display="block"
        option=false;
    }

    return option;
}

function white(id){
    document.getElementById(id + 'Help').style.display="none"
}

eye.addEventListener('click', ()=>{
    /* lo hago con addeventlister y un ternario porque me parece mas comodo */
    password.type == "password"?password.type = "text":password.type = "password" 
    eye.classList.toggle('active')
    console.log(eye.classList)
})