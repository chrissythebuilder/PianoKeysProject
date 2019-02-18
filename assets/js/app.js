const keys = document.querySelectorAll(".keys");

window.addEventListener("keydown", function(e) {
    console.log(e);
    // for audio to play
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    // for animation to take place when key has been selected
    const key = document.querySelector(`.keys[data-key="${e.keyCode}"]`);

    this.console.log(audio);
    if (!audio) return;

    // to ensure that the same audio gets to be played immediately if selected consecutively
    audio.currentTime = 0;
    // execute play method on audio
    audio.play();
    key.classList.add("played");
});

function removeTransition(e) {
    if (e.propertyName != "transform") return;
    this.classList.remove("played")
}

// loop on every element to add an eventListener
keys.forEach(key => key.addEventListener("transitionend", removeTransition));

// find all keys to be used for onclick event
const keysAll = document.querySelector("keys");
console.log(keys);

function playOne() {
    const audioOne = document.getElementById("keyOne");
    audioOne.addEventListener("transitionend", removeTransition);
    audioOne.play();
}

function playTwo() {
    const audioOne = document.getElementById("keyTwo");
    audioOne.addEventListener("transitionend", removeTransition);
    audioOne.play();
}

function playThree() {
    const audioOne = document.getElementById("keyThree");
    audioOne.addEventListener("transitionend", removeTransition);
    audioOne.play();
}

function playFour() {
    const audioOne = document.getElementById("keyFour");
    audioOne.addEventListener("transitionend", removeTransition);
    audioOne.play();
}

function playFive() {
    const audioOne = document.getElementById("keyFive");
    audioOne.addEventListener("transitionend", removeTransition);
    audioOne.play();
}

function playSix() {
    const audioOne = document.getElementById("keySix");
    audioOne.addEventListener("transitionend", removeTransition);
    audioOne.play();
}

function playSeven() {
    const audioOne = document.getElementById("keySeven");
    audioOne.addEventListener("transitionend", removeTransition);
    audioOne.play();
}

function playEight() {
    const audioOne = document.getElementById("keyEight");
    audioOne.addEventListener("transitionend", removeTransition);
    audioOne.play();
}

function playNine() {
    const audioOne = document.getElementById("keyNine");
    audioOne.addEventListener("transitionend", removeTransition);
    audioOne.play();
}

function playTen() {
    const audioOne = document.getElementById("keyTen");
    audioOne.addEventListener("transitionend", removeTransition);
    audioOne.play();
}

function playEleven() {
    const audioOne = document.getElementById("keyEleven");
    audioOne.addEventListener("transitionend", removeTransition);
    audioOne.play();
}

function playTwelve() {
    const audioOne = document.getElementById("keyTwelve");
    audioOne.addEventListener("transitionend", removeTransition);
    audioOne.play();
}

function Delete() {
    document.getElementById("note-list").value = "" ;
}

document.getElementById("delete-btn").addEventListener("click", Delete)