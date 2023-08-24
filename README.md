**[DWWM22031 ECF1]{.underline}**

**[PROJET]{.underline}:**

**GESTION CAVE**

**[Auteur]{.underline}: Bruno Fulía**

**[Site Web Projet]{.underline}: cave1.brunofulia.fr**

**[Date]{.underline}: 24/08/2022**

**[E-mail]{.underline}: brunofulia@gmail.com**

![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image1.png){width="6.597222222222222in"
height="4.1666666666666664e-2in"}

AFPA DWWM22031 1

**[INDEX]{.underline}**

1.- Cahier des Charges\
2.- Description du Site Web\
2.1.- Page de Accueil\
2.2.- Tables de Référence\
2.2.1.- Tableaux de Gestion Simples 2.2.2.- Tableaux de Gestion de
Régions 2.3.- Catalogue des Vins\
2.4.- Boutons des Actions\
2.4.1.- Bouton Ajouter Item\
2.4.2.- Bouton Vue Item\
2.4.3.- Bouton Modifier Item\
2.4.4.- Bouton Supprimer Item\
2.5.- Page Connexion\
3.- Dossier Technique\
3.1.- Général\
3.2.- PAGE.HTML\
3.3.- PAGE.JS\
3.4.- INIT.JS\
3.5.- CLASS_AJAX.JS\
3.6.- CLASS_TABLE.JS\
3.6.- CLASS_COMBO.JS\
4.- Conclusion

![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image1.png){width="6.597222222222222in"
height="4.1666666666666664e-2in"}

AFPA DWWM22031 2

**1.-[Cahier des Charges]{.underline}**

Un client nous a commandé une application qui lui permettra de gérer sa
cave. Il voudra gérer son stock et gérer aussi les accords mets/vins.

Chaque vin appartient à un pays, une région, une appellation et un
cépage sous la forme de références. Un vin a une couleur mais une
appellation peut avoir plusieurs couleurs de vin.

Un vin peut s'accorder avec plusieurs mets et inversement.

Le gestionnaire de la cave peut gérer les références, les accords
mets/vins, les stocks et peut consulter les événements en rapport avec
la dégustation d'un vin.

Le sommelier peut gérer les accords mets/vins et les stocks.

Un service distant, web-service, doit permettre de consulter les stocks,
les accords mets/vins et les événements associés aux dégustations.

> ![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image1.png){width="6.597222222222222in"
> height="4.1666666666666664e-2in"}

AFPA DWWM22031 3

**2.- [Description du Site Web]{.underline}**

> Le site est composé de:
>
>  Une page d\'accueil,
>
>  Plusieurs pages pour la gestion des références:
>
>  Pays,
>
>  Cépage,
>
>  Couleur,
>
>  Région
>
>  Appellation
>
>  Une page pour le Catalogue de Vins
>
>  Une page « Connexion » pour la gestion du niveau
>
> d\'accès des différents types d\'utilisateurs.
>
> ![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image1.png){width="6.597222222222222in"
> height="4.1666666666666664e-2in"}

AFPA DWWM22031 4

**2.1.- Page de Accueil**

En arrivant sur le site, nous trouvons une page d'accueil, qui comporte
une barre de navigation, à l\'intérieur de laquelle se trouvent les
liens vers les différentes pages de gestion des tableaux ainsi que le
retour à la page d\'accueil. Cette barre de navigation est présente sur
toutes les pages.

Au centre de l\'écran se trouvent deux boutons qui nous permettent
d\'accéder à la page de connexion et au catalogue des vins (également
accessible depuis la barre de navigation).

![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image2.png){width="6.683333333333334in"
height="4.958333333333333in"}

> ![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image1.png){width="6.597222222222222in"
> height="4.1666666666666664e-2in"}

AFPA DWWM22031 5

![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image9.png){width="6.683333333333334in"
height="4.962375328083989in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image10.png){width="0.4861111111111111in"
height="0.1111111111111111in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image11.png){width="0.2777777777777778in"
height="9.722222222222222e-2in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image12.png){width="0.3194444444444444in"
height="0.1111111111111111in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image13.png){width="0.3194444444444444in"
height="0.1111111111111111in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image14.png){width="0.20833333333333334in"
height="0.1111111111111111in"}

> En diminuant la taille de l\'écran, la barre de navigation

devient pliable et les boutons sont repositionnés.

![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image3.png){width="1.7055555555555555in"
height="1.7069444444444444in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image4.png){width="1.706943350831146in"
height="1.7069444444444444in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image5.png){width="3.275in"
height="1.7069444444444444in"}

![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image6.png){width="1.7055555555555555in"
height="1.2749989063867018in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image7.png){width="1.706943350831146in"
height="1.2749989063867018in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image8.png){width="3.275in"
height="1.2749989063867018in"}

> ![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image1.png){width="6.597222222222222in"
> height="4.1666666666666664e-2in"}

AFPA DWWM22031 6

> *Détail des Dispositifs Mobiles*
>
> ![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image15.png){width="1.7055555555555555in"
> height="3.4138888888888888in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image16.png){width="1.7069444444444444in"
> height="3.4138888888888888in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image17.png){width="1.6972211286089238in"
> height="3.4138888888888888in"}
>
> ![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image18.png){width="1.7055555555555555in"
> height="1.1944444444444444in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image19.png){width="1.7069444444444444in"
> height="1.1944444444444444in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image20.png){width="1.6972211286089238in"
> height="1.1944444444444444in"}
>
> ![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image21.png){width="1.7069444444444444in"
> height="3.4125in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image22.png){width="1.7069444444444444in"
> height="3.4125in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image23.png){width="1.6972211286089238in"
> height="3.4125in"}
>
> ![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image24.png){width="1.7069444444444444in"
> height="1.2333333333333334in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image25.png){width="1.7069444444444444in"
> height="1.2333333333333334in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image26.png){width="1.6972211286089238in"
> height="1.2333333333333334in"}

![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image1.png){width="6.597222222222222in"
height="4.1666666666666664e-2in"}

AFPA DWWM22031 7

![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image27.png){width="6.684721128608924in"
height="4.963405511811024in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image28.png){width="0.375in"
height="6.944444444444445e-2in"}

**2.2.- Tables de Référence**\
2.2.1.- [Tableaux de Gestion Simples]{.underline}

Les pages consommant des informations fournies par des APIs simples
(Pays, Cépage, Couleur, Appellation), comportent un champ de recherche
et des boutons d'action permettant de manipuler les informations reçues
des APIs.

