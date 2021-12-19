function onMainButtonClick() {
    window.location.href = "./index.html";
}

function onAboutButtonClick() {
    window.location.href = "./about.html";
}

function onMediaButtonClick() {
    window.location.href = "./media.html";
}

window.onload = function() {
    document.getElementById("main-btn").onclick = onMainButtonClick;
    document.getElementById("about-btn").onclick = onAboutButtonClick;
    document.getElementById("media-btn").onclick = onMediaButtonClick;
};