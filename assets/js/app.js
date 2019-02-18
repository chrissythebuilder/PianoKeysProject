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

function playOne() {
    const audioOne = document.getElementById("keyOne");
    const keyAnimate = document.querySelector(".key1");
    audioOne.addEventListener("transitionend", removeTransition);
    audioOne.play();
    keyAnimate.classList.add("played");
}

function playTwo() {
    const audioOne = document.getElementById("keyTwo");
    const keyAnimate = document.querySelector(".key2");
    audioOne.addEventListener("transitionend", removeTransition);
    audioOne.play();
    keyAnimate.classList.add("played");
}

function playThree() {
    const audioOne = document.getElementById("keyThree");
    const keyAnimate = document.querySelector(".key3");
    audioOne.addEventListener("transitionend", removeTransition);
    audioOne.play();
    keyAnimate.classList.add("played");
}

function playFour() {
    const audioOne = document.getElementById("keyFour");
    const keyAnimate = document.querySelector(".key4");
    audioOne.addEventListener("transitionend", removeTransition);
    audioOne.play();
    keyAnimate.classList.add("played");
}

function playFive() {
    const audioOne = document.getElementById("keyFive");
    const keyAnimate = document.querySelector(".key5");
    audioOne.addEventListener("transitionend", removeTransition);
    audioOne.play();
    keyAnimate.classList.add("played");
}

function playSix() {
    const audioOne = document.getElementById("keySix");
    const keyAnimate = document.querySelector(".key6");
    audioOne.addEventListener("transitionend", removeTransition);
    audioOne.play();
    keyAnimate.classList.add("played");
}

function playSeven() {
    const audioOne = document.getElementById("keySeven");
    const keyAnimate = document.querySelector(".key7");
    audioOne.addEventListener("transitionend", removeTransition);
    audioOne.play();
    keyAnimate.classList.add("played");
}

function playEight() {
    const audioOne = document.getElementById("keyEight");
    const keyAnimate = document.querySelector(".key8");
    audioOne.addEventListener("transitionend", removeTransition);
    audioOne.play();
    keyAnimate.classList.add("played");
}

function playNine() {
    const audioOne = document.getElementById("keyNine");
    const keyAnimate = document.querySelector(".key9");
    audioOne.addEventListener("transitionend", removeTransition);
    audioOne.play();
    keyAnimate.classList.add("played");
}

function playTen() {
    const audioOne = document.getElementById("keyTen");
    const keyAnimate = document.querySelector(".key10");
    audioOne.addEventListener("transitionend", removeTransition);
    audioOne.play();
    keyAnimate.classList.add("played");
}

function playEleven() {
    const audioOne = document.getElementById("keyEleven");
    const keyAnimate = document.querySelector(".key11");
    audioOne.addEventListener("transitionend", removeTransition);
    audioOne.play();
    keyAnimate.classList.add("played");
}

function playTwelve() {
    const audioOne = document.getElementById("keyTwelve");
    const keyAnimate = document.querySelector(".key12");
    audioOne.addEventListener("transitionend", removeTransition);
    audioOne.play();
    keyAnimate.classList.add("played");
}

function Delete() {
    document.getElementById("note-list").value = "" ;
}

document.getElementById("delete-btn").addEventListener("click", Delete)