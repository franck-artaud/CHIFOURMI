
let scoreJoueur = 0;
let scoreOrdi = 0;

const scoreJoueur_span = document.getElementById("scoreJoueur");
const scoreOrdi_span = document.getElementById("scoreOrdi");






const buttons = document.getElementsByClassName("value");

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
        else if ((joueur === "Pierre " && robot === "Ciseaux ")
        || (joueur === "Feuille " && robot === "Pierre ")
        || (joueur === "Ciseaux " && robot ==="Feuille ")) {
            resultat = "T'as gagné mon pote";
            scoreJoueur++;
            scoreJoueur_span.innerHTML = document.getElementById(scoreJoueur);
            scoreJoueur_span.innerHTML = scoreJoueur;

    

           
            // scoreJoueur_span.innerHTML = getElementById("#scoreJoueur");

        }
        else {
            resultat = "Whaouu la loooose !!!";
            scoreOrdi++;
            scoreOrdi_span.innerHTML = document.getElementById("scoreOrdi");
            scoreOrdi_span.innerHTML = scoreOrdi;

           
            // scoreOrdi_span.innerHTML = getElementById("#scoreOrdi");

        }
           
            document.querySelector(".resultat").innerHTML =
            `<div class="joueur">
            Toi : ${joueur} <br/>
            Ordi : ${robot}
            
            <div class="score">
            ${resultat}
            </div> `;
    });
}