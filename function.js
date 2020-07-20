//GLACE RANDOM
//création d'une glace avec un nombre de boule et des couleurs de boule random
/*class Glace () = {
    boule1 = 
}
*/

/*                                                                                              
  ####  ###### #    # ###### #####    ##   ##### ######    #  ####  ######  ####  #####  ######   ##   #    # 
 #    # #      ##   # #      #    #  #  #    #   #         # #    # #      #    # #    # #       #  #  ##  ## 
 #      #####  # #  # #####  #    # #    #   #   #####     # #      #####  #      #    # #####  #    # # ## # 
 #  ### #      #  # # #      #####  ######   #   #         # #      #      #      #####  #      ###### #    # 
 #    # #      #   ## #      #   #  #    #   #   #         # #    # #      #    # #   #  #      #    # #    # 
  ####  ###### #    # ###### #    # #    #   #   ######    #  ####  ######  ####  #    # ###### #    # #    # 
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
nombreBoules();

//ordre de parfums au hasard
function randomParfum(parfumsAvailable) {
  let IndexParfum = Math.floor(Math.random() * parfumsAvailable.length);
  icecreamToMake.push(parfumsAvailable[IndexParfum]);
}
//glace avec nbre de boules et ordre de parfums au hasard
function generateIcecream() {
  for (let i = 0; i < nombreBoules(); i++) {
    randomParfum(parfumsAvailable);
  }
  return icecreamToMake;
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
//effacer tous les éléments qui ont la class servedIcecream ou requestedIcecream
function clear() {
  //const allServedImg = document.querySelectorAll(".served_boule");
  //const allRequestedImg = document.querySelectorAll(".requested_boule");
  // allServedImg.forEach(function (el) {
  //   el.removeAttribute("src");
  // });
  // allRequestedImg.forEach(function (el) {
  //   el.removeAttribute("src");
  // });

  const allServedImg = document.querySelectorAll(".served_boule");
  const allRequestedImg = document.querySelectorAll(".requested_boule");
  let parentServed = document.querySelectorAll("#ongoing_icecream ol li");
  for (let i = 0; i < parentServed; i++) {
    parentServed[i].remove(allServedImg[i]);
  }
}

//compteur de points
function countPoints() {
  let compteur = document.querySelector("h2");
  compteur.innerHTML++;
}
//quand glace random = glace du bas alors icecream done augmente de 1
//Victoire/défaite
function gameWon() {
  let won =
    icecreamMade.length === icecreamToMake.length &&
    icecreamMade.every((val, index) => val === icecreamToMake[index]);
  if (won) {
    //effacer tout
    clear();
    countPoints();
    generateIcecream(); //new icecreamToMake
  } else {
    //effacer tout
  }
}
setInterval(gameWon, 1000);

//PERDU
//quand glace random != glace du bas alors :
//- alerte d'un massage de defaite
//- apparition d'un la glace random
