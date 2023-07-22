import {
    partClickHandler,
    partMouseOutHandler,
    partMouseOverHandler,
} from "../handlers.js";
import {
    characterNames,
    changeableTypes,
    structuralNames,
    structurTypes,
    partNames,
    parentNames,
    changeableNames,
    changeableFullName,
} from "../types/types.js";

class Part {
    public readonly div: HTMLDivElement;
    public readonly name: partNames;
    public readonly type: structurTypes;

    constructor(name: partNames, type: structurTypes) {
        this.name = name;
        this.type = type;
        this.div = document.getElementsByClassName(
            this.name
        )[0] as HTMLDivElement;
    }
    move(x: number | string, y: number | string) {
        /** @x can be just a number and then it will be treated as a number of pixels.
         * Otherwise use it as a string (eg. translate(-2%,0px) */

        x = typeof x === "number" ? x + "px" : x;
        y = typeof y === "number" ? y + "px" : y;

        this.div.style.translate = `${x} ${y}`;
    }
    rotate(deg: number) {
        this.div.style.rotate = `${deg}deg`;
    }
    scale(xScale: number = 1, yScale: number = 1) {
        this.div.style.scale = `${xScale} ${yScale})`;
    }
    animate(
        transformName: string,
        transformValue: string,
        duration: number = 1,
        defaultValue: string = "0",
        iterations: number = Infinity
    ) {
        this.div.animate(
            [
                {
                    // from
                    transform: `${transformName}(${defaultValue})`,
                    easing: "ease-in-out",
                },
                {
                    // to
                    transform: `${transformName}(${transformValue})`,
                    easing: "ease-in-out",
                },
                {
                    // and return to origin position
                    transform: `${transformName}(${defaultValue})`,
                    easing: "ease-in-out",
                },
            ],
            {
                duration: duration * 1000,
                iterations: iterations,
            }
        );
    }
}

export class ChangeablePart extends Part {
    private characterName: characterNames;
    private currentItem: number;
    private possibleChange: Array<string>; // doesn't work when overrideImageName is set
    private readonly originPropertyName: changeableNames; // used by partSwitchHandler
    private readonly overrideImageName: string;
    private readonly structureParent: parentNames; // used for left/right elements as the img folder is just a plurar
    public active: boolean;
    public type: changeableTypes;

    constructor(
        name: changeableNames,
        type: changeableTypes,
        overrideImageName?: string,
        currentItem?: number,
        possibleChange?: Array<string>
    ) {
        super((name + type) as changeableFullName, type);

        this.type = type;
        this.active = false;
        this.currentItem = currentItem ? currentItem : 0;
        this.overrideImageName = overrideImageName;
        this.originPropertyName = name;

        if (name.slice(0, 4) === "left") {
            this.structureParent = name.slice(4).toLowerCase() as parentNames;
        }
        if (name.slice(0, 5) === "right") {
            this.structureParent = name.slice(5).toLowerCase() as parentNames;
        }

        this.div.onmouseout = () => {
            this.active && partMouseOutHandler(this);
        };

        this.div.onmouseover = () => {
            this.active && partMouseOverHandler(this);
        };
        this.div.onclick = () => {
            //? headBody is more like a structural parts
            this.active && this.name !== "headBody" && partClickHandler(this);
        };
    }
    // priority 3 is characterName, 2 is possibleChange and 1 is overrideImageName
    get imageName() {
        if (!this.characterName) {
            return console.warn(
                "Initalize part first. Use character setter first"
            );
        }

        let imgName = this.characterName + this.currentItem + ".svg";

        if (this.possibleChange) {
            imgName = `${this.possibleChange[this.currentItem]}.svg`;
        }
        if (this.overrideImageName) {
            imgName = `${this.overrideImageName + this.currentItem}.svg`;
        }

        return imgName;
    }
    get imageLocation() {
        // cases like ../../img/leftEye/ so they will become ../../img/eye
        const propertyName = this.structureParent
            ? this.structureParent
            : this.originPropertyName;

        return `url(../../img/${this.type.toLowerCase()}/${propertyName}/${
            this.imageName
        })`;
    }
    set character(characterName: characterNames) {
        this.div.id = characterName + "-" + this.name;
        this.characterName = characterName;
    }
    hide() {
        this.div.style.display = "none";
    }
    show() {
        this.div.style.display = "flex";
    }
    activate() {
        this.active = true;
        this.div.style.pointerEvents = "visible";
    }
    deactivate() {
        this.active = false;
        this.div.style.pointerEvents = "none";
    }
    highlight() {
        this.div.style.cursor = "pointer";
        this.div.style.filter = "drop-shadow(0px 0px 2px rgba(100, 10, 10, 1))";
        setTimeout(() => {
            this.div.style.filter = "";
        }, 2000);
    }
    nextStyle() {
        this.currentItem++;
        this.div.style.backgroundImage = this.imageLocation;
    }
    previousStyle() {
        this.currentItem--;
        if (this.currentItem < 0) {
            this.currentItem = 0;
        }

        this.div.style.backgroundImage = this.imageLocation;
    }
}

export class StructuralPart extends Part {
    public static type: structurTypes = "Structural";
    constructor(name: structuralNames) {
        super(name, StructuralPart.type);
    }
}
