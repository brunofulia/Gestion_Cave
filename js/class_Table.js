// ===========================JAVASCRIPT POUR EXO SUP 1 - TABLE COMPLETE MP=======================
// ===============================================================================================

// ============================DECLARATION DE CLASSE==============================================

class Table {
  id_zone = "";
  class_table = "";
  data = "";
  header = "";
  class_modif = "";
  class_supr = "";
  class_vue = "";
  icone_modif = "";
  icone_vue = "";
  icone_supr = "";
  separateur = "";
  fonction_vue = null;
  fonction_modif = null;
  fonction_supr = null;
  fonction_ajout = null;
  

  //   ----------------nouvelle proprietes

  BS_class_vue = ""; //==> Class pour boutons dans modals
  BS_class_modif = ""; //==> Class pour boutons dans modals
  BS_class_supr = ""; //==> Class pour boutons dans modals
  BS_toggle_modal = {attribut : "", valeur : ""};
  BS_target_vue = {attribut : "", valeur : ""};
  BS_target_modif = {attribut : "", valeur : ""};
  BS_target_supr = {attribut : "", valeur : ""};
  BS_target_ajout = {attribut : "", valeur : ""};
  id_tbody = "";
  append = true;
  id_modalZone = ""; //==> Id de la zone pour inserer les modales (si vide pas de modal auto)
  txtModal1 = ""; //==> Text pour modal zone 1
  txtModal2 = ""; //==> Text pour modal zone 2
  txtModal3 = ""; //==> Text pour modal zone 3
  txtModal4 = ""; //==> Text pour modal zone 4
  conf_ajout = null; //==> Fonction confirmer sur modal
  conf_modif = null; //==> Fonction confirmer sur modal
  conf_supr = null; //==> Fonction confirmer sur modal

  // ==========================================Methodes=========================================

  // ======================================Fonction Generer=====================================

