// ===========================JAVASCRIPT POUR EXO SUP 2 - COMBO===================================
// ===============================================================================================

// ============================DECLARATION DE CLASSE==============================================

class Combo {
  id_zone = "";
  id_select = "";
  class_select = "";
  data = "";

  // ==========================================Methodes=========================================

  generer() {
    if (this.id_zone == "" || this.id_select == "") {
      throw new Error(
        "Pour generer un Combo, il faut preciser la propriete id_zone et la propriete id_select"
      );
    }

    let myOptions = "";

    this.data.forEach((element) => {
      myOptions += `<option value="${element[0]}">${element[1]}</option>`;
    });

    let mySelect = `<select id="${this.id_select}" class="${this.class_select}">${myOptions}</select>`;

    document.getElementById(this.id_zone).innerHTML = mySelect;
  }

  // =================================

  fonction_change() {
    
    let selId = document.getElementById(this.id_select);

    selId.addEventListener("change", () => {
      alert("Select a change");
    });
  }

  // ==========================================Fin Class========================================
}

export {Combo};