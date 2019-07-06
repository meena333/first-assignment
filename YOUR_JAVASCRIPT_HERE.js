// Write your JS here

//Object hero
const hero = {
  name: "Tony Stark",
  heroic: true,
  inventory: [],
  health: 10,
  weapon: {
    type: "Nuclear arc",
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
    // no items in the inventory
    //alert("No weapons left :( ");
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
  //console.log(hero);

  //remove the image of the weapon from the page when the user clicks on the nuclear arc
  //Item 5 from Section 4
  //Note: after removing this image, if you run the tests, some items will fail
  const image = document.getElementById("dagger");
  if (image) {
    image.parentNode.removeChild(image);
  }
}

// //get the img element whose id is inn
// const imgID = document.getElementById("inn");
// if (imgID.onclick) {
//   hero.health = 10;
// }

//Display hero's name, health, weapon type, weapon damage
//Item 1 from Section 4
function displayStats() {
  const getDiv = document.getElementById("displayHeroInfo");

  //create <br> elements to have line breaks; won't accept the same element so had to create multiple break elements
  const newBreak1 = document.createElement("br");
  const newBreak2 = document.createElement("br");
  const newBreak3 = document.createElement("br");
  const newBreak4 = document.createElement("br");

  const heroName = "Hero's name: " + hero.name;
  const heroHealth = "Hero's health status: " + hero.health;
  const heroWeaponType = "Hero's weapon type: " + hero.weapon.type;
  const heroWeaponDamage = "Hero's weapon damage status: " + hero.weapon.damage;

  var newElement = document.createElement("h4");

  var newContent = document.createTextNode(heroName);
  newElement.appendChild(newContent);
  getDiv.appendChild(newElement);
  newElement.appendChild(newBreak1);
  console.log(getDiv);

  newContent = document.createTextNode(heroHealth);
  newElement.appendChild(newContent);
  getDiv.appendChild(newElement);
  newElement.appendChild(newBreak2);

  newContent = document.createTextNode(heroWeaponType);
  newElement.appendChild(newContent);
  getDiv.appendChild(newElement);
  newElement.appendChild(newBreak3);

  newContent = document.createTextNode(heroWeaponDamage);
  newElement.appendChild(newContent);
  getDiv.appendChild(newElement);
  newElement.appendChild(newBreak4);
}

//Item 2 from Section 4
function changeHeroData() {
  const getNewName = document.getElementById("name").value;
  const geth4 = document.getElementsByTagName("h4");

  //check if input is empty, if so warn user
  if (getNewName != "") {
    hero.name = getNewName;
    console.log(hero.name);

    // // //remove previously stored info (childnodes)
    // if (document.getElementsByTagName("h4")) {
    //   //   //document.getElementsByTagName("h4").remove();
    //   geth4.parentNode.removeChild(geth4);
    //   //   getDiv.parentNode.removeChild(getDiv);
    // }

    //Item 3 from Section 4
    displayStats();
  } else {
    alert("Your Hero's name cannot be empty!");
  }
}

displayStats();
