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
let compteur;
let highScoresMemory = [];

//nombre de boules au hasard
let nombreBoules = function () {
  return 1 + Math.floor(Math.random() * 8);
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
let availablePersonnage = [
  "images/perso1.png",
  "images/perso2.png",
  "images/perso3.png",
  "images/perso4.png",
];

function changePersonnage() {
  let $parentPersonnage = document.querySelector("#main #to_serve #customer");
  //le personnage s'en va
  $parentPersonnage.setAttribute("class", `customerOut`);
  setTimeout(() => {
    $parentPersonnage.removeAttribute("class");
  }, 500);

  //un nouveau personnage arrive
  let i = Math.floor(Math.random() * availablePersonnage.length);
  setTimeout(() => {
    $parentPersonnage.setAttribute("src", `${availablePersonnage[i]}`);
    $parentPersonnage.setAttribute("class", `customerIn`);
    setTimeout(() => {
      $parentPersonnage.removeAttribute("class");
    }, 300);
  }, 500);
}

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
  compteur = document.querySelector("h2");
  return compteur.innerHTML++;
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
//nom du joueur
let userName;

function newUserName() {
  userName = prompt("Your name");
  return userName;
}

function rankHighscores() {
  var table, i, x, y;
  table = document.querySelector("table");
  var switching = true;

  // Run loop until no switching is needed
  while (switching) {
    switching = false;
    var rows = table.rows;

    // Loop to go through all rows
    for (i = 2; i < rows.length - 1; i++) {
      var Switch = false;

      // Fetch 2 elements that need to be compared
      x = rows[i].getElementsByTagName("TD")[1];
      y = rows[i + 1].getElementsByTagName("TD")[1];

      // Check if 2 rows need to be switched
      if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
        // If yes, mark Switch as needed and break loop
        Switch = true;
        break;
      }
    }
    if (Switch) {
      // Function to switch rows and mark switch as completed
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}
