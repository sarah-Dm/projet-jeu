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
let nombreBoules = function () {
  return 1 + Math.floor(Math.random() * 9);
};
//ordre de parfums au hasard
function randomParfum(parfumsAvailable) {
  let IndexParfum = Math.floor(Math.random() * parfumsAvailable.length);
  icecreamToMake.push(parfumsAvailable[IndexParfum]);
  return icecreamToMake;
}
//glace avec nbre de boules et ordre de parfums au hasard
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
//si les glaces ont le meme nombre de boule mais pas le bon ordre
let loose = function (icecreamMade, icecreamToMake) {
  if (icecreamMade) {
    if (icecreamMade.length === icecreamToMake.length) {
      for (var i = 0; i < icecreamMade.length; i++) {
        if (icecreamMade[i] !== icecreamToMake[i]) return true;
      }
    } else if (icecreamMade.length > icecreamToMake.length) return true;
  }
  return false;
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

//apparition d'un croix/check si won/loose
