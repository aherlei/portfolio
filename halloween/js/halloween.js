const hand = document.getElementById("door")

function show(element) {
    document.getElementById("hand").style.visibility = "visible"
}
function hide(element) {
    document.getElementById("hand").style.visibility = "hidden"
}

function sound(element) {
    document.getElementById("dooropen").play();
}