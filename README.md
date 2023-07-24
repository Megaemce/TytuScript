<span align="center">
  
  ![TytuScript](img/TytuScript_logo_small.png)

</span>

## Introduction
Kapitan Bomba's characters playground written in TypeScript. <br>
Change body/clothes and animate the characters as you want in UI or use console. 

### Using console to access character's main object
Get direct access to all character's component by simply typing in the console:

````javascript
const character = document.getElementsByClassName("character")[0]
````
Then you can access character's main object by typing `character.self`. Next you can check as following:
````typescript
character.self; // Character class object

const body = character.self.body; // Body class object
const clothes = character.self.clothes; // Clothes class object
const structural = character.self.structural; // Structural class object

character.self.div; // character's div
character.self.name; // character's name
````

### Character's components
The character is composed from the one Body, one Clothes and one Structural objects.
#### Body object
Contains all possible and changeable character body parts. Extending class `Changeable`, containg a leaf div. Parameters and function:
````typescript
// PARAMETERS //
body.characterType; // character's type - Human/Alien
body.leftFoot; // ChangeablePart class object representing leftFoot's body div
// ... and many more 

// FUNCTIONS //
body.parts(); // returns array of all of the body changeable parts

// functions inherited from class Changeable
body.showAll() // make all the parts of the body visible;
body.hideAll()
body.activate() // make all the body's part's handlers active
body.deactivate()
````
#### Clothes object
Contains all possible and changeable character clothes parts. Extending class `Changeable`, containg a leaf div. Parameters and function:
````typescript
// PARAMETERS //
clothes.leftFoot; // ChangeablePart class object representing leftFoot's clothes div
// ... and many more 

// FUNCTIONS //
clothes.parts(); // returns array of all of the clothes changeable parts

clothes.showAll();
clothes.hideAll();
clothes.activate();
clothes.deactivate();
````

#### Structural object
Contains all possible and **unchangeable** character parts. It's a parent div of Body/Clothes divs. Parameters and function:
````typescript
// PARAMETERS // 
structural.arms; // StructuralPart class object representing both arms' div
// ... and many more 

// FUNCTIONS //
structural.parts();  // returns array of all of the unchangeable structural parts
````

#### ChangeablePart object
Part that can be switched to different style. Extending class `Part`. Usefull parameters and functions:
````typescript
const chest = body.chest; // chest element of the body
//         clothes.chest; // chest element of the clothes

// PARAMETERS //
chest.div; // chest's div
chest.type; // type of the part - Body/Clothes
chest.characterName; // name of the character

// FUNCTIONS //
chest.imageLocation(); // getter to check what is the full path of the currently shown chest image
chest.activate(); // makes the part's handlers active
chest.deactivate();
chest.hide(); // hiddes the part
chest.show(); 
chest.highlight(); // adds effect to the part
chest.nextStyle(); // switched to the next style
chest.previousStyle();

// functions inherited from class Part
chest.move(x,y); // moved the div by x and y 
chest.rotate(deg); // rotate the div by deg degree
chest.scale(x,y); // scale the object in x direction by x, and in y direction by y
chest.animate(transformName, transformValue, duration, defaultValue, iteration); // animate 
````

#### StructuralPart object 
Part that cannot be changed. Extending class `Part`. Parameters:
````typescript
const beard = structural.bear; // beard's parent div containing beardBody and beardClothes divs

// PARAMETERS //
beard.div; // beard's parent div
beard.type; // "Structural"
beard.name; // "beard"

// functions inherited from class Part
beard.move(x,y); 
beard.rotate(deg); 
beard.scale(x,y);
beard.animate(transformName, transformValue, duration, defaultValue, iteration);
````
