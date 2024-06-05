
window.onload = function() {
    var audio = document.getElementById("background-music");
    audio.volume = 0.5;  // Ajustar o volume se necessário
    audio.play();

    var muteButton = document.querySelector(".hidden-toggle");
    muteButton.addEventListener("change", function() {
        if (this.checked) {
            audio.muted = true;
        } else {
            audio.muted = false;
        }
    });
};
