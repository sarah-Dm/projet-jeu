/*                               
  ####  #####   ##   #####  ##### 
 #        #    #  #  #    #   #   
  ####    #   #    # #    #   #   
      #   #   ###### #####    #   
 #    #   #   #    # #   #    #   
  ####    #   #    # #    #   #   
                                  
*/
let timeByRound = 15;
let button = document.querySelector("button");
const $delay = document.querySelector("#right_part h2");
let seconds = Number(timeByRound);
let countdownInt;
let $allRounds = document.querySelectorAll("h4");
let round;
let score = document.querySelector("#left_part h2");
let $request = document.querySelector("#request");
let nextPartyPanel = document.querySelector("#next_party_panel");

function injectScore() {
  if (
    $allRounds[0].innerHTML !== "" &&
    $allRounds[1].innerHTML !== "" &&
    $allRounds[2].innerHTML !== ""
  ) {
    $allRounds[0].innerHTML = "";
    $allRounds[1].innerHTML = "";
    $allRounds[2].innerHTML = "";
  }
  for (let i = $allRounds.length - 1; i >= 0; i--) {
    if ($allRounds[i].innerHTML === "") {
      round = i;
    }
  }

  $allRounds[round].innerHTML = `Round ${round + 1} score : ${score.innerHTML}`;
}

//highscores
function injectScoreHighScores() {
  let $newScore = document.createElement("tr");
  let $newScoreParent = document.querySelector("#high_scores_panel tbody");
  let bigScore;
  if ($allRounds[0].innerText[17] !== undefined) {
    bigScore = $allRounds[0].innerText[17];
  } else {
    bigScore = "";
  }
  let $totalScore0 = $allRounds[0].innerText[16] + bigScore;
  if ($allRounds[1].innerText[17] !== undefined) {
    bigScore = $allRounds[1].innerText[17];
  } else {
    bigScore = "";
  }
  let $totalScore1 = $allRounds[1].innerText[16] + bigScore;
  if ($allRounds[2].innerText[17] !== undefined) {
    bigScore = $allRounds[2].innerText[17];
  } else {
    bigScore = "";
  }
  let $totalScore2 = $allRounds[2].innerText[16] + bigScore;

  $newScore.innerHTML = `
  <tr>
    <td>${userName}</td> 
    <td>
      ${Number($totalScore0) + Number($totalScore1) + Number($totalScore2)}
     
    </td>
  </tr>`;
  $newScoreParent.appendChild($newScore);
  rankHighscores();
}

let highScoreBtn = document.querySelector("#show_high_scores");
highScoreBtn.onclick = function () {
  if (
    high_scores_panel.style.visibility === "hidden" ||
    high_scores_panel.style.visibility === ""
  ) {
    high_scores_panel.style.visibility = "visible";
    highScoreBtn.innerHTML = "Show High Scores";

    highScoreBtn.innerHTML = "Hide High Scores";
  } else {
    high_scores_panel.style.visibility = "hidden";
    highScoreBtn.innerHTML = "Show High Scores";
  }
};

//panel nextRound
function showNextPartyPanel() {
  if (
    $allRounds[0].innerHTML !== "" &&
    $allRounds[1].innerHTML === "" &&
    $allRounds[2].innerHTML === ""
  ) {
    nextPartyPanel.innerHTML = "2nd ROUND ON 3";
    nextPartyPanel.style.visibility = "visible";
  } else if (
    $allRounds[0].innerHTML !== "" &&
    $allRounds[1].innerHTML !== "" &&
    $allRounds[2].innerHTML === ""
  ) {
    nextPartyPanel.innerHTML = "LAST ROUND !";
    nextPartyPanel.style.visibility = "visible";
  } else {
    nextPartyPanel.innerHTML = "END OF PARTY";
    nextPartyPanel.style.visibility = "visible";
    setTimeout(function () {
      nextPartyPanel.style.visibility = "hidden";
    }, 1000);
    injectScoreHighScores();
    high_scores_panel.style.visibility = "visible";
  }
}

