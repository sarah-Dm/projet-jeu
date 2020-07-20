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
injectBoule();

//partie comptoire
/*          
 #    #   ##   #    # ######    #  ####  ######  ####  #####  ######   ##   #    # 
 ##  ##  #  #  #   #  #         # #    # #      #    # #    # #       #  #  ##  ## 
 # ## # #    # ####   #####     # #      #####  #      #    # #####  #    # # ## # 
 #    # ###### #  #   #         # #      #      #      #####  #      ###### #    # 
 #    # #    # #   #  #         # #    # #      #    # #   #  #      #    # #    # 
 #    # #    # #    # ######    #  ####  ######  ####  #    # ###### #    # #    #                           
*/

function ajouterBoule(bacAGlace, etage) {
  const img = document.createElement("img"); // <img>
  img.setAttribute("class", `served_boule served_${bacAGlace}`);
  img.setAttribute("src", `images/${bacAGlace}.png`);
  let parent = document.querySelector(`#ongoing_icecream ol li:nth-child(${etage})`); //faire apparaitre la boule dans la 1e li vide
  parent.appendChild(img);
}

let bacChocolate = document.querySelector(".chocolate_pot");
let bacVanilla = document.querySelector(".vanilla_pot");
let bacMango = document.querySelector(".mango_pot");
let bacAcai = document.querySelector(".acai_pot");

bacChocolate.onclick = function () {
  let allLi = document.querySelectorAll(`#ongoing_icecream ol li`);
  let etage;
  for (let i = 6; i >= 0; i--) {
    if (allLi[i].innerHTML === "") {
      etage = i + 1;
    }
  }
  ajouterBoule("chocolate", etage);
  icecreamMade.push("chocolate");
  return icecreamMade;
};

bacVanilla.onclick = function () {
  let allLi = document.querySelectorAll(`#ongoing_icecream ol li`);
  let etage;
  for (let i = 6; i >= 0; i--) {
    if (allLi[i].innerHTML === "") {
      etage = i + 1;
    }
  }
  ajouterBoule("vanilla", etage);
  icecreamMade.push("vanilla");
  return icecreamMade;
};
bacMango.onclick = function () {
  let allLi = document.querySelectorAll(`#ongoing_icecream ol li`);
  let etage;
  for (let i = 6; i >= 0; i--) {
    if (allLi[i].innerHTML === "") {
      etage = i + 1;
    }
  }
  ajouterBoule("mango", etage);
  icecreamMade.push("mango");
  return icecreamMade;
};
bacAcai.onclick = function () {
  let allLi = document.querySelectorAll(`#ongoing_icecream ol li`);
  let etage;
  for (let i = 6; i >= 0; i--) {
    if (allLi[i].innerHTML === "") {
      etage = i + 1;
    }
  }
  ajouterBoule("acai", etage);
  icecreamMade.push("acai");
  return icecreamMade;
};

/*                               
  ####  #####   ##   #####  ##### 
 #        #    #  #  #    #   #   
  ####    #   #    # #    #   #   
      #   #   ###### #####    #   
 #    #   #   #    # #   #    #   
  ####    #   #    # #    #   #   
                                  
*/
//règler apparition de la glace à reproduire