*(Ordinateur Générique)*

> ![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image1.png){width="6.597222222222222in"
> height="4.1666666666666664e-2in"}

AFPA DWWM22031 8

> Lorsque la fenêtre est réduite, la première colonne

disparaît et les autres colonnes adaptent leur taille

pour occuper l'espace disponible.

![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image29.png){width="1.7069444444444444in"
height="1.706943350831146in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image30.png){width="1.7055555555555555in"
height="1.706943350831146in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image31.png){width="1.706943350831146in"
height="1.706943350831146in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image32.png){width="1.5722222222222222in"
height="1.706943350831146in"}

![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image33.png){width="1.7069444444444444in"
height="1.7069444444444444in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image34.png){width="1.7055555555555555in"
height="1.7069444444444444in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image35.png){width="1.706943350831146in"
height="1.7069444444444444in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image36.png){width="1.5722222222222222in"
height="1.7069444444444444in"}

![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image37.png){width="1.7069444444444444in"
height="1.706943350831146in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image38.png){width="1.7055555555555555in"
height="1.706943350831146in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image39.png){width="1.706943350831146in"
height="1.706943350831146in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image40.png){width="1.5722222222222222in"
height="1.706943350831146in"}

![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image41.png){width="1.7069444444444444in"
height="0.9583333333333334in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image42.png){width="1.7055555555555555in"
height="0.9583333333333334in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image43.png){width="1.706943350831146in"
height="0.9583333333333334in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image44.png){width="1.5722222222222222in"
height="0.9583333333333334in"}

2.2.2.- [Tableau de Gestion de Régions]{.underline}

> Ce tableau consomme des informations fournies par une

API de complexité moyenne.

> ![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image1.png){width="6.597222222222222in"
> height="4.1666666666666664e-2in"}

AFPA DWWM22031 9

![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image45.png){width="6.684721128608924in"
height="4.963405511811024in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image46.png){width="4.1666666666666664e-2in"
height="4.1666666666666664e-2in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image47.png){width="0.375in"
height="6.944444444444445e-2in"}

Dans la version desktop, il génère un tableau de quatre colonnes et,
comme dans le cas précédent, il comporte un champ de recherche et des
boutons d\'action permettant de manipuler les informations reçues de
l'API.

*(Ordinateur Générique)*

Lorsque la taille de la fenêtre diminue, la première et la deuxième
colonnes disparaissent et les autres colonnes adaptent leur taille pour
occuper l'espace disponible. Les informations cachées dont accessibles
via le bouton « VUE ».

> ![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image1.png){width="6.597222222222222in"
> height="4.1666666666666664e-2in"}

AFPA DWWM22031 10

![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image59.png){width="1.7055555555555555in"
height="3.411111111111111in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image60.png){width="0.3333333333333333in"
height="8.333333333333333e-2in"}

![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image48.png){width="1.7069444444444444in"
height="3.4138888888888888in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image49.png){width="1.706943350831146in"
height="3.4138888888888888in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image50.png){width="1.5694444444444444in"
height="3.4138888888888888in"}

![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image51.png){width="1.7055555555555555in"
height="1.706943350831146in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image52.png){width="1.7069444444444444in"
height="1.706943350831146in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image53.png){width="1.706943350831146in"
height="1.706943350831146in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image54.png){width="1.5694444444444444in"
height="1.706943350831146in"}

![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image55.png){width="1.7055555555555555in"
height="0.9277766841644794in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image56.png){width="1.7069444444444444in"
height="0.9277766841644794in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image57.png){width="1.706943350831146in"
height="0.9277766841644794in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image58.png){width="1.5694444444444444in"
height="0.9277766841644794in"}

> ![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image1.png){width="6.597222222222222in"
> height="4.1666666666666664e-2in"}

AFPA DWWM22031 11

**2.3.- Catalogue des Vins**

Ce tableau consomme des informations fournies par une API plus complexe
que les cas précédents.

Dans la version desktop, il génère un tableau de huit colonnes et, comme
dans les cas précédents, il dispose d\'un champ de recherche et de
boutons d\'action qui vous permettent de manipuler les informations
reçues de l\'API.

![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image61.png){width="6.684721128608924in"
height="4.961110017497813in"}

*(Ordinateur Générique)*

Dans le cas de cette tableau, lorsque la taille de la fenêtre diminue,
toutes les colonnes disparaissent, sauf

> ![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image1.png){width="6.597222222222222in"
> height="4.1666666666666664e-2in"}

AFPA DWWM22031 12

NOM DU VIN et ACTIONS, qui adaptent leur taille pour

occuper l'espace disponible.

![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image62.png){width="1.7055555555555555in"
height="1.7055555555555555in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image63.png){width="1.7069444444444444in"
height="1.7055555555555555in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image64.png){width="1.706943350831146in"
height="1.7055555555555555in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image65.png){width="1.5694444444444444in"
height="1.7055555555555555in"}

![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image66.png){width="1.7055555555555555in"
height="3.4138888888888888in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image67.png){width="1.7069444444444444in"
height="3.4138888888888888in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image68.png){width="1.706943350831146in"
height="3.4138888888888888in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image69.png){width="1.5694444444444444in"
height="3.4138888888888888in"}

![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image70.png){width="1.7055555555555555in"
height="0.9611100174978128in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image71.png){width="1.7069444444444444in"
height="0.9611100174978128in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image72.png){width="1.706943350831146in"
height="0.9611100174978128in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image73.png){width="1.5694444444444444in"
height="0.9611100174978128in"}

> ![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image1.png){width="6.597222222222222in"
> height="4.1666666666666664e-2in"}

AFPA DWWM22031 13

![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image74.png){width="3.425in"
height="6.083011811023622in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image75.png){width="5.555555555555555e-2in"
height="4.1666666666666664e-2in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image76.png){width="0.6388888888888888in"
height="0.1111111111111111in"}

**2.4.- Boutons des Actions**

Chaque page présente quatre boutons qui vous permettent d\'interagir
avec les données fournies par l\'API:\
1.- Ajout Item.

> 2.- Vue Item.
>
> 3.- Modifier Item.
>
> 4.- Supprimer Item.
>
> ![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image1.png){width="6.597222222222222in"
> height="4.1666666666666664e-2in"}

AFPA DWWM22031 14

