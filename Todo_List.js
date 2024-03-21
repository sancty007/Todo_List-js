
// creation d'un module auto appelant pour l'encapsulation de la logique 
let gestionnaireTache =(function(){

   // declaration du compteur 
    let nombreLi = 0 ;

    function incrementationCompteur(){
        nombreLi++;
        document.querySelector(".nombreLi").textContent = nombreLi;
    }

    function decrementationCompteur(){
        nombreLi--;
        document.querySelector(".nombreLi").textContent = nombreLi;
    }

    return   {
        incrementationCompteur,
        decrementationCompteur
    };
})();





// declaration du compteur 

let nombreLi = 0 ;


const inputchamp = document.querySelector('#nomTache');   
const ouputchamp = document.querySelector('.list-group');


function creationBouttonSupprimer(){

    const boutonSupprimer = document.createElement('button');
    boutonSupprimer.className ='ms-auto btn btn-danger btn-sm';
    boutonSupprimer.innerHTML ='<i class="bi-trash"></i>';

    return boutonSupprimer ;
}

function actionButtonSupprimer(div){
    div.style.transform = 'translateY(-150px)'; 
    div.style.position   = 'relative';
    div.style.transition = 'transform 1s';

    setTimeout(function() {

        div.remove(); // Supprimer l'élément du DOM après que la transition d'opacité soit terminée

        // décrementation du nombre total de li 
        gestionnaireTache.decrementationCompteur();

    }, 1000);

}

// fonction modifier 

function creationBouttonModifier() {

    const boutonModifier = document.createElement('button');
    boutonModifier.className = 'btn btn-info ms-auto'; // Ajout de la classe ms-2 pour décalage à gauche
    boutonModifier.innerHTML = '<i class="fas fa-pencil-alt"></i> Modifier';

    // style sur le button 

    boutonModifier.style.color = '#fff';
    boutonModifier.style.backgroundColor = '#17a2b8';
    boutonModifier.style.borderColor = '#17a2b8';
    //boutonModifier.style.padding = '5px 10px';
    boutonModifier.style.borderRadius = '5px';


    return boutonModifier;
}

// ajout dans la todo_list 

function bouttonAjouter(){ 

    // creation d'une nouvlle li 
    const li = document.createElement('li');
    li.classList ='todo list-group-item d-flex align-items-center';

    // incrémentation des Li : le nombre total de li
    gestionnaireTache.incrementationCompteur();


    // creation du label
    const label = document.createElement("label");
    label.className ='ms-2 form-check-label';
    label.setAttribute('for' , 'todo-' + (ouputchamp.children.length + 1))

    // creation du inputCheckbox

    const inputCheckbox = document.createElement("input");
    inputCheckbox.classList = 'form-check-input';
    inputCheckbox.id = 'todo-' + (ouputchamp.children.length + 1);
    inputCheckbox.type = 'checkbox';
    
    // boutton suppression 
    const boutonSupprimer = creationBouttonSupprimer();

    boutonSupprimer.addEventListener('click',function(){
        actionButtonSupprimer(li);
    });

   


    const inputchampvalue = inputchamp.value;

    if(inputchampvalue !=="" ){
        // valeur dans le champs dans le nouveau contenu crée
        label.textContent = inputchampvalue.trim();

        // l'ajout dans ul 
        ouputchamp.appendChild(li);
        
        li.appendChild(inputCheckbox);
        li.appendChild(label);
     
        //li.appendChild(creationBouttonModifier());
        li.appendChild(boutonSupprimer);
        //li.appendChild(boutonSupprimer);

        inputchamp.value = "";
    }
    
}

