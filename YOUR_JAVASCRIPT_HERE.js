// Write your JS here

//Object hero
const hero = {
  name: "Tony Stark",
  heroic: true,
  inventory: [],
  health: 10,
  weapon: {
    type: "Kalashnikov",
    damage: 2
  }
};

function rest(obj) {
  //check if health is already at 10; if true show alert popup else set health to 10
  if (obj.health === 10) {
    alert("Health already at 10");
  }
  obj.health = 10;
  //return object in all cases
  return obj;
}

function pickUpItem(heroObj, weaponObj) {
  //add weaponObj at the end of the Inventory array of heroObj
  heroObj.inventory.push(weaponObj);
}

function equipWeapon(heroObj) {
  if (heroObj.inventory.length === 0) {
    // do nothing
  } else {
    //assign weapon property to the 1st element of the inventory array
    heroObj.weapon = heroObj.inventory[0];
  }
}

function addToInventory() {
  const weaponDagger = {
    type: "dagger",
    damage: 2
  };
  hero.inventory.push(weaponDagger);
}

// //get the img element whose id is inn
// const imgID = document.getElementById("inn");
// if (imgID.onclick) {
//   hero.health = 10;
// }

// function displayStats() {
//   //Display hero's name, health, weapon type, weapon damage
//   //console.log(hero.name);
//   const newDiv = document.createElement("div");
//   const stringToDisplay =
//     "Hero's name: " + hero.name + "\n Hero's health: " + hero.health + "\n";
//   const newContent = document.createTextNode(stringToDisplay);
//   newDiv.appendChild(newContent);

//   //get existing div element by id = "displayHere"

//   const existingElement = document.getElementById("displayHere");
//   existingElement.appendChild(newDiv);
//   //console.log(hero.health);
//   //console.log(hero.weapon.type);
//   // console.log(hero.weapon.damage);
// }

// function changeHeroData() {
//   const getNewName = document.getElementById("name").value;

//   //check if input is empty, if so warn user
//   if (getNewName != "") {
//     hero.name = getNewName;
//     console.log(hero.name);
//     //displayStats();
//   } else {
//     alert("Your Hero's name cannot be empty!");
//   }
// }

// //rest(hero);
// displayStats();
