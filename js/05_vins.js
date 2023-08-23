// ===========================JAVASCRIPT POUR EXO GESTION CAVE====================================
// ===============================================================================================
// ==============================IMPORT MODULES===================================================

import { Table } from "./class_Table.js";
import {
  myAjaxVins,
  myAjaxAppellation,
  myAjaxRegion,
  myAjaxCouleur,
  urlApi,
} from "./00_init.js";
import { Combo } from "./class_ComboBf.js";

// ==============================DECLARATION DE FONCTIONS=========================================

// ========================Fonction Retour Parsed + Generation Table

let retourParse = (reponse) => {
  let newObj = JSON.parse(reponse);

  let tabData = [];

  newObj.VIN.forEach((element) => {
    let code = element.CODEVIN;
    let nomVin = element.NOM_CUVEE;
    let appellation = element.APPELLATION[0].NOMAPPELLATION;
    let region = element.REGION[0].NOMREGION;
    let couleur = element.COULEUR[0].NOMCOULEUR;
    let culture = element.TYPE_DE_CULTURE;
    let commentaires = element.COMMENTAIRES;
    tabData.push([
      code,
      nomVin,
      appellation,
      region,
      couleur,
      culture,
      commentaires,
    ]);
  });

  tab.id_zone = "divId";
  tab.class_table =
    "table table-sm table-dark table-striped table-hover text-center";
  tab.data = tabData;
  tab.header = [
    "Code Vin",
    "Nom Vin",
    "Appellation",
    "Region",
    "Couleur",
    "Culture",
    "Commentaires",
  ];

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
    valeur: "modal",
  };

  tab.BS_target_vue = {
    attribut: "data-bs-target",
    valeur: "frmVue",
  };

  tab.BS_target_modif = {
    attribut: "data-bs-target",
    valeur: "frmModif",
  };

  tab.BS_target_supr = {
    attribut: "data-bs-target",
    valeur: "frmSupr",
  };
  tab.BS_target_ajout = {
    attribut: "data-bs-target",
    valeur: "frmAjout",
  };

  tab.id_tbody = "tliste";
  tab.append = false;

  try {
    tab.generer();
  } catch (error) {
    alert(error.message);
  }
};

// =========================================Fonction Error

function erreur(reponse) {
  alert("Erreur" + reponse);
}

// =========================================Fonction Retour Ajout

function retourAjout(reponse) {
  alert(`Element ajouté! avec le code:  ${reponse}`);
  myAjaxVins.getAll(retourParse, erreur);
}

// =========================================Fonction Retour Modif

function retourModif(reponse) {
  alert(`Element modifié!  ${reponse}`);
  myAjaxVins.getAll(retourParse, erreur);
}

// =======================Fonction Retour Del

function retourDel(reponse) {
  alert(`Element supprimé!  ${reponse}`);
  myAjaxVins.getAll(retourParse, erreur);
}

// ==========================================Fonctions pour Boutons
// -----------Ouvrir Modal Vue--------------------------------------

let vueItem = (event) => {
  let info = event.target.value.split(tab.separateur);

  document.getElementById("idVue1").value = info[0];
  document.getElementById("idVue2").value = info[1];
  document.getElementById("idVue3").value = info[2];
  document.getElementById("idVue4").value = info[3];
  document.getElementById("idVue5").value = info[4];
  document.getElementById("idVue6").value = info[5];
  document.getElementById("idVue7").value = info[6];
};

// -----------Ouvrir Modal Modifier---------------------------------

let modifItem = (event) => {
  // alimenter_Combo_Pays(); //==> Dans programme principal, si on la appele ici, select_combo_text() ne marche pas.

  let info = event.target.value.split(tab.separateur);
  document.getElementById("idModif1").value = info[0];
  document.getElementById("idModif2").value = info[1];
  document.getElementById("idModif6").value = info[5];
  document.getElementById("idModif7").value = info[6];

  select_combo_text("idAppellation2", info[2]);
  select_combo_text("idRegion2", info[3]);
  select_combo_text("idCouleur2", info[4]);

  document.getElementById("okModif").addEventListener(
    "click",
    function () {
      let code = document.getElementById("idModif1").value;
      let vin = document.getElementById("idModif2").value;
      let appel = document.getElementById("idAppellation2").value;
      let region = document.getElementById("idRegion2").value;
      let couleur = document.getElementById("idCouleur2").value;
      let culture = document.getElementById("idModif6").value;
      let comment = document.getElementById("idModif7").value;

      ajoutInfo = `NOM_CUVEE=${vin}&CODEAPPELLATION=${appel}&CODEREGION=${region}&CODECOULEUR=${couleur}&TYPE_DE_CULTURE=${culture}&COMMENTAIRES=${comment}`;
      myAjaxVins.Cle = code;
      console.log(ajoutInfo);
    },
    false
  );
};

