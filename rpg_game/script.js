let weapons = ["stick", "sword", "axe", "revolver"];
let health = 100;
let weapon = weapons[0];
let current_weapon_index = 0;
let sceneIndex = 1; // Initialize sceneIndex
let text = document.querySelector("#text");

const button1 = document.querySelector('#button1');
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");

let xp = document.querySelector("#xp");
let hp = document.querySelector("#hp");
let gold = document.querySelector("#gold");

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

button1.onclick = goTown;
button2.onclick = goCave;
button3.onclick = fightDragon;

let scene = [{
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
    button_fn: ["", "", goTown]
},
{
    name: "Battle",
    text: "You see a dragon in front of you.",
    buttons: ["Attack", "Dodge Attack", "Run to Town"],
    button_fn: ["","",goTown]
}];

// Place change functions
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

// Action Functions
function fightDragon() {
    sceneIndex = 3; // Update sceneIndex
    updateScene(sceneIndex);
}
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

// Set initial button text
function updateScene(sceneIndex) {
    button1.innerText = scene[sceneIndex].buttons[0];
    button2.innerText = scene[sceneIndex].buttons[1];
    button3.innerText = scene[sceneIndex].buttons[2];
    button1.onclick = scene[sceneIndex].button_fn[0];
    button2.onclick = scene[sceneIndex].button_fn[1];
    button3.onclick = scene[sceneIndex].button_fn[2];

    text.innerText = scene[sceneIndex].text;
}