  generer() {

    let obj_actuel = this;

    if (this.id_zone == "") {
      throw new Error(
        "Pour generer une table, il faut preciser la propriete id_zone"
      );
    }

    // ===================================Generation HEADER

    let myTh = "";
    let myHead = "";

    // --------------------Generation th from array

    for (let i = 0; i < this.header.length; i++) {
      myTh += `<th>${this.header[i]}</th>`;
    }

    // --------------------Generation Head (Avec ou sans actions selon le cas)

    if (this.fonction_vue || this.fonction_modif || this.fonction_supr || this.fonction_ajout) {
      myHead = `<tr>${myTh}<th class="col-3">Actions</th></tr>`;
    } else {
      myHead = `<tr>${myTh}</tr>`;
    }

    // ===================================Generation ROWS

    let myTd = "";
    let btn1 = "";
    let btn2 = "";
    let btn3 = "";
    let btn4 = "";
    let myBtns = "";
    let myTr = "";

    this.data.forEach((element) => {
      // --------------------Generation td from array

      myTd = "";

      for (let i = 0; i < element.length; i++) {
        myTd += `<td>${element[i]}</td>`;
      }

      // --------------------Generation Bouton Vue

      if (this.fonction_vue) {
        btn1 = `<button type="button" class="${this.class_vue} ${this.icone_vue}" value="${element[0]}${this.separateur}${element[1]}${this.separateur}${element[2]}${this.separateur}${element[3]}${this.separateur}${element[4]}${this.separateur}${element[5]}${this.separateur}${element[6]}${this.separateur}${element[7]}${this.separateur}${element[8]}" ${this.BS_toggle_modal.attribut}="${this.BS_toggle_modal.valeur}" ${this.BS_target_vue.attribut}="#${this.BS_target_vue.valeur}">
        </button>`;
      };

      // --------------------Generation Bouton Modif

      if (this.fonction_modif) {
        btn2 = `<button type="button" class="${this.class_modif} ${this.icone_modif}" value="${element[0]}${this.separateur}${element[1]}${this.separateur}${element[2]}${this.separateur}${element[3]}${this.separateur}${element[4]}${this.separateur}${element[5]}${this.separateur}${element[6]}${this.separateur}${element[7]}${this.separateur}${element[8]}" ${this.BS_toggle_modal.attribut}="${this.BS_toggle_modal.valeur}" ${this.BS_target_modif.attribut}="#${this.BS_target_modif.valeur}">
        </button>`;
      };
    
      // --------------------Generation Bouton Supr

      if (this.fonction_supr) {
        btn3 = `<button type="button" class="${this.class_supr} ${this.icone_supr}" value="${element[0]}${this.separateur}${element[1]}${this.separateur}${element[2]}${this.separateur}${element[3]}${this.separateur}${element[4]}${this.separateur}${element[5]}${this.separateur}${element[6]}${this.separateur}${element[7]}${this.separateur}${element[8]}" ${this.BS_toggle_modal.attribut}="${this.BS_toggle_modal.valeur}" ${this.BS_target_supr.attribut}="#${this.BS_target_supr.valeur}">
        </button>`;
      };

      // --------------------Generation td avec Boutons

      myBtns = `<td>${btn1}${btn2}${btn3}</td>`;

      // --------------------Generation Rows (Avec ou sans Bouton/s selon le cas)

      if (this.fonction_vue || this.fonction_modif || this.fonction_supr) {
        myTr += `<tr>${myTd}${myBtns}</tr>`;
      } else {
        myTr += `<tr>${myTd}</tr>`;
      }
    });

    // =================================Generation Bouton Ajout

      if (this.fonction_ajout) {
        btn4 = `<button type="button" class="${this.class_ajout} ${this.icone_ajout}" ${this.BS_toggle_modal.attribut}="${this.BS_toggle_modal.valeur}" ${this.BS_target_ajout.attribut}="#${this.BS_target_ajout.valeur}"> Ajouter Item
        </button>`;
      }

    // ====================================Generation Table + Bouton Ajout

    let myTable = `${btn4}<table class="${this.class_table}"><thead>${myHead}</thead><tbody id="${this.id_tbody}">${myTr}</tbody></table>`;

    // ====================================Insertion Table dans HTML

    if (this.append) {
        document.getElementById(this.id_zone).insertAdjacentHTML("beforeend", myTable);
    } else {
        document.getElementById(this.id_zone).innerHTML = myTable; 
    };

    // ====================================Listener to boutons
    // ----------------------Bouton Ajout
    if (typeof this.fonction_ajout == "function") {
        let btnsAjout = document.querySelectorAll(`.${this.class_ajout}`);

        btnsAjout.forEach(btn => {
            btn.addEventListener("click", function (event) {
                obj_actuel.fonction_ajout(event)},
                false);
        });   
    };

    // ----------------------Bouton Vue
    if (typeof this.fonction_vue == "function") {
        let btnsVue = document.querySelectorAll(`.${this.class_vue}`);

        btnsVue.forEach(btn => {
            btn.addEventListener("click", function (event) {
                obj_actuel.fonction_vue(event)},
                false);
        });   
    };

    // ----------------------Bouton Modif
    if (typeof this.fonction_modif == "function") {
        let btnsModif = document.querySelectorAll(`.${this.class_modif}`);

        btnsModif.forEach(btn => {
            btn.addEventListener("click", function (event) {
                obj_actuel.fonction_modif(event)},
                false);
        });   
    };

    // ----------------------Bouton Supr
    if (typeof this.fonction_supr == "function") {
        let btnsSupr = document.querySelectorAll(`.${this.class_supr}`);

        btnsSupr.forEach(btn => {
            btn.addEventListener("click", function (event) {
                obj_actuel.fonction_supr(event)},
                false);
        });   
    };

    // ====================================Generation MODALS

    let modalVue = "";
    let modalModif = "";
    let modalSupr = "";
    let modalAjout = "";

    // --------------------Generation Modal Vue

    modalVue += `<div class="modal fade" id="${this.BS_target_vue.valeur}" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
              <div class="modal-header">
                  <h5 class="modal-title">Vue Item</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                  <form role="form">
                      <div class="form-group">
                          <label for="idVue1">${this.txtModal1}:</label>
                          <input type="text" class="form-control" id="idVue1" placeholder="" value="" disabled>
                      </div>
                      <div class="form-group">
                          <label for="idVue2">${this.txtModal2}:</label>
                          <input type="text" class="form-control" id="idVue2" placeholder="" value="" disabled>
                      </div>
                      <div class="form-group">
                          <label for="idVue3">${this.txtModal3}:</label>
                          <input type="text" class="form-control" id="idVue3" placeholder="" value="" disabled>
                      </div>
                      <div class="form-group">
                          <label for="idVue4">${this.txtModal4}:</label>
                          <input type="text" class="form-control" id="idVue4" placeholder="" value="" disabled>
                      </div>
                  </form>
              </div>
              <div class="modal-footer">
                  <button type="button" class="${this.BS_class_supr}" data-bs-dismiss="modal">Annuler</button> 
              </div>
          </div>
      </div>
    </div>`;

    // --------------------Generation Modal Modif

    modalModif += `<div class="modal fade" id="${this.BS_target_modif.valeur}" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
              <div class="modal-header">
                  <h5 class="modal-title">Modification d'une Item</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                  <form role="form">
                      <div class="form-group">
                          <label for="idModif1">${this.txtModal1}:</label>
                          <input type="text" class="form-control" id="idModif1" value="" disabled>
                      </div>
                      <div class="form-group">
                          <label for="idModif2">${this.txtModal2}:</label>
                          <input type="text" class="form-control" id="idModif2" value="">
                      </div>
                      <div class="form-group">
                          <label for="idModif3">${this.txtModal3}:</label>
                          <input type="text" class="form-control" id="idModif3" placeholder="" value="">
                      </div>
                      <div class="form-group">
                          <label for="idModif4">${this.txtModal4}:</label>
                          <input type="text" class="form-control" id="idModif4" placeholder="" value="">
                      </div>
                  </form>
              </div>
              <div class="modal-footer">
                    <button type="button" id="okModif" class="${this.BS_class_vue}" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#confirmModif">Enregistrer</button>
                    <button type="button" class="${this.BS_class_supr}" data-bs-dismiss="modal">Annuler</button> 
              </div>
          </div>
      </div>
    </div>
    <div class="modal fade" id="confirmModif" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
              <div class="modal-header">
                  <h5 class="modal-title">Confirm Modification</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                  Do you really want to confirm??
              </div>
              <div class="modal-footer">
                  <button type="button" id="enregModif" class="${this.BS_class_vue}" data-bs-dismiss="modal">Enregistrer</button>
                  <button type="button" class="${this.BS_class_supr}" data-bs-dismiss="modal">Annuler</button> 
              </div>
          </div>
      </div>
    </div>`
    ;

    // --------------------Generation Modal Supr

    modalSupr += `<div class="modal fade" id="${this.BS_target_supr.valeur}" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
              <div class="modal-header">
                  <h5 class="modal-title">Suppression d'une Item</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                  <form role="form">
                      <div class="form-group">
                          <label for="idSupr1">${this.txtModal1}:</label>
                          <input type="text" class="form-control" id="idSupr1" value="" disabled>
                      </div>
                      <div class="form-group">
                          <label for="idSupr2">${this.txtModal2}:</label>
                          <input type="text" class="form-control" id="idSupr2" value="" disabled>
                      </div>
                      <div class="form-group">
                          <label for="idSupr3">${this.txtModal3}:</label>
                          <input type="text" class="form-control" id="idSupr3" value="" disabled>
                      </div>
                      <div class="form-group">
                          <label for="idSupr4">${this.txtModal4}:</label>
                          <input type="text" class="form-control" id="idSupr4" value="" disabled>
                      </div>
                  </form>
              </div>
              <div class="modal-footer">
                    <button type="button" id="okSupr" class="${this.BS_class_vue}" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#confirmSupr">Supprimer</button>
                    <button type="button" class="${this.BS_class_supr}" data-bs-dismiss="modal">Annuler</button> 
              </div>
          </div>
      </div>
    </div>
    <div class="modal fade" id="confirmSupr" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
              <div class="modal-header">
                  <h5 class="modal-title">Confirm Suppression</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                  Do you really want to confirm??
              </div>
              <div class="modal-footer">
                  <button type="button" id="enregSupr" class="${this.BS_class_vue}" data-bs-dismiss="modal">Supprimer</button>
                  <button type="button" class="${this.BS_class_supr}" data-bs-dismiss="modal">Annuler</button> 
              </div>
          </div>
      </div>
    </div>`;

    // --------------------Generation Modal Ajout

    modalAjout += `<div class="modal fade" id="${this.BS_target_ajout.valeur}" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
              <div class="modal-header">
                  <h5 class="modal-title">Ajout d'une Item</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                  <form role="form">
                      <div class="form-group">
                          <label for="idAjout1">${this.txtModal1}:</label>
                          <input type="text" class="form-control" id="idAjout1" value="" disabled>
                      </div>
                      <div class="form-group">
                          <label for="idAjout2">${this.txtModal2}:</label>
                          <input type="text" class="form-control" id="idAjout2" placeholder="" value="">
                      </div>
                      <div class="form-group">
                          <label for="idAjout3">${this.txtModal3}:</label>
                          <input type="text" class="form-control" id="idAjout3" placeholder="" value="">
                      </div>
                      <div class="form-group">
                          <label for="idAjout4">${this.txtModal4}:</label>
                          <input type="text" class="form-control" id="idAjout4" placeholder="" value="">
                      </div>
                  </form>
              </div>
              <div class="modal-footer">
                  <button type="button" id="okAjout" class="${this.BS_class_vue}" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#confirmAjout">Enregistrer</button>
                  <button type="button" class="${this.BS_class_supr}" data-bs-dismiss="modal">Annuler</button> 
              </div>
          </div>
      </div>
    </div>
    <div class="modal fade" id="confirmAjout" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
              <div class="modal-header">
                  <h5 class="modal-title">Confirm Ajout</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                  Do you really want to confirm??
              </div>
              <div class="modal-footer">
                  <button type="button" id="enregAjout" class="${this.BS_class_vue}" data-bs-dismiss="modal" >Enregistrer</button>
                  <button type="button" class="${this.BS_class_supr}" data-bs-dismiss="modal">Annuler</button> 
              </div>
          </div>
      </div>
    </div>`;

    // onclick="MyFuncs.confirmAjout()"

    // ====================================Insertion Modal Pack dans HTML

    let myModals = `${modalVue}${modalModif}${modalSupr}${modalAjout}`;

    if (this.id_modalZone) {
        document.getElementById(this.id_modalZone).innerHTML += myModals;
    }


    // ====================================Listener to boutons on modals
    // ----------------------Bouton Confirm Ajout
    if (typeof this.conf_ajout == "function") {
        let confAjout = document.getElementById('enregAjout');

        confAjout.addEventListener("click",  obj_actuel.conf_ajout, false);
        };

    // ----------------------Bouton Confirm Modif
    if (typeof this.conf_modif == "function") {
        let confModif = document.getElementById('enregModif');
    
        confModif.addEventListener("click",  obj_actuel.conf_modif, false);
        };
        
    // ----------------------Bouton Confirm Supr
    if (typeof this.conf_supr == "function") {
        let confSupr = document.getElementById('enregSupr');
    
        confSupr.addEventListener("click",  obj_actuel.conf_supr, false);
        };    


    // ======================================Fin Fonction Generer===============================
  };

  // ==========================================Fin Class========================================
};

// ========================EXPORT DE MODULES==================================

export {Table};
