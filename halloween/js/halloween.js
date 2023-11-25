const hands = document.getElementsByClassName('hands')

function show(element) {
    document.getElementById(element).style.visibility = "visible"
}
function showTwoElments(element, element2) {
    document.getElementById(element).style.visibility = "visible"
    hands.style.visibility = "visible"
}

function hide(element) {
    document.getElementById(element).style.visibility = "hidden"
}

function sound(element) {
    document.getElementById(element).play();
}

function silence(element) {
    document.getElementById(element).pause();
}