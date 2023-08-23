// ===========================JAVASCRIPT POUR EXO GESTION CAVE====================================
// ===============================================================================================
// ==============================IMPORT MODULES===================================================

import { Table } from "./class_Table.js";
import { myAjaxRegion, myAjaxPays, urlApi } from "./00_init.js";
import { Combo } from "./class_ComboBf.js";

// ==============================DECLARATION DE FONCTIONS=========================================

// ========================Fonction Retour Parsed + Generation Table

let retourParse = (reponse) => {

    let newObj = JSON.parse(reponse);

    let tabData = [];

    newObj.REGION.forEach(element => {
        let code = element.CODEREGION;
        let pays = element.PAYS[0].NOMPAYS;
        let region = element.NOMREGION;
        tabData.push([code, pays, region])

    });

    tab.id_zone = "divId";
    tab.class_table = "table table-dark table-striped table-hover text-center";
    tab.data = tabData;
    tab.header = ["Code Region", "Nom Pays", "Nom Region"];

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

    // ------------------------Nouvelles proprietes pour classe Table

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

// =========================================Fonction Error

function erreur(reponse) {
    alert("Erreur" + reponse);
};

// =========================================Fonction Retour Ajout

function retourAjout(reponse) {
    alert(`Element ajouté! avec le code:  ${reponse}`);
    myAjaxRegion.getAll(retourParse, erreur);
};

// =========================================Fonction Retour Modif

function retourModif(reponse) {
    alert(`Element modifié!  ${reponse}`);
    myAjaxRegion.getAll(retourParse, erreur);
};

// =======================Fonction Retour Del

function retourDel(reponse) {
    alert(`Element supprimé!  ${reponse}`);
    myAjaxRegion.getAll(retourParse, erreur);
}

// ==========================================Fonctions pour Boutons
// -----------Ouvrir Modal Vue--------------------------------------

let vueItem = (event) => {
    let info = event.target.value.split(tab.separateur)
    document.getElementById('idVue1').value = info[0];
    document.getElementById('idVue2').value = info[1];
    document.getElementById('idVue3').value = info[2];
};

// -----------Ouvrir Modal Modifier---------------------------------

let modifItem = (event) => {

    // alimenter_Combo_Pays(); //==> Dans programme principal, si on la appele ici, select_combo_text() ne marche pas. 

    let info = event.target.value.split(tab.separateur)
    document.getElementById('idModif1').value = info[0];
    document.getElementById('idModif3').value = info[2];

    select_combo_text('idPays2', info[1])

    document.getElementById('okModif').addEventListener("click", function () {
        let code = document.getElementById('idModif1').value;
        let pays = document.getElementById('idPays2').value;
        let region = document.getElementById('idModif3').value;
        ajoutInfo = `NOMREGION=${region}&CODEPAYS=${pays}`;
        myAjaxRegion.Cle = code;
    },
        false);
};

// ---------Confirmer Modif dans Modal

let confirmModif = () => {
    let url_base = myAjaxRegion.Url;
    myAjaxRegion.Url = urlApi + "REGION"
    myAjaxRegion.put(ajoutInfo, retourModif, erreur);
    myAjaxRegion.Url = url_base;
};

// -----------Ouvrir Modal Suppression------------------------------

let suprItem = (event) => {
    let info = event.target.value.split(tab.separateur)
    document.getElementById('idSupr1').value = info[0];
    document.getElementById('idSupr2').value = info[1];
    document.getElementById('idSupr3').value = info[2];

    document.getElementById('okSupr').addEventListener("click", function () {
        let code = document.getElementById('idSupr1').value;
        myAjaxRegion.Cle = code;
    },
        false);
};

// ---------Confirmer Suppression dans Modal

let confirmSupr = () => {
    let url_base = myAjaxRegion.Url;
    myAjaxRegion.Url = urlApi + "REGION"
    myAjaxRegion.del(retourDel, erreur);
    myAjaxRegion.Url = url_base;
};

// -----------Ouvrir Modal Ajout-------------------------------------

let ajoutItem = () => {

    alimenter_Combo_Pays();

    document.getElementById('idAjout2').value = "";

    document.getElementById('okAjout').addEventListener("click", function () {
        let pays = document.getElementById('idPays').value;
        let region = document.getElementById('idAjout2').value;
        ajoutInfo = `NOMREGION=${region}&CODEPAYS=${pays}`;
    },
        false);
};

// ---------Confirmer Ajout dans Modal

let confirmAjout = () => {

    let url_base = myAjaxRegion.Url;
    myAjaxRegion.Url = urlApi + "REGION"
    myAjaxRegion.Cle = ""; // Selection de colonnes dans l'API
    myAjaxRegion.post(ajoutInfo, retourAjout, erreur);
    myAjaxRegion.Url = url_base;
};

// ==========================================Fonctions Generation Combos
// -----------Generation Combo Pays

function retourAjaxGetPays(reponse) {
    let donnees = JSON.parse(reponse);
    let cb = new Combo();
    cb.id_zone = "idAjout1"; // Id de la zone dans laquelle le COMBO sera visible
    cb.id_select = "idPays"; // Attribut ID du Combo une fois généré.
    cb.class_select = "form-select"; // Attribut CLASS une fois le combo généré
    cb.data = donnees.PAYS.records; // Tableau à 2 dimensions (value / texte)
    try {
        cb.generer();
        // // Génération d'un 2eme COMBO identique dans une autre ZONE
        cb.id_zone = "idModif2";
        cb.id_select = "idPays2";
        cb.fonction_change = "";
        cb.generer();
    } catch (err) {
        alert(err.message);
    };
};

// -------Alimenter Combo Pays

function alimenter_Combo_Pays() {
    // Appel de l'API pour recuperer : pays
    let url_base = myAjaxPays.Url;
    myAjaxPays.Url = urlApi + "PAYS?order=NOMPAYS,asc"
    myAjaxPays.Cle = ""; // Selection de colonnes dans l'API
    myAjaxPays.get(retourAjaxGetPays, erreurAjax);
    myAjaxPays.Url = url_base;
};

// ----------Fonction Text Selectione Sur Combo

function select_combo_text(idCombo, text) {
    const select = document.querySelector(`#${idCombo}`);
    const options = Array.from(select.options);
    const optionToSelect = options.find(item => item.text === text);
    select.value = optionToSelect.value;
};

// ----------Fonction Error Combo

function erreurAjax(message) {
    alert("Erreur Combo Ajax: " + message);
};

// ============================DECLARATION DE VARIABLES===========================================

const tab = new Table();
let ajoutInfo = "";

// ==============================PROGRAMME PRINCIPAL==============================================
window.addEventListener("load", (event) => {
    // ======================================debut================================================

    // ------Generation Table

    myAjaxRegion.getAll(retourParse, erreur);

    //------Zone de recherche

    document.getElementById("zoneRech").addEventListener("keyup", () => {

        let rows = document.getElementById("tliste").getElementsByTagName("tr");

        for (let item of rows) {
            if (!item.innerText.includes(document.getElementById("zoneRech").value)) {
                item.classList.add("visually-hidden") // Classe BS
            } else {
                item.classList.remove("visually-hidden") // Classe BS
            }
        }
    },
        false);

    // -----Listener to boutons confirmation dans modals

    document.getElementById('enregAjout').addEventListener("click", confirmAjout, false);

    document.getElementById('enregModif').addEventListener("click", confirmModif, false);

    document.getElementById('enregSupr').addEventListener("click", confirmSupr, false);

    //-------Init combos

    alimenter_Combo_Pays();


    // ================================Fin Programme Principal====================================
});


