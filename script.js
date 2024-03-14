function devine() {
    return Math.floor(Math.random() * 100) + 1; // Ajouter 1 pour obtenir une valeur entre 1 et 100 inclus
}


//console.log(devine())

function questionAutilisateur() {
    const valeur = parseInt(prompt("Entrez un nombre entre 1 et 100 : "));

    if (isNaN(valeur) || valeur < 1 || valeur > 100) {
        console.log("Veuillez entrer un nombre valide entre 1 et 100.");
        return; // Sortir de la fonction si la valeur est invalide
    }

    const nombreDevine = devine();

    if (valeur === nombreDevine) {
        console.log("Félicitations ! Vous avez deviné le bon nombre.");

    } else if (valeur < nombreDevine) {
        console.log(String(valeur) + " est different de "+ String(nombreDevine)+" Dommage ! Le nombre à deviner était plus grand. Essayez encore.");
    } else {
        console.log(String(valeur)+ " est different de "+ String(nombreDevine)+" Dommage ! Le nombre à deviner était plus petit. Essayez encore.");
    }
}

function incremente(nombreEssaie){

    return ++nombreEssaie;
}

while (true) {
   
    let nombreEssaie = 0 ;

    questionAutilisateur();
    console.log("Le nombre d'essais du joueur est de : "+ parseInt(incremente(nombreEssaie)))

    const rejouer = prompt("Voulez-vous rejouer ? (oui/non)").toLowerCase();
    if (rejouer !== "oui") {
        break;
    }
}


