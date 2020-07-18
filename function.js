//GLACE RANDOM
//création d'une glace avec un nombre de boule et des couleurs de boule random
/*class Glace () = {
    boule1 = 
}
*/

let parfumsAvailable = ["vanilla", "chocolate", "mango", "acai"];
let nombreBoules;
let icecreamToMake = [];
let icecreamMade = [];

//nombre de boules au hasard
function combienBoules(parfumsAvailable) {
  nombreBoules = 1 + Math.floor(Math.random() * parfumsAvailable.length);
  return nombreBoules;
}

//ordre de parfums au hasard
function randomParfum(parfumsAvailable) {
  let IndexParfum = Math.floor(Math.random() * combienBoules(parfumsAvailable));
  icecreamToMake.push(parfumsAvailable[IndexParfum]);
}
//glace avec nbre de boules et ordre de parfums au hasard
function generateIcecream() {
  nombreBoules = combienBoules(parfumsAvailable);
  for (let i = 0; i < nombreBoules; i++) {
    randomParfum(parfumsAvailable);
  }
  return icecreamToMake;
}
generateIcecream();

//PERSONNAGE RANDOM
//séléction random d'un personnage dans une liste
//personnage qui glisse depuis la droite vers la gauche

//JEU
//boule qui tombe du haut sur le cone

//VICTOIRE
//quand glace random = glace du bas alors alerte d'un massage de victoire

//PERDU
//quand glace random != glace du bas alors :
//- alerte d'un massage de defaite
//- apparition d'un la glace random
