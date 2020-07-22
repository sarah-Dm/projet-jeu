/*                               
  ####  #####   ##   #####  ##### 
 #        #    #  #  #    #   #   
  ####    #   #    # #    #   #   
      #   #   ###### #####    #   
 #    #   #   #    # #   #    #   
  ####    #   #    # #    #   #   
                                  
*/
let button = document.querySelector("button");
const $delay = document.querySelector("#right_part h2");
let seconds = Number($delay.innerHTML);
let countdownInt;
let $allRounds = document.querySelectorAll("h4");
let round;
let score = document.querySelector("#left_part h2");

function injectScore() {
  for (let i = $allRounds.length - 1; i >= 0; i--) {
    if ($allRounds[i].innerHTML === "") {
      round = i;
    }
  }
  $allRounds[round].innerHTML = `Party ${round + 1} score : ${score.innerHTML}`;
}

function timer() {
  seconds--;
  $delay.innerHTML = seconds;
  if (seconds === 0) {
    clearInterval(countdownInt);
    injectScore();
    button.classList.remove("active");
    button.innerText = "START GAME";
    compteur.innerHTML = 0;
    seconds = 30;
    $delay.innerHTML = 30;
  }
}

function startGame() {
  setInterval(gameWon, 800);
  button.classList.add("active");
  button.innerText = "GAME ONGOING";
  countdownInt = setInterval(timer, 1000);
}

button.onclick = startGame;

//partie client

function injectBoule() {
  for (let i = 0; i < icecreamToMake.length; i++) {
    const img = document.createElement("img"); // <img>
    img.setAttribute("class", `requested_boule requested_${icecreamToMake[i]}`);
    img.setAttribute("src", `images/${icecreamToMake[i]}.png`);
    let allLi = document.querySelectorAll(`#request ol li`);
    let etage;
    for (let i = 6; i >= 0; i--) {
      if (allLi[i].innerHTML === "") {
        etage = i + 1;
        if (etage === 7) {
          etage === 0;
        }
      }
    }
    let parent = document.querySelector(`#request ol li:nth-child(${etage})`);
    parent.appendChild(img);
  }
}

//Victoire/défaite
let indicator = document.querySelector("#request");
let indicatorDisapear = function () {
  indicator.style.border = "3px solid rgb(13, 104, 104)";
};

function gameWon() {
  if (won(icecreamMade, icecreamToMake)) {
    if (icecreamMade.length !== 0) {
      indicator.style.border = "8px solid green";
      setTimeout(indicatorDisapear, 200);
      countPoints();
    }
    clearRequestedImg();
    clearServedImg();
    icecreamMade = [];
    icecreamToMake = [];
    generateIcecream();
    injectBoule();
  } else if (loose(icecreamMade, icecreamToMake)) {
    indicator.style.border = "8px solid red";
    setTimeout(indicatorDisapear, 200);

    clearServedImg();
    icecreamMade = [];
  }
}
//partie comptoire
/*          
 #    #   ##   #    # ######    #  ####  ######  ####  #####  ######   ##   #    # 
 ##  ##  #  #  #   #  #         # #    # #      #    # #    # #       #  #  ##  ## 
 # ## # #    # ####   #####     # #      #####  #      #    # #####  #    # # ## # 
 #    # ###### #  #   #         # #      #      #      #####  #      ###### #    # 
 #    # #    # #   #  #         # #    # #      #    # #   #  #      #    # #    # 
 #    # #    # #    # ######    #  ####  ######  ####  #    # ###### #    # #    #                           
*/

function ajouterBoule(bacAGlace, niveau) {
  const img = document.createElement("img"); // <img>
  img.setAttribute("class", `served_boule served_${bacAGlace}`);
  img.setAttribute("src", `images/${bacAGlace}.png`);
  let parent = document.querySelector(`#ongoing_icecream ol li:nth-child(${niveau})`); //faire apparaitre la boule dans la 1e li vide
  parent.appendChild(img);
}

let bacChocolate = document.querySelector(".chocolate_pot");
let bacVanilla = document.querySelector(".vanilla_pot");
let bacMango = document.querySelector(".mango_pot");
let bacAcai = document.querySelector(".acai_pot");
let allLi = document.querySelectorAll(`#ongoing_icecream ol li`);

bacChocolate.onclick = function () {
  let etage;
  for (let i = 6; i >= 0; i--) {
    if (allLi[i].innerHTML === "") {
      etage = i + 1;
    }
  }
  if (etage) {
    ajouterBoule("chocolate", etage);
    icecreamMade.push("chocolate");
    return icecreamMade;
  } else {
    clearServedImg();
    return (icecreamMade = []);
  }
};

bacVanilla.onclick = function () {
  let etage;
  for (let i = 6; i >= 0; i--) {
    if (allLi[i].innerHTML === "") {
      etage = i + 1;
    }
  }
  if (etage) {
    ajouterBoule("vanilla", etage);
    icecreamMade.push("vanilla");
    return icecreamMade;
  } else {
    clearServedImg();
    return (icecreamMade = []);
  }
};

bacMango.onclick = function () {
  let etage;
  for (let i = 6; i >= 0; i--) {
    if (allLi[i].innerHTML === "") {
      etage = i + 1;
    }
  }
  if (etage) {
    ajouterBoule("mango", etage);
    icecreamMade.push("mango");
    return icecreamMade;
  } else {
    clearServedImg();
    return (icecreamMade = []);
  }
};
bacAcai.onclick = function () {
  let etage;
  for (let i = 6; i >= 0; i--) {
    if (allLi[i].innerHTML === "") {
      etage = i + 1;
    }
  }
  if (etage) {
    ajouterBoule("acai", etage);
    icecreamMade.push("acai");
    return icecreamMade;
  } else {
    clearServedImg();
    return (icecreamMade = []);
  }
};