![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image77.png){width="6.6875in"
height="4.965469160104987in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image78.png){width="4.1666666666666664e-2in"
height="4.1666666666666664e-2in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image79.png){width="4.1666666666666664e-2in"
height="4.1666666666666664e-2in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image80.png){width="2.4722222222222223in"
height="0.4166666666666667in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image81.png){width="0.6805555555555556in"
height="8.333333333333333e-2in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image82.png){width="2.4583333333333335in"
height="0.2638888888888889in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image83.png){width="2.4722222222222223in"
height="0.3611111111111111in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image84.png){width="2.4722222222222223in"
height="0.4722222222222222in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image85.png){width="2.4722222222222223in"
height="0.3611111111111111in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image86.png){width="2.4583333333333335in"
height="0.2638888888888889in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image87.png){width="0.5416666666666666in"
height="9.722222222222222e-2in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image88.png){width="0.1388888888888889in"
height="0.1388888888888889in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image89.png){width="0.2777777777777778in"
height="0.1111111111111111in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image90.png){width="0.3472222222222222in"
height="9.722222222222222e-2in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image91.png){width="0.375in"
height="9.722222222222222e-2in"}

2.4.1.- [Bouton Ajouter Item]{.underline}

Ce bouton Ouvre une fenêtre modale qui vous permet d'ajouter un élément
a la base de données. Sa configuration change en fonction de la
complexité de la table gérée.

*(Ordinateur Générique)*

> ![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image1.png){width="6.597222222222222in"
> height="4.1666666666666664e-2in"}

AFPA DWWM22031 15

![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image94.png){width="0.3611111111111111in"
height="8.333333333333333e-2in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image95.png){width="1.7069444444444444in"
height="1.7069444444444444in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image96.png){width="1.8888888888888888in"
height="0.2638888888888889in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image97.png){width="0.18055555555555555in"
height="8.333333333333333e-2in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image98.png){width="0.1111111111111111in"
height="8.333333333333333e-2in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image99.png){width="1.8888888888888888in"
height="0.7083333333333334in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image100.png){width="1.7055555555555555in"
height="1.7055555555555555in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image101.png){width="1.7069444444444444in"
height="1.7069444444444444in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image102.png){width="1.7055555555555555in"
height="1.7055555555555555in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image103.png){width="0.25in"
height="8.333333333333333e-2in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image104.png){width="0.3194444444444444in"
height="9.722222222222222e-2in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image105.png){width="0.1111111111111111in"
height="0.1111111111111111in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image106.png){width="1.8888888888888888in"
height="0.3611111111111111in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image107.png){width="0.6388888888888888in"
height="6.944444444444445e-2in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image108.png){width="1.8888888888888888in"
height="0.25in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image109.png){width="0.3472222222222222in"
height="8.333333333333333e-2in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image110.png){width="1.8888888888888888in"
height="0.2638888888888889in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image111.png){width="1.7055555555555555in"
height="2.658863735783027in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image112.png){width="1.7069444444444444in"
height="2.655632108486439in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image113.png){width="1.375in"
height="0.2777777777777778in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image114.png){width="1.706943350831146in"
height="2.6556299212598424in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image115.png){width="0.75in"
height="0.2777777777777778in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image116.png){width="1.5722222222222222in"
height="2.6620188101487314in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image117.png){width="0.625in"
height="0.2777777777777778in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image118.png){width="0.25in"
height="8.333333333333333e-2in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image119.png){width="0.3333333333333333in"
height="8.333333333333333e-2in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image120.png){width="0.3333333333333333in"
height="8.333333333333333e-2in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image121.png){width="1.706943350831146in"
height="1.706943350831146in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image122.png){width="1.5722222222222222in"
height="1.707270341207349in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image123.png){width="0.1111111111111111in"
height="0.1111111111111111in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image124.png){width="2.388888888888889in"
height="0.25in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image125.png){width="0.18055555555555555in"
height="8.333333333333333e-2in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image126.png){width="0.1111111111111111in"
height="9.722222222222222e-2in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image127.png){width="0.19444444444444445in"
height="8.333333333333333e-2in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image128.png){width="1.706943350831146in"
height="1.706943350831146in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image129.png){width="1.5722222222222222in"
height="1.707270341207349in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image130.png){width="2.388888888888889in"
height="0.375in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image131.png){width="0.625in"
height="8.333333333333333e-2in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image132.png){width="2.388888888888889in"
height="0.25in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image133.png){width="0.3333333333333333in"
height="8.333333333333333e-2in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image134.png){width="2.388888888888889in"
height="0.25in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image135.png){width="2.388888888888889in"
height="0.4583333333333333in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image136.png){width="2.388888888888889in"
height="0.3472222222222222in"}

> ![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image92.png){width="0.3472222222222222in"
> height="9.722222222222222e-2in"}
>
> ![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image93.png){width="0.20833333333333334in"
> height="8.333333333333333e-2in"}

![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image1.png){width="6.597222222222222in"
height="4.1666666666666664e-2in"}

AFPA DWWM22031 16

![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image142.png){width="0.18055555555555555in"
height="8.333333333333333e-2in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image143.png){width="0.3333333333333333in"
height="8.333333333333333e-2in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image144.png){width="1.7055555555555555in"
height="1.7055555555555555in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image145.png){width="0.18055555555555555in"
height="8.333333333333333e-2in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image146.png){width="1.9027777777777777in"
height="0.2638888888888889in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image147.png){width="0.1111111111111111in"
height="8.333333333333333e-2in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image148.png){width="0.2222222222222222in"
height="8.333333333333333e-2in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image149.png){width="0.1111111111111111in"
height="9.722222222222222e-2in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image150.png){width="0.25in"
height="8.333333333333333e-2in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image151.png){width="0.2222222222222222in"
height="8.333333333333333e-2in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image152.png){width="1.7069444444444444in"
height="1.7069444444444444in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image153.png){width="0.6388888888888888in"
height="6.944444444444445e-2in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image154.png){width="1.9027777777777777in"
height="0.2638888888888889in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image155.png){width="0.3472222222222222in"
height="8.333333333333333e-2in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image156.png){width="1.9027777777777777in"
height="0.2638888888888889in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image157.png){width="0.3611111111111111in"
height="8.333333333333333e-2in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image158.png){width="1.9027777777777777in"
height="0.3611111111111111in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image159.png){width="1.9027777777777777in"
height="0.3611111111111111in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image160.png){width="1.7069444444444444in"
height="3.4069641294838147in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image161.png){width="1.7055555555555555in"
height="3.411111111111111in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image162.png){width="0.6111111111111112in"
height="0.2777777777777778in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image163.png){width="1.9027777777777777in"
height="0.3888888888888889in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image164.png){width="1.706943350831146in"
height="3.413886701662292in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image165.png){width="1.5694444444444444in"
height="3.4091240157480316in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image166.png){width="0.625in"
height="0.2916666666666667in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image167.png){width="2.4166666666666665in"
height="0.3888888888888889in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image168.png){width="2.4166666666666665in"
height="0.3472222222222222in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image169.png){width="2.4166666666666665in"
height="0.3611111111111111in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image170.png){width="2.4166666666666665in"
height="1.0972222222222223in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image171.png){width="0.2638888888888889in"
height="8.333333333333333e-2in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image172.png){width="0.19444444444444445in"
height="8.333333333333333e-2in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image173.png){width="0.1111111111111111in"
height="0.1111111111111111in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image174.png){width="1.706943350831146in"
height="1.706943350831146in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image175.png){width="1.5694444444444444in"
height="1.7060629921259842in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image176.png){width="2.4166666666666665in"
height="0.3611111111111111in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image177.png){width="0.3055555555555556in"
height="9.722222222222222e-2in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image178.png){width="0.20833333333333334in"
height="9.722222222222222e-2in"}

