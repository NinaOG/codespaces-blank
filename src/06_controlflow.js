
// let isJohnOlder, isMarkOlder, sameAge

// let ageMark = 21;
// let ageJohn = 22;


// isJohnOlder = ageJohn > ageMark
// sameAge = ageMark == ageJohn



// if(sameAge)
// {
//     console.log("Gleichalt")
// }
// else if(isJohnOlder)
// {
//     console.log("John ist älter.")
// }
// else{
//     console.log("Mark ist älter")
// }



/****** Fallunterscheidung / SWITCH|CASE 1 ******/

const firstName = "Jane";
let job;

job = "driver";  // .. fährt TAXI! / UBER
job = "diver"; // .. taucht im Rhein!
job = "artist"; // .. malt ein Bild!
job = "pilot"; // .. macht etwas anderes! --> default
job = "teacher"; // .. unterrichtet!
job = "instructor"; // .. unterrichtet!

switch (job) 
{
    case "driver":
        console.log(firstName + " fährt Taxi!")
        break;
    case "diver":
        console.log(firstName + " taucht im Rhein!")
        break;
    case "artist":
        console.log(firstName + " malt ein Bild!")
        break;
    default: // WICHTIG !!!    
    case "pilot":
        console.log(firstName + "macht etwas anderes!")
        break;
    case "teacher":
        console.log(firstName + " unterrichtet!")
        break;
    case "instructor":
        console.log(firstName + "unterrichtet!")
}



/******** Fallunterscheidung / SWITCH|CASE 2 *******/

const cond = true;
const value = 10;

switch (cond) {
    case (value == 1):
        console.log("Value hat den Wert 1.");
        break;
    case (value == 2):
        console.log("Value hat den Wert 2.");
        break;
    default:
        console.log("Value hat einen anderen Wert.");
        break;
}

