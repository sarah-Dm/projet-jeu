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
let $request = document.querySelector("#request");

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

  $allRounds[round].innerHTML = `Party ${round + 1} score : ${score.innerHTML}`;
  // hightScoreButtonParent = document.querySelector(
  //   `#memory div:nth-child(${round + 1}) h4)`
  // );
  // let newHighscoreButton = document.createElement("button");
  // newHighscoreButton.innerHTML = "HighScore";
  // hightScoreButtonParent.appendChild(newHighscoreButton);
  // newHighscoreButton.setAttribute("class", "add_to_highscore");
}
//  ${$allRounds[i].innerText[16] + if ($allRounds[i].innerText[17]!== undefined) {$allRounds[i].innerText[17]}}

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

  // ${score.innerHTML}
  $newScore.innerHTML = `
  <tr>
    <td></td> 
    <td>
      ${Number($totalScore0) + Number($totalScore1) + Number($totalScore2)}
     
    </td>
  </tr>`;
  $newScoreParent.appendChild($newScore);
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
  countPoints() === 0;
  compteur.innerHTML = 0;
  clearServedImg();
  icecreamMade = [];
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