function timer() {
  seconds--;
  $delay.innerHTML = timeByRound;
  $delay.innerHTML = seconds;
  if (seconds === 0) {
    clearInterval(countdownInt);
    injectScore();
    showNextPartyPanel();
    button.classList.remove("active");
    if (
      $allRounds[0].innerHTML !== "" &&
      $allRounds[1].innerHTML !== "" &&
      $allRounds[2].innerHTML !== ""
    ) {
      button.innerText = "NEW GAME";
      button.classList.add("clignote");
      $allRounds[0].innerHTML = "";
      $allRounds[1].innerHTML = "";
      $allRounds[2].innerHTML = "";
    } else {
      button.innerText = "START GAME";
      button.classList.add("clignote");
    }
    compteur.innerHTML = 0;
    seconds = timeByRound;
    $delay.innerHTML = timeByRound;
  }
}

//show instructions
let $instructions_panel = document.querySelector("#game_rules");
function showGameRules() {
  $instructions_panel.style.visibility = "visible";
}

showGameRules();

function startGame() {
  $instructions_panel.style.visibility = "hidden";

  if (
    $allRounds[0].innerHTML === "" &&
    $allRounds[1].innerHTML === "" &&
    $allRounds[2].innerHTML === ""
  ) {
    nextPartyPanel.style.visibility = "visible";
    setTimeout(() => {
      nextPartyPanel.style.visibility = "hidden";
    }, 1000);
    newUserName();
  } else {
    nextPartyPanel.style.visibility = "hidden";
  }
  high_scores_panel.style.visibility = "hidden";
  setInterval(gameWon, 800);
  countPoints() === 0;
  compteur.innerHTML = 0;
  clearServedImg();
  icecreamMade = [];
  button.classList.remove("clignote");
  button.classList.add("active");
  button.innerText = "GAME ONGOING";
  countdownInt = setInterval(timer, 1000);
}

button.onclick = startGame;

//partie client
let etage;

function injectBoule() {
  for (let i = 0; i < icecreamToMake.length; i++) {
    const img = document.createElement("img"); // <img>
    img.setAttribute("class", `requested_boule requested_${icecreamToMake[i]}`);
    img.setAttribute("src", `images/${icecreamToMake[i]}.png`);
    let allLi = document.querySelectorAll(`#request ol li`);
    for (let i = 6; i >= 0; i--) {
      if (allLi[i].innerHTML === "") {
        etage = i + 1;
        if (etage === 7) {
          etage === 1;
        }
      }
    }
    let parent = document.querySelector(`#request ol li:nth-child(${etage})`);
    parent.appendChild(img);
  }
}

function changeRequestOpacity() {
  $request.setAttribute("class", "newRequest");
  setTimeout(() => {
    $request.removeAttribute("class");
  }, 500);
}

//Victoire/défaite
let indicator = document.querySelector("#request");
let indicatorChange = function () {
  indicator.style.border = "3px solid rgb(13, 104, 104)";
};

function gameWon() {
  if (won(icecreamMade, icecreamToMake)) {
    if (icecreamMade.length !== 0) {
      setTimeout(indicatorChange, 200);
      countPoints();
      changePersonnage();
    }
    clearServedImg();
    icecreamMade = [];
    icecreamToMake = [];
    generateIcecream();
    setTimeout(() => {
      changeRequestOpacity();
      clearRequestedImg();
    }, 250);

    setTimeout(() => {
      injectBoule();
    }, 250);
  } else if (loose(icecreamMade, icecreamToMake)) {
    indicator.style.border = "8px solid red";
    $request.setAttribute("class", "wrongAnswer");
    setTimeout(() => {
      $request.removeAttribute("class");
    }, 1000);
    setTimeout(indicatorChange, 200);

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
