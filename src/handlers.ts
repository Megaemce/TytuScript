import { ChangeablePart } from "./classes/Part.js";
import { initalCharacter, characterArray } from "./main.js";
import { changeableTypes } from "./types/types.js";

const title = document.getElementById("title");
const switches = document.getElementsByClassName("elementSwitch");
const leftBodySwitch = document.getElementById("leftBodySwitch");
const leftMainSwitch = document.getElementById("leftMainSwitch");
const rightMainSwitch = document.getElementById("rightMainSwitch");
const rightBodySwitch = document.getElementById("rightBodySwitch");
const bodyNameParagraph = document.getElementById("bodyNameParagraph");
const clothesNameParagraph = document.getElementById("clothesNameParagraph");
const characterNameParagraph = document.getElementById(
    "characterNameParagraph"
);

export function partClickHandler(part: ChangeablePart) {
    leftBodySwitch.style.color = "black";
    rightBodySwitch.style.color = "black";

    if (part.type === "Body") {
        bodyNameParagraph.innerText = part.div.id;
        // set it for partSwitchHandler (see below)
        // part.name contains Strcuture parameter's name+"Body"
        bodyNameParagraph["partName"] = part.name.slice(0, -4);
    }
    if (part.type === "Clothes") {
        clothesNameParagraph.innerText = part.div.id;
        clothesNameParagraph["partName"] = part.name.slice(0, -7);
    }
}

export function partMouseOverHandler(part: ChangeablePart) {
    part.highlight();
}

export function partMouseOutHandler(part: ChangeablePart) {
    part.div.style.filter = "";
}

export function mainSwitchHandler(
    direction: "left" | "right",
    pageNumber: number
) {
    // edge cases
    if (
        (pageNumber === 0 && direction === "left") ||
        (pageNumber === switches.length - 1 && direction === "right")
    )
        return pageNumber;

    leftMainSwitch.style.color = "black";
    switches[pageNumber].setAttribute("style", "display: none");

    direction === "left" ? pageNumber-- : pageNumber++;

    switches[pageNumber].setAttribute("style", "display: flex");

    switch (switches[pageNumber].id) {
        case "characterSwitch":
            title.innerText = "Choose your character";
            leftMainSwitch.style.color = "transparent";

            initalCharacter.body.deactivate();
            initalCharacter.clothes.deactivate();
            initalCharacter.clothes.showAll();

            break;
        case "bodySwitch":
            title.innerText = "Change body details";

            initalCharacter.body.activate();
            initalCharacter.body.showAll();
            initalCharacter.clothes.deactivate();
            initalCharacter.clothes.hideAll();

            break;
        case "clothesSwitch":
            title.innerText = "Change clothes";
            rightMainSwitch.style.color = "black";

            initalCharacter.clothes.activate();
            initalCharacter.clothes.showAll();

            break;
        case "actionSwitch":
            title.innerText = "Check actions";
            rightMainSwitch.style.color = "transparent";

            initalCharacter.body.deactivate();
            initalCharacter.clothes.deactivate();

            initalCharacter.breathing(2);

            break;
    }

    return pageNumber;
}

export function characterSwitchHandler(
    direction: "left" | "right",
    characterNumber: number
) {
    direction === "left" ? characterNumber-- : characterNumber++;

    // inifite character's array switcher
    if (characterNumber < 0) characterNumber = characterArray.length - 1;
    if (characterNumber > characterArray.length - 1) characterNumber = 0;

    initalCharacter.character = characterArray[characterNumber];

    characterNameParagraph.innerText = characterArray[characterNumber];

    return characterNumber;
}

export function partSwitchHandler(
    partType: changeableTypes,
    direction: "left" | "right"
) {
    const bodyPartName = bodyNameParagraph["partName"];
    const clothesName = clothesNameParagraph["partName"];

    if (partType === "Body") {
        // when user still didn't clicked on any element
        if (!bodyPartName) return;

        if (direction === "left") {
            initalCharacter.body[bodyPartName].previousStyle();
        }
        if (direction === "right") {
            initalCharacter.body[bodyPartName].nextStyle();
        }

        bodyNameParagraph.innerText =
            initalCharacter.body[bodyPartName].imageName;
    }
    if (partType === "Clothes") {
        // when user still didn't clicked on any element
        if (!clothesName) return;

        if (direction === "left") {
            initalCharacter.clothes[clothesName].previousStyle();
        }
        if (direction === "right") {
            initalCharacter.clothes[clothesName].nextStyle();
        }

        clothesNameParagraph.innerText =
            initalCharacter.clothes[clothesName].imageName;
    }
}
