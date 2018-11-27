window.addEventListener("keydown", function(e) {
    this.console.log(e);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    this.console.log(audio);
    if (!audio) return;

    // to ensure that the same audio gets to be played immediately if selected consecutively
    audio.currentTime = 0;
    // execute play method on audio
    audio.play();
})