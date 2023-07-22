export type characterNames =
    | "TytusBomba"
    | "JanuszSram"
    | "SebastianBak"
    | "ChorazyTorpeda"
    | "Skurwol"
    | "Kurvinox"
    | "Custom";
export type characterTypes =
    /** all the character's races */
    "Human" | "Alien" | undefined;
export type changeableNames =
    /** all the elements that will have new head/clothes children added */
    | "head"
    | "beard"
    | "chest"
    | "face"
    | "hair"
    | "leftCalf"
    | "leftEye"
    | "leftEyebrow"
    | "leftFoot"
    | "leftForearm"
    | "leftThigh"
    | "leftUpperarm"
    | "mouth"
    | "nose"
    | "rightCalf"
    | "rightEye"
    | "rightEyebrow"
    | "rightFoot"
    | "rightForearm"
    | "rightThigh"
    | "rightUpperarm"
    | "tail";
export type parentNames =
    /** singular of parent of the left/right childen */
    "calf" | "eye" | "eyebrow" | "foot" | "forearm" | "thigh" | "upperarm";
export type structuralNames =
    /** all the elements that keeps the HTML structure together +
     * all the parents of the Body/Clothes elements. So in the way
     * it's a list of all parents elements */
    | "arms"
    | "eyebrows"
    | "eyes"
    | "upperSection"
    | "leftArm"
    | "leftLeg"
    | "lowerSection"
    | "rightArm"
    | "rightLeg"
    | "middleSection"
    | changeableNames;
export type changeableTypes =
    /** prefixed to changeableParts when they will be created */
    "Body" | "Clothes";
export type structurTypes =
    /** all possible types of elements in character */
    "Structural" | changeableTypes;
export type bodyPartNames =
    /** all the body's part names (eg. "HeadBody") */
    `${changeableNames}Body`;
export type clothesNames =
    /** all the clothes' part names (eg. "HeadClothes") */
    `${changeableNames}Clothes`;
export type changeableFullName =
    /** all body changeable part names. So basically all the leafs elements */
    `${changeableNames}${changeableTypes}`;
export type partNames =
    /** all the leafs and all the parents. So basically all the elements */
    changeableFullName | structuralNames;
export type animationNames =
    /** all animation names*/
    "breathing";
