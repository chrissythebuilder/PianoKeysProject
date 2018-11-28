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

const keys = document.querySelectorAll(".keys");

function removeTransition(e) {
    if (e.propertyName != "transform") return;
    this.classList.remove("played")
}

// loop on every element to add an eventListener
keys.forEach(key => key.addEventListener("transitionend", removeTransition));