// ---------Confirmer Modif dans Modal

let confirmModif = () => {
  let url_base = myAjaxVins.Url;
  myAjaxVins.Url = urlApi + "VIN";
  myAjaxVins.put(ajoutInfo, retourModif, erreur);
  myAjaxVins.Url = url_base;
};

// -----------Ouvrir Modal Suppression------------------------------

let suprItem = (event) => {
  let info = event.target.value.split(tab.separateur);
  document.getElementById("idSupr1").value = info[0];
  document.getElementById("idSupr2").value = info[1];
  document.getElementById("idSupr3").value = info[2];
  document.getElementById("idSupr4").value = info[3];
  document.getElementById("idSupr5").value = info[4];
  document.getElementById("idSupr6").value = info[5];
  document.getElementById("idSupr7").value = info[6];

  document.getElementById("okSupr").addEventListener(
    "click",
    function () {
      let code = document.getElementById("idSupr1").value;
      myAjaxVins.Cle = code;
    },
    false
  );
};

// ---------Confirmer Suppression dans Modal

let confirmSupr = () => {
  let url_base = myAjaxVins.Url;
  myAjaxVins.Url = urlApi + "VIN";
  myAjaxVins.del(retourDel, erreur);
  myAjaxVins.Url = url_base;
};

// -----------Ouvrir Modal Ajout-------------------------------------

let ajoutItem = () => {
  alimenter_Combo_Appellation();
  alimenter_Combo_Regions();
  alimenter_Combo_Couleur();

  document.getElementById("idAjout1").value = "";
  document.getElementById("idAjout5").value = "";
  document.getElementById("idAjout6").value = "";

  document.getElementById("okAjout").addEventListener(
    "click",
    function () {
      let vin = document.getElementById("idAjout1").value;
      let appel = document.getElementById("idAppellation").value;
      let region = document.getElementById("idRegion").value;
      let couleur = document.getElementById("idCouleur").value;
      let culture = document.getElementById("idAjout5").value;
      let comment = document.getElementById("idAjout6").value;
      ajoutInfo = `NOM_CUVEE=${vin}&CODEAPPELLATION=${appel}&CODEREGION=${region}&CODECOULEUR=${couleur}&TYPE_DE_CULTURE=${culture}&COMMENTAIRES=${comment}`;
    },
    false
  );
};

// ---------Confirmer Ajout dans Modal

let confirmAjout = () => {
  let url_base = myAjaxVins.Url;
  myAjaxVins.Url = urlApi + "VIN";
  myAjaxVins.Cle = ""; // Selection de colonnes dans l'API
  myAjaxVins.post(ajoutInfo, retourAjout, erreur);
  myAjaxVins.Url = url_base;
};

// ==========================================Fonctions Generation Combos
// ----------------------------------Generation Combo Appellation

function retourAjaxGetAppellation(reponse) {
  let donnees = JSON.parse(reponse);
  let cb = new Combo();
  cb.id_zone = "idAjout2"; // Id de la zone dans laquelle le COMBO sera visible
  cb.id_select = "idAppellation"; // Attribut ID du Combo une fois généré.
  cb.class_select = "form-select"; // Attribut CLASS une fois le combo généré
  cb.data = donnees.APPELLATION.records; // Tableau à 2 dimensions (value / texte)
  try {
    cb.generer();
    // // Génération d'un 2eme COMBO identique dans une autre ZONE
    cb.id_zone = "idModif3";
    cb.id_select = "idAppellation2";
    cb.fonction_change = "";
    cb.generer();
  } catch (err) {
    alert(err.message);
  }
}

// -------Alimenter Combo Appellation

function alimenter_Combo_Appellation() {
  // Appel de l'API pour recuperer : pays
  let url_base = myAjaxAppellation.Url;
  myAjaxAppellation.Url = urlApi + "APPELLATION?order=NOMAPPELLATION,asc";
  myAjaxAppellation.Cle = ""; // Selection de colonnes dans l'API
  myAjaxAppellation.get(retourAjaxGetAppellation, erreurAjax);
  myAjaxAppellation.Url = url_base;
}

// -----------------------------Generation Combo Region

