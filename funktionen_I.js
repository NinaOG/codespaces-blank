// Funktionsaufruf | call

// Funktionsrumpf | callee
// Funktionsdeklaration

/***** Funktionen 02a *****/
// 2a. Parametrisierung + Datenübergabe von INNEN


/ Funktionsaufruf | call



// Funktionsrumpf | callee
// Funktionsdeklaration

/***** Funktionen 02a *****/
// 2a. Parametrisierung + Datenübergabe von INNEN



ausgabeName2(;

function ausgabeName2(firstName) { // Parameter
    console.log("Hallo, " + firstName + "!");
}

/***** Funktionen 02b *****/
// 2b. Parametrisierung + Datenübergabe von AUSSEN

// console.log(firstName); // Fehler : scope!
ausgabeName2("Kevin"); // Argument + --> Daten für Parameter 
ausgabeName2("Klaus"); 
ausgabeName2("Ibrahim"); 

function ausgabeName2(firstName) { // Parameter
    console.log("Hallo, " + firstName + "!");

/***** Funktionen 02c *****/
// 2c. Mehrere Parameter / Argumente

function ausgabeName2(firstName, familyName) { // Parameter
    console.log("Hallo, " + firstName + "!");
}