2.4.2.- [Bouton Vue Item]{.underline}

> Ce bouton ouvre une fenêtre modale qui vous permet

d'afficher les détails d'un élément. Il est

+-------------+-------------+-------------+-------------+-------------+
| parti       | utile       | lorsque     | vous        | > utilisez  |
| culièrement |             |             |             |             |
+=============+=============+=============+=============+=============+
+-------------+-------------+-------------+-------------+-------------+

l'application sur des appareils a petite écran.

> ![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image137.png){width="1.9027777777777777in"
> height="0.25in"}

![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image138.png){width="1.7055555555555555in"
height="0.9722222222222222in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image139.png){width="1.7069444444444444in"
height="0.9722222222222222in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image140.png){width="1.706943350831146in"
height="0.9722222222222222in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image141.png){width="1.5694444444444444in"
height="0.9722222222222222in"}

> ![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image1.png){width="6.597222222222222in"
> height="4.1666666666666664e-2in"}

AFPA DWWM22031 17

![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image188.png){width="1.7069444444444444in"
height="1.7069444444444444in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image189.png){width="0.18055555555555555in"
height="8.333333333333333e-2in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image190.png){width="1.7055555555555555in"
height="1.7055555555555555in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image191.png){width="1.9027777777777777in"
height="0.2638888888888889in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image192.png){width="0.18055555555555555in"
height="8.333333333333333e-2in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image193.png){width="0.1111111111111111in"
height="8.333333333333333e-2in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image194.png){width="0.1111111111111111in"
height="9.722222222222222e-2in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image195.png){width="0.2638888888888889in"
height="8.333333333333333e-2in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image196.png){width="0.3333333333333333in"
height="8.333333333333333e-2in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image197.png){width="0.7777777777777778in"
height="8.333333333333333e-2in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image198.png){width="1.4027777777777777in"
height="0.2777777777777778in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image199.png){width="1.7069444444444444in"
height="1.7069444444444444in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image200.png){width="1.8888888888888888in"
height="0.3888888888888889in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image201.png){width="1.7055555555555555in"
height="1.7055555555555555in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image202.png){width="1.706943350831146in"
height="1.706943350831146in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image203.png){width="1.5722222222222222in"
height="1.707270341207349in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image204.png){width="0.625in"
height="0.2777777777777778in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image205.png){width="0.75in"
height="0.2777777777777778in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image206.png){width="2.4166666666666665in"
height="0.3888888888888889in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image207.png){width="0.625in"
height="8.333333333333333e-2in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image208.png){width="2.4166666666666665in"
height="0.25in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image209.png){width="0.18055555555555555in"
height="8.333333333333333e-2in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image210.png){width="0.3472222222222222in"
height="9.722222222222222e-2in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image211.png){width="1.706943350831146in"
height="1.706943350831146in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image212.png){width="1.5722222222222222in"
height="1.707270341207349in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image213.png){width="0.2638888888888889in"
height="8.333333333333333e-2in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image214.png){width="0.3194444444444444in"
height="8.333333333333333e-2in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image215.png){width="0.7777777777777778in"
height="8.333333333333333e-2in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image216.png){width="0.1111111111111111in"
height="0.1111111111111111in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image217.png){width="1.8888888888888888in"
height="0.25in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image218.png){width="1.8888888888888888in"
height="0.3611111111111111in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image219.png){width="1.8888888888888888in"
height="0.3611111111111111in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image220.png){width="1.8888888888888888in"
height="0.3611111111111111in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image221.png){width="1.8888888888888888in"
height="0.25in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image222.png){width="1.7069444444444444in"
height="1.7069444444444444in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image223.png){width="1.7055555555555555in"
height="1.7055555555555555in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image224.png){width="2.4166666666666665in"
height="0.3611111111111111in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image225.png){width="2.4166666666666665in"
height="0.3472222222222222in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image226.png){width="1.706943350831146in"
height="1.706943350831146in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image227.png){width="1.5722222222222222in"
height="1.707270341207349in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image228.png){width="2.4166666666666665in"
height="0.25in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image229.png){width="0.3333333333333333in"
height="8.333333333333333e-2in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image230.png){width="2.4166666666666665in"
height="0.2638888888888889in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image231.png){width="0.3611111111111111in"
height="8.333333333333333e-2in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image232.png){width="2.4166666666666665in"
height="0.3611111111111111in"}

2.4.3.- [Bouton Modifier Item]{.underline}

> Ce bouton ouvre une fenêtre modale qui vous permet de

modifier les détails d'un élément. La zone « Code du

Vin » est gérée automatiquement par l'API et ne peut être

modifiée.

> ![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image179.png){width="0.2222222222222222in"
> height="8.333333333333333e-2in"}
>
> ![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image180.png){width="0.3333333333333333in"
> height="8.333333333333333e-2in"}

![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image181.png){width="0.16666666666666666in"
height="8.333333333333333e-2in"}

> ![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image182.png){width="0.3611111111111111in"
> height="8.333333333333333e-2in"}
>
> ![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image183.png){width="0.6388888888888888in"
> height="6.944444444444445e-2in"}

