import { characterNames, characterTypes } from "../types/types.js";
import { ChangeablePart, StructuralPart } from "./Part.js";

export class Structual {
    /** class used to create elements that cannot be switched in styles
     * and they are mostly there to keep their children in proper style.
     * It's also the class used mostly by the animations as when those
     * element are moved both the body and clothes moved all together **/
    public readonly arms = new StructuralPart("arms");
    public readonly eyebrows = new StructuralPart("eyebrows");
    public readonly eyes = new StructuralPart("eyes");
    public readonly leftArm = new StructuralPart("leftArm");
    public readonly leftLeg = new StructuralPart("leftLeg");
    public readonly lowerSection = new StructuralPart("lowerSection");
    public readonly middleSection = new StructuralPart("middleSection");
    public readonly rightArm = new StructuralPart("rightArm");
    public readonly rightLeg = new StructuralPart("rightLeg");
    public readonly upperSection = new StructuralPart("upperSection");
    public readonly beard = new StructuralPart("beard");
    public readonly chest = new StructuralPart("chest");
    public readonly face = new StructuralPart("face");
    public readonly hair = new StructuralPart("hair");
    public readonly head = new StructuralPart("head");
    public readonly leftCalf = new StructuralPart("leftCalf");
    public readonly leftEye = new StructuralPart("leftEye");
    public readonly leftEyebrow = new StructuralPart("leftEyebrow");
    public readonly leftFoot = new StructuralPart("leftFoot");
    public readonly leftForearm = new StructuralPart("leftForearm");
    public readonly leftThigh = new StructuralPart("leftThigh");
    public readonly leftUpperarm = new StructuralPart("leftUpperarm");
    public readonly mouth = new StructuralPart("mouth");
    public readonly nose = new StructuralPart("nose");
    public readonly rightCalf = new StructuralPart("rightCalf");
    public readonly rightEye = new StructuralPart("rightEye");
    public readonly rightEyebrow = new StructuralPart("rightEyebrow");
    public readonly rightFoot = new StructuralPart("rightFoot");
    public readonly rightForearm = new StructuralPart("rightForearm");
    public readonly rightThigh = new StructuralPart("rightThigh");
    public readonly rightUpperarm = new StructuralPart("rightUpperarm");
    public readonly tail? = undefined;
    public readonly characterType: characterTypes;
    constructor(characterType?: characterTypes) {
        this.characterType = characterType;

        if (characterType === "Alien") this.tail = new StructuralPart("tail");
    }

    // it could be done with Object.getOwnProperty(this) but in extended classes
    // this get mixed with higher class. I know that there is a way to bind this
    // but I just don't have time as for now to learn how to do it smartly.
    get parts(): Array<StructuralPart> {
        let array = [
            this.arms,
            this.eyebrows,
            this.eyes,
            this.leftArm,
            this.leftLeg,
            this.lowerSection,
            this.middleSection,
            this.rightArm,
            this.rightLeg,
            this.upperSection,
            this.beard,
            this.chest,
            this.face,
            this.hair,
            this.head,
            this.leftCalf,
            this.leftEye,
            this.leftEyebrow,
            this.leftFoot,
            this.leftForearm,
            this.leftThigh,
            this.leftUpperarm,
            this.mouth,
            this.nose,
            this.rightCalf,
            this.rightEye,
            this.rightEyebrow,
            this.rightFoot,
            this.rightForearm,
            this.rightThigh,
            this.rightUpperarm,
        ];
        this.tail && array.push(this.tail);
        return array;
    }
}

class Changeable {
    /** class used to create elements that are changeable in styles
     * this.tail is optional as it's only related to aliens **/
    public beard: ChangeablePart;
    public chest: ChangeablePart;
    public face: ChangeablePart;
    public hair: ChangeablePart;
    public head: ChangeablePart;
    public leftCalf: ChangeablePart;
    public leftEye: ChangeablePart;
    public leftEyebrow: ChangeablePart;
    public leftFoot: ChangeablePart;
    public leftForearm: ChangeablePart;
    public leftThigh: ChangeablePart;
    public leftUpperarm: ChangeablePart;
    public mouth: ChangeablePart;
    public nose: ChangeablePart;
    public rightCalf: ChangeablePart;
    public rightEye: ChangeablePart;
    public rightEyebrow: ChangeablePart;
    public rightFoot: ChangeablePart;
    public rightForearm: ChangeablePart;
    public rightThigh: ChangeablePart;
    public rightUpperarm: ChangeablePart;
    public tail?: ChangeablePart = undefined;
    public characterType: characterTypes;

