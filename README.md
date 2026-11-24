# NeoSheets

Un tableur dans NeoDex : cellules, formules et fonctions en français ou en anglais, mise en forme, tri, plusieurs feuilles par classeur et graphiques. Il ouvre et exporte les fichiers Excel, OpenDocument et CSV, et tes classeurs sont enregistrés tout seuls et synchronisés entre tes PC.

*English version: [README.en.md](README.en.md)*

## Conditions et tableau croisé (nouveau en 1.3.0)

Mise en forme conditionnelle (plus grand, plus petit, égal, contient, échelle de couleurs, barres de données) et tableau croisé dynamique dans une nouvelle feuille, avec ses totaux.

## Tes classeurs

- **+ Nouveau** crée un classeur, enregistré tout seul à chaque modification.
- **Ouvrir…** importe un fichier de ton PC : Excel (.xlsx, .xls), OpenDocument (.ods) ou CSV.
- La liste se filtre avec **Rechercher**. Chaque classeur peut être **renommé**, **dupliqué** ou **supprimé** (la suppression vaut aussi sur tes autres PC synchronisés).
- Un classeur modifié sur un autre PC se met à jour ici, et le plugin le signale.

## Saisir des données et des formules

- Clique sur une cellule et tape une valeur, ou une formule qui commence par **=** (par exemple `=SOMME(A1:A5)`). La barre du haut montre et modifie le contenu de la cellule.
- **Entrée** valide et descend, **Tab** passe à droite, les flèches déplacent la sélection, **Suppr** efface.
- **Fonctions**, en français ou en anglais : SOMME / SUM, MOYENNE / AVERAGE, MIN, MAX, NB / COUNT, NBVAL / COUNTA, SI / IF, ET / AND, OU / OR, NON / NOT, ARRONDI / ROUND, ARRONDI.SUP / ROUNDUP, ARRONDI.INF / ROUNDDOWN, ABS, MOD, PI, RACINE / SQRT, PUISSANCE / POWER, ENT / INT, CONCATENER / CONCAT, NBCAR / LEN, MAJUSCULE / UPPER, MINUSCULE / LOWER, SUPPRESPACE / TRIM, GAUCHE / LEFT, DROITE / RIGHT, STXT / MID, AUJOURDHUI / TODAY, MAINTENANT / NOW, SOMME.SI / SUMIF, NB.SI / COUNTIF, MOYENNE.SI / AVERAGEIF, RECHERCHEV / VLOOKUP, MEDIANE / MEDIAN, ALEA / RAND, SIERREUR / IFERROR, PRODUIT / PRODUCT. Le bouton **Fonction** les insère.
- **Recopier vers le bas** (Ctrl+D) : sélectionne la cellule et celles en dessous ; les références des formules suivent.
- **Copier-coller** avec Excel ou un autre tableur fonctionne dans les deux sens.

En bas, la sélection affiche sa **somme**, sa **moyenne** et le **nombre** de valeurs.

## Mise en forme

- **Gras** (Ctrl+B), **italique** (Ctrl+I), couleur du texte, couleur de fond, alignement à gauche, centré ou à droite.
- **Format des nombres** : automatique, nombre entier, nombre à 2 décimales, pourcentage, euros ou texte.
- **Lignes et colonnes** : insérer au-dessus, en dessous, à gauche ou à droite, ou supprimer.
- **Trier** les lignes selon la colonne sélectionnée, de A à Z ou de Z à A.
- **Annuler** (Ctrl+Z) et **Rétablir** (Ctrl+Y).

## Conditions et tableau croisé (1.3.0)

- **Conditions** : choisis des cellules, puis « Plus grand que… », « Plus petit que… », « Égal à… » ou « Contient le texte… » : les cellules qui répondent prennent la couleur de fond choisie dans la barre. Aussi l’**échelle de couleurs** (rouge → jaune → vert) et les **barres de données**. « Effacer les règles de la sélection » les retire.
- **⊞ Croisé** : choisis un tableau avec sa ligne de titres, puis les lignes, les colonnes (ou aucune), les valeurs et le calcul (somme, nombre, moyenne, minimum, maximum). Le résumé, avec ses totaux, arrive dans une nouvelle feuille. Il est figé : refais-le si les données changent.

## Feuilles

Un classeur peut avoir plusieurs feuilles, en onglets en bas : **+** en ajoute une, **double-clic** la renomme, **clic droit** la supprime.

## Graphiques

Sélectionne des données avec leurs titres, puis **Graphique** : en barres, en courbes ou en camembert. **Copier l'image** le met dans le presse-papiers pour le coller dans NeoDocs, NeoSlides ou ailleurs.

## Exporter

**Exporter** enregistre le classeur en Excel (.xlsx), OpenDocument (.ods), CSV (.csv) ou PDF.

## Données et synchronisation

Tes classeurs sont enregistrés par NeoDex, sauvegardés et synchronisés entre tes PC si la synchro est activée. Au premier lancement, le plugin reprend ce que tu avais déjà dans NeoDex.

## Installer

Dans NeoDex : **NeoStore → À découvrir → NeoSheets → Installer**.

Développer un plugin : voir le [SDK NeoDex](https://github.com/NDesumeur/neodex-sdk).