![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image184.png){width="1.7069444444444444in"
height="0.9486100174978128in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image185.png){width="1.7055555555555555in"
height="0.9486100174978128in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image186.png){width="1.706943350831146in"
height="0.9486100174978128in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image187.png){width="1.5722222222222222in"
height="0.9486100174978128in"}

> ![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image1.png){width="6.597222222222222in"
> height="4.1666666666666664e-2in"}

AFPA DWWM22031 18

![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image237.png){width="1.7055555555555555in"
height="5.113199912510936in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image238.png){width="1.7069444444444444in"
height="5.1069838145231845in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image239.png){width="0.6111111111111112in"
height="0.2638888888888889in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image240.png){width="0.6805555555555556in"
height="0.2638888888888889in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image241.png){width="0.5138888888888888in"
height="8.333333333333333e-2in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image242.png){width="0.375in"
height="8.333333333333333e-2in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image243.png){width="0.5277777777777778in"
height="8.333333333333333e-2in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image244.png){width="0.7361111111111112in"
height="8.333333333333333e-2in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image245.png){width="0.4722222222222222in"
height="8.333333333333333e-2in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image246.png){width="0.1111111111111111in"
height="0.1111111111111111in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image247.png){width="1.706943350831146in"
height="5.117361111111111in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image248.png){width="0.6666666666666666in"
height="0.2638888888888889in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image249.png){width="9.722222222222222e-2in"
height="8.333333333333333e-2in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image250.png){width="1.3333333333333333in"
height="9.722222222222222e-2in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image251.png){width="0.7361111111111112in"
height="8.333333333333333e-2in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image252.png){width="0.4861111111111111in"
height="8.333333333333333e-2in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image253.png){width="9.722222222222222e-2in"
height="9.722222222222222e-2in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image254.png){width="1.5694444444444444in"
height="5.110222003499563in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image255.png){width="0.625in"
height="0.2638888888888889in"}

2.4.4.- [Bouton Supprimer Item]{.underline}

> Ce bouton ouvre une fenêtre modale qui vous permet de

supprimer un élément. Cette fenêtre, ainsi que les

fenêtres « Ajouter » et « Modifier », ouvrent une

nouvelle fenêtre de confirmation avant de procéder a

l'action souhaitée.

![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image233.png){width="1.7055555555555555in"
height="0.9152766841644795in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image234.png){width="1.7069444444444444in"
height="0.9152766841644795in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image235.png){width="1.706943350831146in"
height="0.9152766841644795in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image236.png){width="1.5694444444444444in"
height="0.9152766841644795in"}

> ![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image1.png){width="6.597222222222222in"
> height="4.1666666666666664e-2in"}

AFPA DWWM22031 19

**2.5.- Page Connexion**

> Page de connexion (prévue et encore non implémenté)

pour gérer le niveau d'accès des différents types

d'utilisateurs.

![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image256.png){width="6.6875in"
height="4.963888888888889in"}

![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image257.png){width="1.7055555555555555in"
height="1.7055544619422571in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image258.png){width="1.7069444444444444in"
height="1.7055544619422571in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image259.png){width="1.706943350831146in"
height="1.7055544619422571in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image260.png){width="1.5694444444444444in"
height="1.7055544619422571in"}

![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image261.png){width="1.7055555555555555in"
height="1.3027777777777778in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image262.png){width="1.7069444444444444in"
height="1.3027777777777778in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image263.png){width="1.706943350831146in"
height="1.3027777777777778in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image264.png){width="1.5694444444444444in"
height="1.3027777777777778in"}

> ![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image1.png){width="6.597222222222222in"
> height="4.1666666666666664e-2in"}

AFPA DWWM22031 20

![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image265.png){width="5.194444444444445in"
height="1.7361111111111112in"}

**3.- [Dossier Technique ]{.underline}**\
**3.1.- Général**

L'application a été développe en utilisant les langages de programmation
HTML, CSS et JavaScript, pour consommer les APIs distant via des
requêtes AJAX.

Pour gérer le « Style » et la « Réactivité » de la page web j'ai utilise
Bootstrap 5, complété par du CSS pur pour des occasions spécifiques (par
exemple, des media-queries employées pour cacher les colonnes dans les
tableaux).

Le site a été code en utilisant « Vanilla »JavaScript et des fichiers de
classe (Ajax, Table et Combo), qui ont été lies en tant que modules a
l'aide des directives spéciales import/export.

*Diagramme de Liens*

+-----------------------------------------------------------------------+
| page.html                                                             |
|                                                                       |
| +---------------------+---------------------+---------------------+   |
| | > class_table.js    | page.js             | class_combo.js      |   |
| +=====================+=====================+=====================+   |
| |                     | init.js             | class_ajax.js       |   |
| +---------------------+---------------------+---------------------+   |
+=======================================================================+
+-----------------------------------------------------------------------+

> ![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image1.png){width="6.597222222222222in"
> height="4.1666666666666664e-2in"}

AFPA DWWM22031 21

**3.2.- PAGE.HTML**

> Cette image représentent la structure basique de la

partie head de chaque fichier HTML. Bootstrap 5 et les

Icônes sont chargés à partir de serveurs https, et dans

les balises de style se trouve le CSS individuel pour

chaque page.

![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image266.png){width="1.7069444444444444in"
height="1.7055555555555555in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image267.png){width="1.706943350831146in"
height="1.7055555555555555in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image268.png){width="1.7069444444444444in"
height="1.7055555555555555in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image269.png){width="1.4416655730533683in"
height="1.7055555555555555in"}

![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image270.png){width="1.7069444444444444in"
height="1.7069444444444444in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image271.png){width="1.706943350831146in"
height="1.7069444444444444in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image272.png){width="1.7069444444444444in"
height="1.7069444444444444in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image273.png){width="1.4416655730533683in"
height="1.7069444444444444in"}

![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image274.png){width="1.7069444444444444in"
height="1.706943350831146in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image275.png){width="1.706943350831146in"
height="1.706943350831146in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image276.png){width="1.7069444444444444in"
height="1.706943350831146in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image277.png){width="1.4416655730533683in"
height="1.706943350831146in"}

![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image278.png){width="1.7069444444444444in"
height="0.16666666666666666in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image279.png){width="1.706943350831146in"
height="0.16666666666666666in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image279.png){width="1.7069444444444444in"
height="0.16666666666666666in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image280.png){width="1.4416655730533683in"
height="0.16666666666666666in"}

> ![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image1.png){width="6.597222222222222in"
> height="4.1666666666666664e-2in"}

