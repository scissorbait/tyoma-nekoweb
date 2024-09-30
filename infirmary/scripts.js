// mentalhealth.html theme switch/remember
var headerText = document.getElementById("head");
var headerImg = document.getElementById("headimg");
var fon = document.getElementById("container");
fon.className = sessionStorage.getItem("health") || "health";
headerText.src = sessionStorage.getItem("head") || "images/infirmary.gif";
headerImg.src = sessionStorage.getItem("headimg") || "images/barun.gif";
 
function makeEvil() {
    if (fon.className == "health") {
        fon.className = 'evilhealth';
        headerText.src = "images/infirmaryev.png";
        headerImg.src = "images/redreaper.gif";
        sessionStorage.setItem("health", "evilhealth");
        sessionStorage.setItem("head", "images/infirmaryev.png");
        sessionStorage.setItem("headimg", "images/redreaper.gif");
    } else {
        fon.className = 'health';
        headerText.src = "images/infirmary.gif";
        sessionStorage.setItem("health", "health");
        headerImg.src = "images/barun.gif";
        sessionStorage.setItem("head", "images/infirmary.gif");
        sessionStorage.setItem("headimg", "images/barun.gif");
    };
}