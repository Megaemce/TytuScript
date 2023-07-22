import { characterSwitchHandler, mainSwitchHandler, partSwitchHandler, } from "./handlers.js";
import Character from "./classes/Character.js";
export const characterArray = [
    "TytusBomba",
    "JanuszSram",
    "SebastianBak",
    "ChorazyTorpeda",
    "Skurwol",
    "Kurvinox",
    "Custom",
];
export const initalCharacter = new Character(characterArray[0]);
let pageNumber = 0;
let characterNumber = 0; // Tytus Bomba
document.getElementById("leftMainSwitch").onclick = () => {
    pageNumber = mainSwitchHandler("left", pageNumber);
};
document.getElementById("rightMainSwitch").onclick = () => {
    pageNumber = mainSwitchHandler("right", pageNumber);
};
document.getElementById("leftCharacterSwitch").onclick = () => {
    characterNumber = characterSwitchHandler("left", characterNumber);
};
document.getElementById("rightCharacterSwitch").onclick = () => {
    characterNumber = characterSwitchHandler("right", characterNumber);
};
document.getElementById("leftBodySwitch").onclick = () => {
    partSwitchHandler("Body", "left");
};
document.getElementById("rightBodySwitch").onclick = () => {
    partSwitchHandler("Body", "right");
};
document.getElementById("leftClothesSwitch").onclick = () => {
    partSwitchHandler("Clothes", "left");
};
document.getElementById("rightClothesSwitch").onclick = () => {
    partSwitchHandler("Clothes", "right");
};
