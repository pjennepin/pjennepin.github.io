let monImage = document.querySelector("img");

monImage.onclick = function() {
    let maSrc = monImage.getAttribute("src");
    if (maSrc === "images/firefox-logo-300x310.png") {
        monImage.setAttribute("src","images/firefox-logo-2.png")
        monImage.setAttribute("width","300px")
        monImage.setAttribute("height","auto")
    } else {
        monImage.setAttribute("src","images/firefox-logo-300x310.png")
    }
}

let monBouton = document.querySelector("button");
let monTitre = document.querySelector("h1");

function definirNomUtilisateur() {
    let monNom = prompt("Veuillez saisir votre nom.");
    localStorage.setItem("nom", monNom);
    monTitre.textContent = "Mozilla est cool, " + monNom;
}

if(!localStorage.getItem("nom")) {
    definirNomUtilisateur();
} else {
    let nomEnregistre = localStorage.getItem("nom");
    monTitre.textContent = "Mozilla est cool, " + nomEnregistre;
}

monBouton.onclick = function() {
    definirNomUtilisateur();
}