AFPA DWWM22031 22

Cette deuxième image représentent la structure basique de la partie body
de chaque fichier HTML.

> ![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image281.png){width="1.7055544619422571in"
> height="1.7055555555555555in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image282.png){width="1.7069444444444444in"
> height="1.7055555555555555in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image283.png){width="1.706943350831146in"
> height="1.7055555555555555in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image284.png){width="1.023611111111111in"
> height="1.7055555555555555in"}
>
> ![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image285.png){width="1.7055544619422571in"
> height="3.4138888888888888in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image286.png){width="1.7069444444444444in"
> height="3.4138888888888888in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image287.png){width="1.706943350831146in"
> height="3.4138888888888888in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image288.png){width="1.023611111111111in"
> height="3.4138888888888888in"}
>
> ![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image289.png){width="1.7055544619422571in"
> height="0.3902777777777778in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image290.png){width="1.7069444444444444in"
> height="0.3902777777777778in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image291.png){width="1.706943350831146in"
> height="0.3902777777777778in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image292.png){width="1.023611111111111in"
> height="0.3902777777777778in"}

La zone identifiée comme \"DIV POUR TABLE\" est une balise div vide qui
recevra la table générée par le fichier page.js en utilisant la
class_table importée.

Bien que la class_table dispose de la méthode permettant de générer
automatiquement ses propres modales, pour ce projet, j\'ai choisi de
développer les modales directement dans chaque page HTML.

> ![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image1.png){width="6.597222222222222in"
> height="4.1666666666666664e-2in"}

AFPA DWWM22031 23

**3.3.- PAGE.JS**

> Cette image représentent la structure basique de la

importation de éléments JavaScript et génération des

tableaux de chaque fichier page.js. Les objets ajax sont

importés du fichier init.js, puis utilisés pour générer

les tableaux et les combos, importés de leurs classes

respectives.

![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image293.png){width="1.7069444444444444in"
height="1.7069444444444444in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image294.png){width="1.7055555555555555in"
height="1.7069444444444444in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image295.png){width="1.706943350831146in"
height="1.7069444444444444in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image296.png){width="0.5722211286089239in"
height="1.7069444444444444in"}

![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image297.png){width="1.7069444444444444in"
height="1.706943350831146in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image298.png){width="1.7055555555555555in"
height="1.706943350831146in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image276.png){width="1.706943350831146in"
height="1.706943350831146in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image299.png){width="0.5722211286089239in"
height="1.706943350831146in"}

![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image300.png){width="1.7069444444444444in"
height="1.7055555555555555in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image301.png){width="1.7055555555555555in"
height="1.7055555555555555in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image302.png){width="1.706943350831146in"
height="1.7055555555555555in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image299.png){width="0.5722211286089239in"
height="1.7055555555555555in"}

![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image303.png){width="1.7069444444444444in"
height="1.1749989063867017in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image304.png){width="1.7055555555555555in"
height="1.1749989063867017in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image305.png){width="1.706943350831146in"
height="1.1749989063867017in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image306.png){width="0.5722211286089239in"
height="1.1749989063867017in"}

> ![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image1.png){width="6.597222222222222in"
> height="4.1666666666666664e-2in"}

AFPA DWWM22031 24

La fonction « retourParse » prend les informations obtenues de l\'API
par la méthode « get » de l\'objet« Ajax », transforme la réponse par la
méthode« JSON.parse » et utilise ces informations pour générer les
tableaux à insérer dans le « div » prévu à cet effet dans le fichier
page.html, en utilisant la méthode« generer » de la class_table.

![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image307.png){width="1.7069444444444444in"
height="3.4138888888888888in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image308.png){width="1.7055555555555555in"
height="3.4138888888888888in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image309.png){width="1.706943350831146in"
height="3.4138888888888888in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image310.png){width="0.15555446194225722in"
height="3.4138888888888888in"}

![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image311.png){width="1.7069444444444444in"
height="1.706943350831146in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image312.png){width="1.7055555555555555in"
height="1.706943350831146in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image313.png){width="1.706943350831146in"
height="1.706943350831146in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image314.png){width="0.15555446194225722in"
height="1.706943350831146in"}

![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image315.png){width="1.7069444444444444in"
height="0.6486111111111111in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image316.png){width="1.7055555555555555in"
height="0.6486111111111111in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image317.png){width="1.706943350831146in"
height="0.6486111111111111in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image318.png){width="0.15555446194225722in"
height="0.6486111111111111in"}

Les fonctions « Ouvrir Modals » capturent les valeurs présentes dans la
ligne du tableau sélectionné et les affichent dans le champ
correspondant de chaque modal.

> S\'il s\'agit d\'une modale de création, de modification
>
> ![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image1.png){width="6.597222222222222in"
> height="4.1666666666666664e-2in"}

AFPA DWWM22031 25

ou de suppression, lorsque vous cliquez sur enregistrer, ils capturent
les informations présentes dans les champs de la modale, les ajoutent à
la variable \"ajoutInfo\" et utilisent ces informations pour créer,
ajouter ou supprimer des informations de la base de données à l\'aide
des méthodes fournies dans la classe « Ajax » (post, put et del).

