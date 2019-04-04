const buttons = document.querySelectorAll("button");
const scoreJoueur = 0 ;
const scoreJoueurR = (scoreJoueur + 1);
const scoreOrdi = 0;
// console.log(buttons);
// On emarque que la console nous donne une NodeList


// On va voir ce qui se passe avec
// dans les boutons en créant une boucle

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        const joueur = buttons[i].innerHTML;
        const robot = buttons[Math.floor(Math.random() * buttons.length)].innerHTML;
        let resultat = "";

        if (joueur === robot) {
            resultat = "Egalité";
        }
        else if ((joueur === "Pierre" && robot === "Ciseaux")
        || (joueur === "Feuille" && robot === "Pierre")
        || (joueur === "Ciseaux" && robot ==="Feuille")) {
            resultat = "T'as gagné mon pote";
        }
        else {
            resultat = "Whaouu la loooose !!!";
        }
            console.log(resultat);
            document.querySelector(".resultat").innerHTML =
            `<div class="joueur">
            Toi : ${joueur} <br/>
            Ordi : ${robot}
            
            <div class="score">
            ${resultat}
            </div> 

            <div class="compteur">

            Toi: ${scoreJoueur} ${scoreJoueurR}
            </div> `;
            
            // <div class="compteur">
            // Toi : ${scoreJoueur} <span> ${scoreJoueur +1} </span>
            // Ordi : ${sscoreOrdi} <span> ${scoreOrdi +1} </span>
            // </div>

    });
}