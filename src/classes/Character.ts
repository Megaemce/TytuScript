import { characterNames } from "../types/types.js";
import { AlienBody, Body, Clothes, Structual } from "./Structure.js";

export default class Character {
    public readonly div: HTMLDivElement;
    public readonly name: characterNames;
    public readonly body: AlienBody | Body;
    public readonly clothes: Clothes;
    public readonly structural: Structual;

    constructor(characterName: characterNames) {
        this.div = this.buildHTML();
        this.div.id = characterName;
        this.div["self"] = this; // for debugging

        if (characterName === "Kurvinox" || characterName === "Skurwol") {
            this.body = new AlienBody();
        } else {
            this.body = new Body("Human");
        }

        this.clothes = new Clothes();
        this.structural = new Structual();

        this.name = characterName;
        this.character = characterName;
    }
    set character(characterName: characterNames) {
        this.body.character = characterName;
        this.clothes.character = characterName;
    }
    breathing(pace: number) {
        const $ = this.structural;
        $.arms.animate("translateY", "-1%", pace);
        $.upperSection.animate("translateY", "-1%", pace);
        $.chest.animate("scale", "1.01", pace, "1.0");
    }

    move(x: number = 0, y: number = 0) {
        this.structural.parts.forEach((part) => {
            part.move(x, y);
        });
    }

