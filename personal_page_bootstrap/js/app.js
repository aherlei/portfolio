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