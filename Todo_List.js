

/* 
function Ajout_tache(tache){

    mytasks.push(tache)

}



const tache = document.querySelector("#nomTache")
 */
//mytasks.push(tache.value)

// bouton ajout de tâche 

/* const bouttonAjouter = document.querySelector("#buttonAjouter");

bouttonAjouter.addEventListener("click" , ()=> {
    Ajout_tache(tache.value)
});
 */









// une liste des taches à ajouter 

// à supprimmer 

// à modifier 


// stocker dans un tableau 


// voir le nombre de tâche 

const inputchamp = document.querySelector('#nomTache');   
const ouputchamp = document.querySelector('.list-group');

function bouttonAjouter(){

     // creation d'une nouvlle li 
    const li = document.createElement('li');
    li.classList ='todo list-group-item d-flex align-items-center';

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

    const boutonSupprimer = document.createElement('button');
    boutonSupprimer.className ='ms-auto btn btn-danger btn-sm';
    boutonSupprimer.innerHTML ='<i class="bi-trash"></i>';


    const inputchampvalue = inputchamp.value;

    if(inputchampvalue !=="" ){
        // valeur dans le champs dans le nouveau contenu crée
        label.textContent = inputchampvalue.trim();

        // l'ajout dans ul 
        ouputchamp.appendChild(li);
        
        li.appendChild(inputCheckbox);
        li.appendChild(label);
        li.appendChild(boutonSupprimer);

        inputchamp.value = "";
    }
    
}



