function retourAjaxGetRegions(reponse) {
  let donnees = JSON.parse(reponse);
  let cb = new Combo();
  cb.id_zone = "idAjout3"; // Id de la zone dans laquelle le COMBO sera visible
  cb.id_select = "idRegion"; // Attribut ID du Combo une fois généré.
  cb.class_select = "form-select"; // Attribut CLASS une fois le combo généré
  cb.data = donnees.REGION.records; // Tableau à 2 dimensions (value / texte)
  // console.log(cb.data);
  // cb.fonction_change = cbRegionChange;
  try {
    cb.generer();
    // // Génération d'un 2eme COMBO identique dans une autre ZONE
    cb.id_zone = "idModif4";
    cb.id_select = "idRegion2";
    cb.fonction_change = "";
    cb.generer();
  } catch (err) {
    alert(err.message);
  }
}

// -------Alimenter Combo Regions

function alimenter_Combo_Regions() {
  // Appel de l'API pour recuperer : region
  let url_base = myAjaxRegion.Url;
  // myAjaxRegion.Url = urlApi + "PAYS?order=NOMPAYS,asc"
  myAjaxRegion.Url =
    urlApi + "REGION?columns=CODEREGION,NOMREGION&order=NOMREGION,asc";
  myAjaxRegion.Cle = ""; // Selection de colonnes dans l'API
  myAjaxRegion.get(retourAjaxGetRegions, erreurAjax);
  myAjaxRegion.Url = url_base;
}

// ----------------------------------Generation Combo Couleur

function retourAjaxGetCouleur(reponse) {
  let donnees = JSON.parse(reponse);
  let cb = new Combo();
  cb.id_zone = "idAjout4"; // Id de la zone dans laquelle le COMBO sera visible
  cb.id_select = "idCouleur"; // Attribut ID du Combo une fois généré.
  cb.class_select = "form-select"; // Attribut CLASS une fois le combo généré
  cb.data = donnees.COULEUR.records; // Tableau à 2 dimensions (value / texte)
  try {
    cb.generer();
    // // Génération d'un 2eme COMBO identique dans une autre ZONE
    cb.id_zone = "idModif5";
    cb.id_select = "idCouleur2";
    cb.fonction_change = "";
    cb.generer();
  } catch (err) {
    alert(err.message);
  }
}

// -------Alimenter Combo Couleur

function alimenter_Combo_Couleur() {
  // Appel de l'API pour recuperer : pays
  let url_base = myAjaxCouleur.Url;
  myAjaxCouleur.Url = urlApi + "COULEUR?order=NOMCOULEUR,asc";
  myAjaxCouleur.Cle = ""; // Selection de colonnes dans l'API
  myAjaxCouleur.get(retourAjaxGetCouleur, erreurAjax);
  myAjaxCouleur.Url = url_base;
}

// -----------------------------------Fonction Text Selectione Sur Combo

function select_combo_text(idCombo, text) {
  const select = document.querySelector(`#${idCombo}`);
  const options = Array.from(select.options);
  const optionToSelect = options.find((item) => item.text === text);
  select.value = optionToSelect.value;
}

// ----------------------------------Fonction Error Combo

function erreurAjax(message) {
  alert("Erreur Combo Ajax: " + message);
}

// ============================DECLARATION DE VARIABLES===========================================

const tab = new Table();
let ajoutInfo = "";

// ==============================PROGRAMME PRINCIPAL==============================================
window.addEventListener("load", (event) => {
  // ======================================debut================================================

  // ------Generation Table

  myAjaxVins.getAll(retourParse, erreur);

  //------Zone de recherche

  document.getElementById("zoneRech").addEventListener(
    "keyup",
    () => {
      let rows = document.getElementById("tliste").getElementsByTagName("tr");

      for (let item of rows) {
        if (
          !item.innerText.includes(document.getElementById("zoneRech").value)
        ) {
          item.classList.add("visually-hidden"); // Classe BS
        } else {
          item.classList.remove("visually-hidden"); // Classe BS
        }
      }
    },
    false
  );

  // -----Listener to boutons confirmation dans modals

  document
    .getElementById("enregAjout")
    .addEventListener("click", confirmAjout, false);

  document
    .getElementById("enregModif")
    .addEventListener("click", confirmModif, false);

  document
    .getElementById("enregSupr")
    .addEventListener("click", confirmSupr, false);

  //-------Init combos

  alimenter_Combo_Appellation();
  alimenter_Combo_Regions();
  alimenter_Combo_Couleur();

  // ================================Fin Programme Principal====================================
});
