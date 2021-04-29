score = 0;
function Updatescore() {
    score = score + 1;
    document.getElementById("score").innerHTML = "score:" + score;
}

function savescore() {
    localStorage.setItem("score", score);
}

function nextpage() {
    window.location = "activity_2.html";
}