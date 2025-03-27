const weapons = ["stick", "sword", "axe", "revolver"];
const weaponDamage = [5, 10, 15, 40];
const monsterStats = [30, 100, 500];

let health = 100;
let weapon = weapons[0];
let current_weapon_index = 0;
let monsterIndex = 0;
let sceneIndex = 1; 
let current_monsterHealth = 0;


// ---------------  Controlling Variables Declaration -----------------

const button1 = document.querySelector('#button1');
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");

const text = document.querySelector("#text");

const monsterHealth = document.querySelector("#monsterHealth");

let xp = document.querySelector("#xp");
let hp = document.querySelector("#hp");
let gold = document.querySelector("#gold");

// --------------------------------------------------------------------

//------------------------  < Game Variables > -----------------------------
let currentXp = 50;
let currentHealth = 100;
let currentGold = 100;

function updateStats() {
    xp.innerText = currentXp;
    hp.innerText = currentHealth;
    gold.innerText = currentGold;
}

xp.innerText = currentXp;
hp.innerText = currentHealth;
gold.innerText = currentGold;

//-------------------------  </Game Variables>   ---------------------


button1.onclick = goTown;
button2.onclick = goCave;
button3.onclick = fightDragon;

let scene = [
// ++++++++++++++++++++++++++++ Locations ++++++++++++++++++++++++++++++++++
{
    name: "Store",
    text: "You are at the store.",
    buttons: ["Buy Health(10 gold)", "Buy Weapon(30 gold)", "Go to Town"],
    button_fn: [buyHealth, buyWeapon, goTown]
},
{
    name: "Town",
    text: "You are at the town.",
    buttons: ["Go to Store", "Go to Cave", "Fight Dragon"],
    button_fn: [goStore, goCave, fightDragon]
},
{
    name: "Cave",
    text: "You see Monsters in the cave.",
    buttons: ["Fight Slime Monsters", "Fight Fanged Wolves", "Leave to Town"],
    button_fn: [fightSlime,fightWolves, goTown]
},

// ++++++++++++++++++++++++++++ Monsters ++++++++++++++++++++++++++++++++++
{
    name: "Dragon",
    text: "You see a dragon in front of you.",
    buttons: ["Attack", "Dodge Attack", "Run to Town"],
    button_fn: ["","",goTown]
},
{
    name:"Slime",
    text:"A weak slime monster appears",
    buttons:["Attack","Defend","Run"],
    button_fn:["attack","defend",goCave]
},
{
    name:"Wolves",
    text:"A pack of wolves appears",
    buttons:["Attack","Defend","Run"],
    button_fn:["attack","defend",goCave]
}
];

//=============================  Place change functions  =========================
function goStore() {
    sceneIndex = 0; // Update sceneIndex
    updateScene(sceneIndex);
}
function goCave() {
    sceneIndex = 2; // Update sceneIndex
    updateScene(sceneIndex);
}
function goTown() {
    sceneIndex = 1; // Update sceneIndex
    updateScene(sceneIndex);
}

//============================  Monster Fight Functions  =========================
function updateMonsterStats(monsterIndex){
    current_monsterHealth = monsterStats[monsterIndex];
    monsterHealth.innerText =  current_monsterHealth;
}

function fightDragon() {
    monsterIndex = 2;
    updateMonsterStats(monsterIndex);

    sceneIndex = 3; // Update sceneIndex
    updateScene(sceneIndex);
}
function fightSlime() {
    monsterIndex = 0;
    updateMonsterStats(monsterIndex);

    sceneIndex = 4; // Update sceneIndex
    updateScene(sceneIndex);
}

function fightWolves(){
    monsterIndex = 1;
    updateMonsterStats(monsterIndex);

    sceneIndex=5;
    updateScene(sceneIndex);
}

// ===========================   Store Functions  ==============================
function buyWeapon() {
    if (currentGold >= 30) {
        currentGold = currentGold - 30; // Corrected line
        current_weapon_index++;
        if (current_weapon_index >= weapons.length) {
            current_weapon_index = 0;
        }
        weapon = weapons[current_weapon_index];
        console.log(weapon);
        text.innerText = "You bought a " + weapon;
        gold.innerText = currentGold; // Update the displayed gold value
    }
    else {
        console.log("You don't have enough gold to buy a weapon.");
        text.innerText = "Not Enough Gold";
    }
}
function buyHealth() {

    if (currentGold >= 10) {
        currentGold = currentGold - 10; // Corrected line
        currentHealth = currentHealth + 10;
        gold.innerText = currentGold; // Update the displayed gold value
        hp.innerText = currentHealth; // Update the displayed health value
    }
    else {
        console.log("You don't have enough gold to buy health.");
        text.innerText = "Not Enough Gold";
    }
}

// '''''''''''''''''''''''''' ENd of Store fn '''''''''''''''''''''''''''''''''

// Set initial button text
function updateScene(sceneIndex) {

    // Button Text
    button1.innerText = scene[sceneIndex].buttons[0];
    button2.innerText = scene[sceneIndex].buttons[1];
    button3.innerText = scene[sceneIndex].buttons[2];
    // Button Function
    button1.onclick = scene[sceneIndex].button_fn[0];
    button2.onclick = scene[sceneIndex].button_fn[1];
    button3.onclick = scene[sceneIndex].button_fn[2];

    text.innerText = scene[sceneIndex].text;
}
