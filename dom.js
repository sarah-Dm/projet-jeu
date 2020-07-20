//règler apparition de la glace à reproduite
// const button = document.querySelector("button");
// button.onclick = generateIcecream();

//partie client
generateIcecream();

function injectBoule() {
  for (let i = 0; i < icecreamToMake.length; i++) {
    const img = document.createElement("img"); // <img>
    img.setAttribute("class", `requested_boule requested_${icecreamToMake[i]}`);
    img.setAttribute("src", `images/${icecreamToMake[i]}.png`);
    let parent = document.querySelector(`#request ol li:nth-child(${1})`);
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

/* --> FACTORISER ? Faire apparaitre la boule dans la li vide
function ajouterBoule(bacAGlace) {
  const img = document.createElement("img"); // <img>
  img.setAttribute("class", `served_boule served_${bacAGlace}`);
  img.setAttribute("src", `images/${bacAGlace}.png`);
  let parent = document.querySelector(`#ongoing_icecream ol li:nth-child(${1})`); //faire apparaitre la boule dans la li vide
  parent.appendChild(img);
}
*/
function ajouterBoule(bacAGlace, etage) {
  const img = document.createElement("img"); // <img>
  img.setAttribute("class", `served_boule served_${bacAGlace}`);
  img.setAttribute("src", `images/${bacAGlace}.png`);
  let parent = document.querySelector(`#ongoing_icecream ol li:nth-child(${1})`); //faire apparaitre la boule dans la 1e li vide
  parent.appendChild(img);
}

let bacChocolate = document.querySelector(".chocolate_pot");
let bacVanilla = document.querySelector(".vanilla_pot");
let bacMango = document.querySelector(".mango_pot");
let bacAcai = document.querySelector(".acai_pot");

bacChocolate.onclick = function () {
  ajouterBoule("chocolate");
  icecreamMade.push("chocolate");
  return icecreamMade;
};
bacVanilla.onclick = function () {
  ajouterBoule("vanilla");
  icecreamMade.push("vanilla");
  return icecreamMade;
};
bacMango.onclick = function () {
  ajouterBoule("mango");
  icecreamMade.push("mango");
  return icecreamMade;
};
bacAcai.onclick = function () {
  ajouterBoule("acai");
  icecreamMade.push("acai");
  return icecreamMade;
};