    buildHTML(): HTMLDivElement {
        const editorDiv = document.getElementsByClassName("editor")[0];
        const character = document.createElement("div");
        const upperSection = document.createElement("div");
        const head = document.createElement("div");
        const headBody = document.createElement("div");
        const face = document.createElement("div");
        const faceBody = document.createElement("div");
        const faceClothes = document.createElement("div");
        const hair = document.createElement("div");
        const hairBody = document.createElement("div");
        const hairClothes = document.createElement("div");
        const eyebrows = document.createElement("div");
        const leftEyebrow = document.createElement("div");
        const leftEyebrowBody = document.createElement("div");
        const leftEyebrowClothes = document.createElement("div");
        const rightEyebrow = document.createElement("div");
        const rightEyebrowBody = document.createElement("div");
        const rightEyebrowClothes = document.createElement("div");
        const eyes = document.createElement("div");
        const leftEye = document.createElement("div");
        const leftEyeBody = document.createElement("div");
        const leftEyeClothes = document.createElement("div");
        const rightEye = document.createElement("div");
        const rightEyeBody = document.createElement("div");
        const rightEyeClothes = document.createElement("div");
        const nose = document.createElement("div");
        const noseBody = document.createElement("div");
        const noseClothes = document.createElement("div");
        const beard = document.createElement("div");
        const beardBody = document.createElement("div");
        const beardClothes = document.createElement("div");
        const mouth = document.createElement("div");
        const mouthBody = document.createElement("div");
        const mouthClothes = document.createElement("div");
        const headClothes = document.createElement("div");
        const middleSection = document.createElement("div");
        const chest = document.createElement("div");
        const chestBody = document.createElement("div");
        const chestClothes = document.createElement("div");
        const arms = document.createElement("div");
        const leftArm = document.createElement("div");
        const leftUpperarm = document.createElement("div");
        const leftUpperarmBody = document.createElement("div");
        const leftUpperarmClothes = document.createElement("div");
        const leftForearm = document.createElement("div");
        const leftForearmBody = document.createElement("div");
        const leftForearmClothes = document.createElement("div");
        const leftToolClothes = document.createElement("div");
        const rightArm = document.createElement("div");
        const rightUpperarm = document.createElement("div");
        const rightUpperarmBody = document.createElement("div");
        const rightUpperarmClothes = document.createElement("div");
        const rightForearm = document.createElement("div");
        const rightForearmBody = document.createElement("div");
        const rightForearmClothes = document.createElement("div");
        const rightToolClothes = document.createElement("div");
        const tail = document.createElement("div");
        const tailBody = document.createElement("div");
        const tailClothes = document.createElement("div");
        const lowerSection = document.createElement("div");
        const leftLeg = document.createElement("div");
        const leftThigh = document.createElement("div");
        const leftThighBody = document.createElement("div");
        const leftThighClothes = document.createElement("div");
        const leftCalf = document.createElement("div");
        const leftCalfBody = document.createElement("div");
        const leftCalfClothes = document.createElement("div");
        const leftFoot = document.createElement("div");
        const leftFootBody = document.createElement("div");
        const leftFootClothes = document.createElement("div");
        const rightLeg = document.createElement("div");
        const rightThigh = document.createElement("div");
        const rightThighBody = document.createElement("div");
        const rightThighClothes = document.createElement("div");
        const rightCalf = document.createElement("div");
        const rightCalfBody = document.createElement("div");
        const rightCalfClothes = document.createElement("div");
        const rightFoot = document.createElement("div");
        const rightFootBody = document.createElement("div");
        const rightFootClothes = document.createElement("div");

        character.appendChild(upperSection);
        upperSection.appendChild(head);
        head.appendChild(headBody);
        headBody.appendChild(face);
        face.appendChild(faceBody);
        face.appendChild(faceClothes);
        headBody.appendChild(hair);
        hair.appendChild(hairBody);
        hair.appendChild(hairClothes);
        headBody.appendChild(eyebrows);
        eyebrows.appendChild(leftEyebrow);
        leftEyebrow.appendChild(leftEyebrowBody);
        leftEyebrow.appendChild(leftEyebrowClothes);
        eyebrows.appendChild(rightEyebrow);
        rightEyebrow.appendChild(rightEyebrowBody);
        rightEyebrow.appendChild(rightEyebrowClothes);
        headBody.appendChild(eyes);
        eyes.appendChild(leftEye);
        leftEye.appendChild(leftEyeBody);
        leftEye.appendChild(leftEyeClothes);
        eyes.appendChild(rightEye);
        rightEye.appendChild(rightEyeBody);
        rightEye.appendChild(rightEyeClothes);
        headBody.appendChild(nose);
        nose.appendChild(noseBody);
        nose.appendChild(noseClothes);
        headBody.appendChild(beard);
        beard.appendChild(beardBody);
        beard.appendChild(beardClothes);
        headBody.appendChild(mouth);
        mouth.appendChild(mouthBody);
        mouth.appendChild(mouthClothes);
        head.appendChild(headClothes);

        character.appendChild(middleSection);
        middleSection.appendChild(chest);
        chest.appendChild(chestBody);
        chest.appendChild(chestClothes);
        middleSection.appendChild(arms);
        arms.appendChild(leftArm);
        leftArm.appendChild(leftUpperarm);
        leftUpperarm.appendChild(leftUpperarmBody);
        leftUpperarm.appendChild(leftUpperarmClothes);
        leftArm.appendChild(leftForearm);
        leftForearm.appendChild(leftForearmBody);
        leftForearm.appendChild(leftForearmClothes);
        leftArm.appendChild(leftToolClothes);
        arms.appendChild(rightArm);
        rightArm.appendChild(rightUpperarm);
        rightUpperarm.appendChild(rightUpperarmBody);
        rightUpperarm.appendChild(rightUpperarmClothes);
        rightArm.appendChild(rightForearm);
        rightForearm.appendChild(rightForearmBody);
        rightForearm.appendChild(rightForearmClothes);
        rightArm.appendChild(rightToolClothes);
        middleSection.appendChild(tail);
        tail.appendChild(tailBody);
        tail.appendChild(tailClothes);

        character.appendChild(lowerSection);
        lowerSection.appendChild(leftLeg);
        leftLeg.appendChild(leftThigh);
        leftThigh.appendChild(leftThighBody);
        leftThigh.appendChild(leftThighClothes);
        leftLeg.appendChild(leftCalf);
        leftCalf.appendChild(leftCalfBody);
        leftCalf.appendChild(leftCalfClothes);
        leftLeg.appendChild(leftFoot);
        leftFoot.appendChild(leftFootBody);
        leftFoot.appendChild(leftFootClothes);
        lowerSection.appendChild(rightLeg);
        rightLeg.appendChild(rightThigh);
        rightThigh.appendChild(rightThighBody);
        rightThigh.appendChild(rightThighClothes);
        rightLeg.appendChild(rightCalf);
        rightCalf.appendChild(rightCalfBody);
        rightCalf.appendChild(rightCalfClothes);
        rightLeg.appendChild(rightFoot);
        rightFoot.appendChild(rightFootBody);
        rightFoot.appendChild(rightFootClothes);

        editorDiv.appendChild(character);

        character.className = "character";
        upperSection.className = "upperSection";
        head.className = "head";
        headBody.className = "headBody";
        face.className = "face";
        faceBody.className = "faceBody";
        faceClothes.className = "faceClothes";
        hair.className = "hair";
        hairBody.className = "hairBody";
        hairClothes.className = "hairClothes";
        eyebrows.className = "eyebrows";
        leftEyebrow.className = "leftEyebrow";
        leftEyebrowBody.className = "leftEyebrowBody";
        leftEyebrowClothes.className = "leftEyebrowClothes";
        rightEyebrow.className = "rightEyebrow";
        rightEyebrowBody.className = "rightEyebrowBody";
        rightEyebrowClothes.className = "rightEyebrowClothes";
        eyes.className = "eyes";
        leftEye.className = "leftEye";
        leftEyeBody.className = "leftEyeBody";
        leftEyeClothes.className = "leftEyeClothes";
        rightEye.className = "rightEye";
        rightEyeBody.className = "rightEyeBody";
        rightEyeClothes.className = "rightEyeClothes";
        nose.className = "nose";
        noseBody.className = "noseBody";
        noseClothes.className = "noseClothes";
        beard.className = "beard";
        beardBody.className = "beardBody";
        beardClothes.className = "beardClothes";
        mouth.className = "mouth";
        mouthBody.className = "mouthBody";
        mouthClothes.className = "mouthClothes";
        headClothes.className = "headClothes";
        middleSection.className = "middleSection";
        chest.className = "chest";
        chestBody.className = "chestBody";
        chestClothes.className = "chestClothes";
        arms.className = "arms";
        leftArm.className = "leftArm";
        leftUpperarm.className = "leftUpperarm";
        leftUpperarmBody.className = "leftUpperarmBody";
        leftUpperarmClothes.className = "leftUpperarmClothes";
        leftForearm.className = "leftForearm";
        leftForearmBody.className = "leftForearmBody";
        leftForearmClothes.className = "leftForearmClothes";
        leftToolClothes.className = "leftToolClothes";
        rightArm.className = "rightArm";
        rightUpperarm.className = "rightUpperarm";
        rightUpperarmBody.className = "rightUpperarmBody";
        rightUpperarmClothes.className = "rightUpperarmClothes";
        rightForearm.className = "rightForearm";
        rightForearmBody.className = "rightForearmBody";
        rightForearmClothes.className = "rightForearmClothes";
        rightToolClothes.className = "rightToolClothes";
        tail.className = "tail";
        tailBody.className = "tailBody";
        tailClothes.className = "tailClothes";
        lowerSection.className = "lowerSection";
        leftLeg.className = "leftLeg";
        leftThigh.className = "leftThigh";
        leftThighBody.className = "leftThighBody";
        leftThighClothes.className = "leftThighClothes";
        leftCalf.className = "leftCalf";
        leftCalfBody.className = "leftCalfBody";
        leftCalfClothes.className = "leftCalfClothes";
        leftFoot.className = "leftFoot";
        leftFootBody.className = "leftFootBody";
        leftFootClothes.className = "leftFootClothes";
        rightLeg.className = "rightLeg";
        rightThigh.className = "rightThigh";
        rightThighBody.className = "rightThighBody";
        rightThighClothes.className = "rightThighClothes";
        rightCalf.className = "rightCalf";
        rightCalfBody.className = "rightCalfBody";
        rightCalfClothes.className = "rightCalfClothes";
        rightFoot.className = "rightFoot";
        rightFootBody.className = "rightFootBody";
        rightFootClothes.className = "rightFootClothes";

        return character;
    }
}
