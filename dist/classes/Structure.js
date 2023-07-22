import { ChangeablePart, StructuralPart } from "./Part.js";
export class Structual {
    constructor(characterType) {
        /** class used to create elements that cannot be switched in styles
         * and they are mostly there to keep their children in proper style.
         * It's also the class used mostly by the animations as when those
         * element are moved both the body and clothes moved all together **/
        this.arms = new StructuralPart("arms");
        this.eyebrows = new StructuralPart("eyebrows");
        this.eyes = new StructuralPart("eyes");
        this.leftArm = new StructuralPart("leftArm");
        this.leftLeg = new StructuralPart("leftLeg");
        this.lowerSection = new StructuralPart("lowerSection");
        this.middleSection = new StructuralPart("middleSection");
        this.rightArm = new StructuralPart("rightArm");
        this.rightLeg = new StructuralPart("rightLeg");
        this.upperSection = new StructuralPart("upperSection");
        this.beard = new StructuralPart("beard");
        this.chest = new StructuralPart("chest");
        this.face = new StructuralPart("face");
        this.hair = new StructuralPart("hair");
        this.head = new StructuralPart("head");
        this.leftCalf = new StructuralPart("leftCalf");
        this.leftEye = new StructuralPart("leftEye");
        this.leftEyebrow = new StructuralPart("leftEyebrow");
        this.leftFoot = new StructuralPart("leftFoot");
        this.leftForearm = new StructuralPart("leftForearm");
        this.leftThigh = new StructuralPart("leftThigh");
        this.leftUpperarm = new StructuralPart("leftUpperarm");
        this.mouth = new StructuralPart("mouth");
        this.nose = new StructuralPart("nose");
        this.rightCalf = new StructuralPart("rightCalf");
        this.rightEye = new StructuralPart("rightEye");
        this.rightEyebrow = new StructuralPart("rightEyebrow");
        this.rightFoot = new StructuralPart("rightFoot");
        this.rightForearm = new StructuralPart("rightForearm");
        this.rightThigh = new StructuralPart("rightThigh");
        this.rightUpperarm = new StructuralPart("rightUpperarm");
        this.tail = undefined;
        this.characterType = characterType;
        if (characterType === "Alien")
            this.tail = new StructuralPart("tail");
    }
    // it could be done with Object.getOwnProperty(this) but in extended classes
    // this get mixed with higher class. I know that there is a way to bind this
    // but I just don't have time as for now to learn how to do it smartly.
    get parts() {
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
    constructor() {
        this.tail = undefined;
    }
    get parts() {
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
    set character(characterName) {
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
    constructor(type) {
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
