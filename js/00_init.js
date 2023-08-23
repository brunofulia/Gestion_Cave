// ===========================JAVASCRIPT POUR EXO GESTION CAVE====================================
// ========================IMPORT DE MODULES======================================================

import {Ajax_Es6}  from './Ajax_class.js';

// ========================DECLARATION DE VARIABLES===============================================


let urlApi = "https://afpafabrice.space/DWWM22031/Api/api.php/";
let urlApiPays = "https://afpafabrice.space/DWWM22031/Api/api.php/PAYS";
let urlApiCepage = "https://afpafabrice.space/DWWM22031/Api/api.php/CEPAGE";
let urlApiCouleur = "https://afpafabrice.space/DWWM22031/Api/api.php/COULEUR";
let urlApiRegion = "https://afpafabrice.space/DWWM22031/Api/api.php/REGION?include=PAYS&transform=1";
let urlApiVins = "https://afpafabrice.space/DWWM22031/Api/api.php/VIN?include=APPELLATION,REGION,COULEUR&transform=1";
let urlApiAppellation = "https://afpafabrice.space/DWWM22031/Api/api.php/APPELLATION";

const myAjaxPays = new Ajax_Es6(urlApiPays);
const myAjaxCepage = new Ajax_Es6(urlApiCepage);
const myAjaxCouleur = new Ajax_Es6(urlApiCouleur);
const myAjaxRegion = new Ajax_Es6(urlApiRegion);
const myAjaxVins = new Ajax_Es6(urlApiVins);
const myAjaxAppellation = new Ajax_Es6(urlApiAppellation);

// ========================EXPORT DE MODULES=====================================================


export {urlApi, myAjaxPays, myAjaxCepage, myAjaxCouleur, myAjaxRegion, myAjaxVins, myAjaxAppellation};