    get parts(): Array<ChangeablePart> {
        let array = [
            this.beard,
            this.chest,
            this.face,
            this.hair,
            this.head,
            this.leftCalf,
            this.leftEye,
            this.leftEyebrow,
            this.leftFoot,
            this.leftForearm,
            this.leftThigh,
            this.leftUpperarm,
            this.mouth,
            this.nose,
            this.rightCalf,
            this.rightEye,
            this.rightEyebrow,
            this.rightFoot,
            this.rightForearm,
            this.rightThigh,
            this.rightUpperarm,
        ];
        this.tail && array.push(this.tail);
        return array;
    }
    set character(characterName: characterNames) {
        this.parts.forEach((part) => (part.character = characterName));
    }
    showAll() {
        this.parts.forEach((part) => part.show());
    }
    hideAll() {
        this.parts.forEach((part) => part.hide());
    }
    activate() {
        this.parts.forEach((part) => part.activate());
    }
    deactivate() {
        this.parts.forEach((part) => part.deactivate);
    }
}

export class Body extends Changeable {
    /** class used to create human body elements that are changeable.
     * Most character's body elements are generic pictures thus @type
     * will be set to "Human". Otherwise the body's element will have
     * overrideImageName set to undefined, creating the body's elements
     * based on characterName like ".../body/head/face/TytusBomba0.svg"  **/
    constructor(type?: characterTypes) {
        super();
        this.characterType = type;
        this.beard = new ChangeablePart("beard", "Body");
        this.chest = new ChangeablePart("chest", "Body");
        this.face = new ChangeablePart("face", "Body");
        this.hair = new ChangeablePart("hair", "Body");
        this.head = new ChangeablePart("head", "Body");
        this.leftCalf = new ChangeablePart("leftCalf", "Body", type);
        this.leftEye = new ChangeablePart("leftEye", "Body", type);
        this.leftEyebrow = new ChangeablePart("leftEyebrow", "Body");
        this.leftFoot = new ChangeablePart("leftFoot", "Body", type);
        this.leftForearm = new ChangeablePart("leftForearm", "Body", type);
        this.leftThigh = new ChangeablePart("leftThigh", "Body", type);
        this.leftUpperarm = new ChangeablePart("leftUpperarm", "Body", type);
        this.mouth = new ChangeablePart("mouth", "Body");
        this.nose = new ChangeablePart("nose", "Body");
        this.rightCalf = new ChangeablePart("rightCalf", "Body", type);
        this.rightEye = new ChangeablePart("rightEye", "Body", type);
        this.rightEyebrow = new ChangeablePart("rightEyebrow", "Body");
        this.rightFoot = new ChangeablePart("rightFoot", "Body", type);
        this.rightForearm = new ChangeablePart("rightForearm", "Body", type);
        this.rightThigh = new ChangeablePart("rightThigh", "Body", type);
        this.rightUpperarm = new ChangeablePart("rightUpperarm", "Body", type);
    }
}

export class AlienBody extends Body {
    /** class used to create alien body elements that are changeable. **/
    constructor() {
        super();
        super.tail = new ChangeablePart("tail", "Body");
    }
}

export class Clothes extends Changeable {
    /** class used to create body clothes elements that are changeable **/
    constructor() {
        super();
        this.beard = new ChangeablePart("beard", "Clothes");
        this.chest = new ChangeablePart("chest", "Clothes");
        this.face = new ChangeablePart("face", "Clothes");
        this.hair = new ChangeablePart("hair", "Clothes");
        this.head = new ChangeablePart("head", "Clothes");
        this.leftCalf = new ChangeablePart("leftCalf", "Clothes");
        this.leftEye = new ChangeablePart("leftEye", "Clothes");
        this.leftEyebrow = new ChangeablePart("leftEyebrow", "Clothes");
        this.leftFoot = new ChangeablePart("leftFoot", "Clothes");
        this.leftForearm = new ChangeablePart("leftForearm", "Clothes");
        this.leftThigh = new ChangeablePart("leftThigh", "Clothes");
        this.leftUpperarm = new ChangeablePart("leftUpperarm", "Clothes");
        this.mouth = new ChangeablePart("mouth", "Clothes");
        this.nose = new ChangeablePart("nose", "Clothes");
        this.rightCalf = new ChangeablePart("rightCalf", "Clothes");
        this.rightEye = new ChangeablePart("rightEye", "Clothes");
        this.rightEyebrow = new ChangeablePart("rightEyebrow", "Clothes");
        this.rightFoot = new ChangeablePart("rightFoot", "Clothes");
        this.rightForearm = new ChangeablePart("rightForearm", "Clothes");
        this.rightThigh = new ChangeablePart("rightThigh", "Clothes");
        this.rightUpperarm = new ChangeablePart("rightUpperarm", "Clothes");
    }
}

export class AlienClothes extends Clothes {
    /** class used to create alien clothes elements that are changeable**/
    constructor() {
        super();
        super.tail = new ChangeablePart("tail", "Clothes");
    }
}
