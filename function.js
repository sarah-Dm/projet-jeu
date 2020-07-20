//GLACE RANDOM
//création d'une glace avec un nombre de boule et des couleurs de boule random
/*class Glace () = {
    boule1 = 
}
*/

/*                                                                                                                                      
 #####  ####      ####  ###### #####  #    # ###### 
   #   #    #    #      #      #    # #    # #      
   #   #    #     ####  #####  #    # #    # #####  
   #   #    #         # #      #####  #    # #      
   #   #    #    #    # #      #   #   #  #  #      
   #    ####      ####  ###### #    #   ##   ###### 
                                                    
      */

let parfumsAvailable = ["vanilla", "chocolate", "mango", "acai"];
//let nombreBoules;
let icecreamToMake = [];
let icecreamMade = [];

//nombre de boules au hasard
// function combienBoules(parfumsAvailable) {
//   nombreBoules = 1 + Math.floor(Math.random() * parfumsAvailable.length);
//   return nombreBoules;
// }
let nombreBoules = function () {
  return 1 + Math.floor(Math.random() * 9);
};
//ordre de parfums au hasard
function randomParfum(parfumsAvailable) {
  let IndexParfum = Math.floor(Math.random() * parfumsAvailable.length);
  icecreamToMake.push(parfumsAvailable[IndexParfum]);
  return icecreamToMake;
}
//glace avec nbre de boules et ordre de parfums au hasard --> BUG répéter generateIcecream autant de fois qu'il y a de boules, pour le moment empilement de boules
function generateIcecream() {
  for (let i = 0; i < nombreBoules(); i++) {
    randomParfum(parfumsAvailable);
  }
}

//PERSONNAGE RANDOM
//séléction random d'un personnage dans une liste
//personnage qui glisse depuis la droite vers la gauche

//JEU
//boule qui tombe du haut sur le cone

/*
 #     #                                       
 #     # #  ####  #####  ####  # #####  ###### 
 #     # # #    #   #   #    # # #    # #      
 #     # # #        #   #    # # #    # #####  
  #   #  # #        #   #    # # #####  #      
   # #   # #    #   #   #    # # #   #  #      
    #    #  ####    #    ####  # #    # ###### 
                                               
 */

//vérifier que les 2 glaces sont les memes
let won = function (icecreamMade, icecreamToMake) {
  if (icecreamMade) {
    if (icecreamMade.length !== icecreamToMake.length) return false;
    for (var i = 0; i < icecreamMade.length; i++) {
      if (icecreamMade[i] !== icecreamToMake[i]) return false;
    }
    return true;
  }
};
//si les 2 glaces sont les memes
//augmenter le compteur de points
function countPoints() {
  let compteur = document.querySelector("h2");
  compteur.innerHTML++;
}
//effacer tous les éléments qui ont la class servedIcecream ou requestedIcecream (boules créées)
function clearServedImg() {
  const allServedImg = document.querySelectorAll(".served_boule");
  let parentServed = document.querySelectorAll("#ongoing_icecream ol li");
  for (let i = 0; i < allServedImg.length; i++) {
    allServedImg[i].remove(allServedImg[i]);
  }
}
function clearRequestedImg() {
  const allRequestedImg = document.querySelectorAll(".requested_boule");
  let parentRequested = document.querySelectorAll("#request ol li");
  for (let i = 0; i < allRequestedImg.length; i++) {
    if (allRequestedImg[i]) {
      allRequestedImg[i].remove(allRequestedImg[i]);
    }
  }
}

//générer une nouvelle glace

//Victoire/défaite
function gameWon() {
  if (won(icecreamMade, icecreamToMake) === true) {
    countPoints();
    clearRequestedImg();
    clearServedImg();
    icecreamMade = [];
    icecreamToMake= [];
    generateIcecream();
    injectBoule();
    //generateIcecream(); //new icecreamToMake
  }
}

setInterval(gameWon, 1000);

//PERDU
//quand glace random != glace du bas alors :
//- alerte d'un massage de defaite
//- apparition d'un la glace random
