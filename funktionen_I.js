// Funktionsaufruf | call

// Funktionsrumpf | callee
// Funktionsdeklaration

/***** Funktionen 02a *****/
// 2a. Parametrisierung + Datenübergabe von INNEN


// Funktionsaufruf | call


// Funktionsrumpf | callee
// Funktionsdeklaration

/***** Funktionen 02a *****/
// 2a. Parametrisierung + Datenübergabe von INNEN



ausgabeName2

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

// Argumente werden von prompt() geliefert --> Input


/***** Funktionen 03a *****/
// 03a. Vorbereitung -Trennen der Funktionalitäten
// Postulat: one function = one job (uncle Bob)
// SRP single responsibility principle



//1st responsibility: string composing

function ausgabeNamenSRP(firstName, familyName) {  

    //1st responsibility: string composing
    const GAP = " ";
    let outputStr = "Hallo, " + firstName + GAP + familyName + "!"

    //2nd responsibility: string output
    //output ("hi")
    //output (2)
    //output (true);
    console.log(outputStr);
}
