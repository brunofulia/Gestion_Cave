// ===========================JAVASCRIPT POUR EXO GESTION CAVE====================================
// ===============================================================================================
// ==============================IMPORT MODULES===================================================

import { Table } from "./class_Table.js";
import { myAjaxAppellation } from "./00_init.js";

// ==============================DECLARATION DE FONCTIONS=========================================

// ========================Fonction Retour Parsed + Table

let retourParse = (reponse) => {

    let newObj = JSON.parse(reponse);

    tab.id_zone = "divId";
    tab.class_table = "table table-dark table-striped table-hover text-center";
    tab.data = newObj.APPELLATION.records;
    tab.header = newObj.APPELLATION.columns;

    tab.class_modif = "modRegion";
    tab.class_supr = "suprRegion";
    tab.class_vue = "vueRegion";
    tab.class_ajout = "ajoutRegion";

    tab.icone_vue = "btn btn-success btn-sm fas fa-eye";
    tab.icone_modif = "btn btn-info btn-sm fas fa-pencil";
    tab.icone_supr = "btn btn-danger btn-sm fas fa-trash";
    tab.icone_ajout = "btn btn-warning btn-sm fa-solid fa-folder-plus";

    tab.fonction_vue = vueItem;
    tab.fonction_modif = modifItem;
    tab.fonction_supr = suprItem;
    tab.fonction_ajout = ajoutItem;

    tab.separateur = "*";

    // ================Nouvelles proprietes pour classe Table

    tab.BS_toggle_modal = {
        attribut: "data-bs-toggle",
        valeur: "modal"
    };

    tab.BS_target_vue = {
        attribut: "data-bs-target",
        valeur: "frmVue"
    };

    tab.BS_target_modif = {
        attribut: "data-bs-target",
        valeur: "frmModif"
    };

    tab.BS_target_supr = {
        attribut: "data-bs-target",
        valeur: "frmSupr"
    };
    tab.BS_target_ajout = {
        attribut: "data-bs-target",
        valeur: "frmAjout"
    };

    tab.id_tbody = "tliste";
    tab.append = false;

    try {
        tab.generer();
    } catch (error) {
        alert(error.message);
    };
};

// =======================Fonction Error

function erreur(reponse) {
    alert("Erreur" + reponse);
};

// =======================Fonction Retour Ajout

function retourAjout(reponse) {
    alert(`Element ajouté! avec le code:  ${reponse}`);
    myAjaxAppellation.getAll(retourParse, erreur);
};

// =======================Fonction Retour Modif

function retourModif(reponse) {
    alert(`Element modifié!  ${reponse}`);
    myAjaxAppellation.getAll(retourParse, erreur);
}; 

// =======================Fonction Retour Del

function retourDel(reponse) {
    alert(`Element supprimé!  ${reponse}`);
    myAjaxAppellation.getAll(retourParse, erreur);
}

// =======================Fonctions pour Boutons
// -----------Ouvrir Modal Vue--------------------------------------

let vueItem = (event) => {
    let info = event.target.value.split(tab.separateur)
    document.getElementById('idVue1').value = info[0];
    document.getElementById('idVue2').value = info[1];
};

// -----------Ouvrir Modal Modifier---------------------------------

let modifItem = (event) => {
    let info = event.target.value.split(tab.separateur)
    document.getElementById('idModif1').value = info[0];
    document.getElementById('idModif2').value = info[1];
    document.getElementById('okModif').addEventListener("click", function () {
        let code = document.getElementById('idModif1').value;
        let appel = document.getElementById('idModif2').value;
        ajoutInfo = `NOMAPPELLATION=${appel}`;
        myAjaxAppellation.Cle = code;
    },
        false);
};

// ---------Confirmer Modif dans Modal

let confirmModif = () => {
    myAjaxAppellation.put(ajoutInfo, retourModif, erreur);
};

// -----------Ouvrir Modal Suppression------------------------------

let suprItem = (event) => {
    let info = event.target.value.split(tab.separateur)
    document.getElementById('idSupr1').value = info[0];
    document.getElementById('idSupr2').value = info[1];;
    document.getElementById('okSupr').addEventListener("click", function () {
        let code = document.getElementById('idSupr1').value;
        myAjaxAppellation.Cle = code;
    },
        false);
};

// ---------Confirmer Suppression dans Modal

let confirmSupr = () => {
    myAjaxAppellation.del(retourDel, erreur);
};

// -----------Ouvrir Modal Ajout-------------------------------------

let ajoutItem = () => {

    document.getElementById('okAjout').addEventListener("click", function () {
        let appel = document.getElementById('idAjout2').value;
        ajoutInfo = `NOMAPPELLATION=${appel}`;
    },
        false);
};

// ---------Confirmer Ajout dans Modal

let confirmAjout = () => {
    myAjaxAppellation.post(ajoutInfo, retourAjout, erreur);
};

// ============================DECLARATION DE VARIABLES===========================================

const tab = new Table();
let ajoutInfo = "";

// ==============================PROGRAMME PRINCIPAL==============================================
window.addEventListener("load", (event) => {
    // ======================================debut================================================

    // ------Generation Table

    myAjaxAppellation.getAll(retourParse, erreur);

    //------Zone de recherche

    document.getElementById("zoneRech").addEventListener("keyup", () => {
        
        let rows = document.getElementById("tliste").getElementsByTagName("tr");
       
        for(let item of rows) {
            if (!item.innerText.includes(document.getElementById("zoneRech").value)) {
                item.classList.add("visually-hidden") // Classe BS
            } else {
                item.classList.remove("visually-hidden") // Classe BS
            }
        }
    },
    false);

    // -----Listener to boutons de confirmation dans modals
    
    document.getElementById('enregAjout').addEventListener("click", confirmAjout, false);

    document.getElementById('enregModif').addEventListener("click", confirmModif, false);

    document.getElementById('enregSupr').addEventListener("click", confirmSupr, false);


    // ================================Fin Programme Principal====================================
});


