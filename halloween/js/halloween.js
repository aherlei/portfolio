const hands = document.getElementsByClassName('hands')

function show(element) {
    document.getElementById(element).style.visibility = "visible"
}

/* MANOS A LA VEZ */
function showTwoElments() {
    for (let index = 0; index < hands.length; index++) {
        hands[index].style.visibility = "visible"
    }
}

function hiddenElments() {
    for (let index = 0; index < hands.length; index++) {
        hands[index].style.visibility = "hidden"
    }
}

function hide(element) {
    document.getElementById(element).style.visibility = "hidden"
}
function none(element){
    document.getElementById(element).classList.toggle("look");
}

function sound(element) {
    document.getElementById(element).play();
}

function silence(element) {
    document.getElementById(element).pause();
}