+-----------------+-----------------+-----------------+-----------------+
| Les             | > ![](          |                 | et              |
|                 | vertopal_056132 |                 |                 |
|                 | ff58fa45a48bba4 |                 |                 |
|                 | 44f6fe3943c/med |                 |                 |
|                 | ia/image319.png |                 |                 |
|                 | ){width="1.7069 |                 |                 |
|                 | 444444444444in" |                 |                 |
|                 | > hei           |                 |                 |
|                 | ght="1.70555446 |                 |                 |
|                 | 19422571in"}![] |                 |                 |
|                 | (vertopal_05613 |                 |                 |
|                 | 2ff58fa45a48bba |                 |                 |
|                 | 444f6fe3943c/me |                 |                 |
|                 | dia/image320.pn |                 |                 |
|                 | g){width="1.706 |                 |                 |
|                 | 943350831146in" |                 |                 |
|                 | > height=       |                 |                 |
|                 | "1.705554461942 |                 |                 |
|                 | 2571in"}![](ver |                 |                 |
|                 | topal_056132ff5 |                 |                 |
|                 | 8fa45a48bba444f |                 |                 |
|                 | 6fe3943c/media/ |                 |                 |
|                 | image321.png){w |                 |                 |
|                 | idth="1.1875in" |                 |                 |
|                 | >               |                 |                 |
|                 | height="1.70555 |                 |                 |
|                 | 44619422571in"} |                 |                 |
+=================+=================+=================+=================+
|                 | > ![](          |                 |                 |
|                 | vertopal_056132 |                 |                 |
|                 | ff58fa45a48bba4 |                 |                 |
|                 | 44f6fe3943c/med |                 |                 |
|                 | ia/image322.png |                 |                 |
|                 | ){width="1.7069 |                 |                 |
|                 | 444444444444in" |                 |                 |
|                 | > hei           |                 |                 |
|                 | ght="3.41388888 |                 |                 |
|                 | 88888888in"}![] |                 |                 |
|                 | (vertopal_05613 |                 |                 |
|                 | 2ff58fa45a48bba |                 |                 |
|                 | 444f6fe3943c/me |                 |                 |
|                 | dia/image323.pn |                 |                 |
|                 | g){width="1.706 |                 |                 |
|                 | 943350831146in" |                 |                 |
|                 | > height=       |                 |                 |
|                 | "3.413888888888 |                 |                 |
|                 | 8888in"}![](ver |                 |                 |
|                 | topal_056132ff5 |                 |                 |
|                 | 8fa45a48bba444f |                 |                 |
|                 | 6fe3943c/media/ |                 |                 |
|                 | image324.png){w |                 |                 |
|                 | idth="1.1875in" |                 |                 |
|                 | >               |                 |                 |
|                 | height="3.41388 |                 |                 |
|                 | 88888888888in"} |                 |                 |
+-----------------+-----------------+-----------------+-----------------+
|                 | > ![](          |                 |                 |
|                 | vertopal_056132 |                 |                 |
|                 | ff58fa45a48bba4 |                 |                 |
|                 | 44f6fe3943c/med |                 |                 |
|                 | ia/image325.png |                 |                 |
|                 | ){width="1.7069 |                 |                 |
|                 | 444444444444in" |                 |                 |
|                 | > hei           |                 |                 |
|                 | ght="1.27499890 |                 |                 |
|                 | 63867018in"}![] |                 |                 |
|                 | (vertopal_05613 |                 |                 |
|                 | 2ff58fa45a48bba |                 |                 |
|                 | 444f6fe3943c/me |                 |                 |
|                 | dia/image326.pn |                 |                 |
|                 | g){width="1.706 |                 |                 |
|                 | 943350831146in" |                 |                 |
|                 | > height=       |                 |                 |
|                 | "1.274998906386 |                 |                 |
|                 | 7018in"}![](ver |                 |                 |
|                 | topal_056132ff5 |                 |                 |
|                 | 8fa45a48bba444f |                 |                 |
|                 | 6fe3943c/media/ |                 |                 |
|                 | image327.png){w |                 |                 |
|                 | idth="1.1875in" |                 |                 |
|                 | >               |                 |                 |
|                 | height="1.27499 |                 |                 |
|                 | 89063867018in"} |                 |                 |
+-----------------+-----------------+-----------------+-----------------+
|                 | fonctions       | > «             |                 |
|                 |                 | >               |                 |
|                 |                 | alimenter_Combo |                 |
|                 |                 | > »             |                 |
+-----------------+-----------------+-----------------+-----------------+

« retourAjaxGet » utilisent la méthode « get » de la

> ![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image1.png){width="6.597222222222222in"
> height="4.1666666666666664e-2in"}

AFPA DWWM22031 26

classe « Ajax » pour consommer l\'API correspondante et

générer un « combo select » avec les informations

obtenues, qui sera utilisé par les modales « Ajouter » et

« Modifier » des APIs « Régions » et « Vins ».

![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image328.png){width="1.7055555555555555in"
height="1.706943350831146in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image329.png){width="1.7069444444444444in"
height="1.706943350831146in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image330.png){width="2.1430555555555557in"
height="1.706943350831146in"}

![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image331.png){width="1.7055555555555555in"
height="1.7069444444444444in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image332.png){width="1.7069444444444444in"
height="1.7069444444444444in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image333.png){width="2.1430555555555557in"
height="1.7069444444444444in"}

![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image334.png){width="1.7055555555555555in"
height="1.7069444444444444in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image335.png){width="1.7069444444444444in"
height="1.7069444444444444in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image336.png){width="2.1430555555555557in"
height="1.7069444444444444in"}

![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image337.png){width="1.7055555555555555in"
height="0.983332239720035in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image338.png){width="1.7069444444444444in"
height="0.983332239720035in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image339.png){width="2.1430555555555557in"
height="0.983332239720035in"}

> Lorsque le programme principal démarre, la méthode

« Get » de l\'objet « Ajax » est exécutée pour générer le

tableau, les « combos select » sont initialisés, et les

« addEventListener » de la fonction de recherche et des

boutons de confirmation d\'action sont chargés.

> ![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image1.png){width="6.597222222222222in"
> height="4.1666666666666664e-2in"}

AFPA DWWM22031 27

**3.4.- INIT.JS**

![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image340.png){width="1.7055555555555555in"
height="1.7069444444444444in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image341.png){width="1.7069444444444444in"
height="1.7069444444444444in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image342.png){width="1.706943350831146in"
height="1.7069444444444444in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image343.png){width="1.573611111111111in"
height="1.7069444444444444in"}

![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image344.png){width="1.7055555555555555in"
height="1.706943350831146in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image345.png){width="1.7069444444444444in"
height="1.706943350831146in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image346.png){width="1.706943350831146in"
height="1.706943350831146in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image347.png){width="1.573611111111111in"
height="1.706943350831146in"}

![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image348.png){width="1.7055555555555555in"
height="0.29305555555555557in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image349.png){width="1.7069444444444444in"
height="0.29305555555555557in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image350.png){width="1.706943350831146in"
height="0.29305555555555557in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image351.png){width="1.573611111111111in"
height="0.29305555555555557in"}

> Le fichier init.js importe la classe « Ajax » et

l\'utilise, ainsi que les urls définies dans ce fichier,

pour générer les objets « Ajax » qui seront exportés vers

le reste des fichiers au fur et à mesure de leurs

besoins.

**3.5.- CLASS_AJAX.JS**

> Cette classe permet la création d\'objets « Ajax » et

fournit les méthodes « get », « post », « put » et

« del », qui sont utilisées pour consommer l\'APIs en

obtenant, créant, modifiant ou supprimant des

informations respectivement.

> ![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image1.png){width="6.597222222222222in"
> height="4.1666666666666664e-2in"}

AFPA DWWM22031 28

![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image352.png){width="1.7069444444444444in"
height="1.7069444444444444in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image353.png){width="1.2944433508311461in"
height="1.7069444444444444in"}

![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image354.png){width="1.7069444444444444in"
height="1.706943350831146in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image355.png){width="1.2944433508311461in"
height="1.706943350831146in"}

![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image356.png){width="1.7069444444444444in"
height="1.6875in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image357.png){width="1.2944433508311461in"
height="1.6875in"}

**3.6.- CLASS_TABLE.JS**

> La classe « Table » est importée par le fichier

« page.js » pour générer les tableaux à insérer dans le

corps du fichier « page.html ».

> Cette première image montre la liste des propriétés

que cette classe a la possibilité d\'utiliser pour générer

les tableaux de manière dynamique.

> ![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image1.png){width="6.597222222222222in"
> height="4.1666666666666664e-2in"}

AFPA DWWM22031 29

![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image358.png){width="1.7055544619422571in"
height="1.7069444444444444in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image359.png){width="1.7069444444444444in"
height="1.7069444444444444in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image360.png){width="1.706943350831146in"
height="1.7069444444444444in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image361.png){width="0.4736111111111111in"
height="1.7069444444444444in"}

![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image362.png){width="1.7055544619422571in"
height="3.4125in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image363.png){width="1.7069444444444444in"
height="3.4125in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image364.png){width="1.706943350831146in"
height="3.4125in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image365.png){width="0.4736111111111111in"
height="3.4125in"}

![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image366.png){width="1.7055544619422571in"
height="0.8152777777777778in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image367.png){width="1.7069444444444444in"
height="0.8152777777777778in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image368.png){width="1.706943350831146in"
height="0.8152777777777778in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image369.png){width="0.4736111111111111in"
height="0.8152777777777778in"}

> L\'image ci-dessous montre le code de la classe table

pour la génération des en-têtes et des lignes, à partir

des informations contenues dans Table.data.

> ![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image1.png){width="6.597222222222222in"
> height="4.1666666666666664e-2in"}

AFPA DWWM22031 30

> ![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image370.png){width="1.7055555555555555in"
> height="3.4138888888888888in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image371.png){width="3.4138888888888888in"
> height="3.4138888888888888in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image372.png){width="0.43611001749781275in"
> height="3.4138888888888888in"}
>
> ![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image373.png){width="1.7055555555555555in"
> height="1.7069444444444444in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image374.png){width="3.4138888888888888in"
> height="1.7069444444444444in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image375.png){width="0.43611001749781275in"
> height="1.7069444444444444in"}
>
> ![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image376.png){width="1.7055555555555555in"
> height="1.706943350831146in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image377.png){width="3.4138888888888888in"
> height="1.706943350831146in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image378.png){width="0.43611001749781275in"
> height="1.706943350831146in"}
>
> ![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image379.png){width="1.7055555555555555in"
> height="0.5597211286089239in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image380.png){width="3.4138888888888888in"
> height="0.5597211286089239in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image381.png){width="0.43611001749781275in"
> height="0.5597211286089239in"}
>
> Ensuite, les boutons d\'action sont créés et, enfin,

la classe se charge d\'insérer le tableau par la méthode

  --------------------------------------------------------------------------
  « document.innerHTML et                d\'ajouter        les
  »                                                        
  -------------------- ----------------- ----------------- -----------------

  --------------------------------------------------------------------------

« addEventListener » aux boutons d\'action.

> ![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image1.png){width="6.597222222222222in"
> height="4.1666666666666664e-2in"}

AFPA DWWM22031 31

**3.7.- CLASS_COMBO.JS**

> La classe « Combo » est importée par le fichier

« page.js » pour générer les « combo select » à insérer

dans les modals du fichier « page.html ».

> ![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image382.png){width="1.7069444444444444in"
> height="1.706943350831146in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image383.png){width="3.4125in"
> height="1.706943350831146in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image384.png){width="0.8138888888888889in"
> height="1.706943350831146in"}
>
> ![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image385.png){width="1.7069444444444444in"
> height="1.7069444444444444in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image386.png){width="3.4125in"
> height="1.7069444444444444in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image387.png){width="0.8138888888888889in"
> height="1.7069444444444444in"}
>
> ![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image388.png){width="1.7069444444444444in"
> height="1.706943350831146in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image389.png){width="3.4125in"
> height="1.706943350831146in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image390.png){width="0.8138888888888889in"
> height="1.706943350831146in"}
>
> ![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image391.png){width="1.7069444444444444in"
> height="0.9388888888888889in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image392.png){width="3.4125in"
> height="0.9388888888888889in"}![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image393.png){width="0.8138888888888889in"
> height="0.9388888888888889in"}
>
> ![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image1.png){width="6.597222222222222in"
> height="4.1666666666666664e-2in"}

AFPA DWWM22031 32

**4.- [Conclusion]{.underline}**

Je trouve que la création de ce site web a été un exercice de synthèse
très intéressant qui m\'a permis de mettre en pratique, dans un même
projet, la totalité des langages et des technologies vus depuis le début
de la formation.

En ce sens, je considère qu\'il est très judicieux de faire utiliser à
l\'étudiant les outils et le code qu\'il a préalablement développés.
D\'une part, cette situation génère une grande satisfaction personnelle
et permet à chacun d\'apprécier les progrès réalisés depuis le début de
la formation.

Mais plus important encore, il met chaque étudiant en position de juge
de lui-même, si le code avec lequel chacun doit travailler n\'est pas
bon, est mal commenté, est désordonné, bref ne respecte pas les bonnes
pratiques de codage ; c\'est soi-même qui a causé le problème et qui en
subit les conséquences, et il n\'y a pas de tiers à blâmer.

Dans mon cas particulier, avant la création du site web objet de
l\'exercice, j\'ai dû passer du temps à modifier certaines parties de ma
classe « table », pour corriger de mauvaises décisions prises lors de
son développement initial (« onclicks » dans le html). En synthèse, je
réitère ce que j\'ai dit au début de ce chapitre, je considère que
c\'était un exercice très intéressant et instructif.

> ![](vertopal_056132ff58fa45a48bba444f6fe3943c/media/image1.png){width="6.597222222222222in"
> height="4.1666666666666664e-2in"}

AFPA DWWM22031 33

