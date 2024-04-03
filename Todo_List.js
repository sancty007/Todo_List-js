// Création d'un module auto-appelant pour encapsuler la logique
let gestionnaireTache = (function() {
    // Déclaration du compteur pour le nombre total de tâches
    let nombreLi = 0;

    // Fonction pour incrémenter le compteur
    function incrementationCompteur() {
        nombreLi++;
        // Met à jour l'affichage du nombre total de tâches
        document.querySelector(".nombreLi").textContent = nombreLi;
    }

    // Fonction pour décrémenter le compteur
    function decrementationCompteur() {
        nombreLi--;
        // Met à jour l'affichage du nombre total de tâches
        document.querySelector(".nombreLi").textContent = nombreLi;
    }

    // Retourne les fonctions à utiliser en dehors du module
    return {
        incrementationCompteur,
        decrementationCompteur
    };
})();

// Déclaration d'une variable pour le nombre total de tâches
let nombreLi = 0;

// Sélection des éléments HTML nécessaires
const inputchamp = document.querySelector('#nomTache');
const ouputchamp = document.querySelector('.list-group');

// Fonction pour créer un bouton de suppression
function creationBouttonSupprimer() {
    const boutonSupprimer = document.createElement('button');
    boutonSupprimer.className = 'ms-auto btn btn-danger btn-sm';
    boutonSupprimer.innerHTML = '<i class="bi-trash"></i>';
    return boutonSupprimer;
}

// Fonction pour effectuer l'action de suppression d'un élément
function actionButtonSupprimer(div) {
    // Animation de translation vers le haut avant la suppression
    div.style.transform = 'translateY(-150px)';
    div.style.position = 'relative';
    div.style.transition = 'transform 1s';

    // Suppression de l'élément du DOM après la fin de l'animation
    setTimeout(function() {
        div.remove();
        // Décrémentation du nombre total de tâches
        gestionnaireTache.decrementationCompteur();
    }, 1000);
}

// Fonction pour créer un bouton de modification
function creationBouttonModifier() {
    const boutonModifier = document.createElement('button');
    boutonModifier.className = 'btn btn-info ms-auto'; // Ajout de la classe ms-2 pour décalage à gauche
    boutonModifier.innerHTML = '<i class="fas fa-pencil-alt"></i> Modifier';

    // Style sur le bouton
    boutonModifier.style.color = '#fff';
    boutonModifier.style.backgroundColor = '#17a2b8';
    boutonModifier.style.borderColor = '#17a2b8';
    boutonModifier.style.borderRadius = '5px';

    return boutonModifier;
}

// Fonction pour ajouter un élément à la todo list
function bouttonAjouter() {
    // Création d'une nouvelle li
    const li = document.createElement('li');
    li.classList = 'todo list-group-item d-flex align-items-center';

    // Incrémentation du nombre total de tâches
    gestionnaireTache.incrementationCompteur();

    // Création du label
    const label = document.createElement("label");
    label.className = 'ms-2 form-check-label';
    label.setAttribute('for', 'todo-' + (ouputchamp.children.length + 1));

    // Création de l'input Checkbox
    const inputCheckbox = document.createElement("input");
    inputCheckbox.classList = 'form-check-input';
    inputCheckbox.id = 'todo-' + (ouputchamp.children.length + 1);
    inputCheckbox.type = 'checkbox';

    // Création du bouton de suppression
    const boutonSupprimer = creationBouttonSupprimer();
    boutonSupprimer.addEventListener('click', function() {
        actionButtonSupprimer(li);
    });

    // Récupération de la valeur saisie dans le champ
    const inputchampvalue = inputchamp.value;

    // Vérification de la saisie
    if (inputchampvalue !== "") {
        // Affichage de la valeur dans le label de la nouvelle tâche
        label.textContent = inputchampvalue.trim();

        // Ajout de la nouvelle tâche à la liste
        ouputchamp.appendChild(li);
        li.appendChild(inputCheckbox);
        li.appendChild(label);
        li.appendChild(boutonSupprimer);

        // Réinitialisation du champ de saisie
        inputchamp.value = "";
    }
}
