// Zeilenkommentar Strg + #

/**Blockkommentar START
 * Blockkommentar ENDE */





/***** Variablen 01 *******/

// console.log("Hi!");
// console.log(Hi);

/* Deklaration + Wertzuweisung I */

// let firstName; // Deklaration (Definition)
// console.log(firstName); // Ausgabe

// firstName = "Max"; // Wertzuweisung | assignment
// console.log(firstName); // Ausgabe
// console.log("Inhalt: " + firstName); // Ausgabe
// let familyName = "Mütze"; // Deklaration und Wertzuweisung (geht in einer Zeile)
// console.log("Hi, ich bin " + firstName + " " + familyName +"!");

/*  
    Wertzuweisung II + Datentypen 
    JS ist ein untypisierte Sprache!
*/
let test;

/* undefined */
console.log("Datentyp: " + typeof test); // Ausgabe Datentyp
console.log("Inhalt: " + test); // Ausgabe Inhalt
console.log("----------------")

test = "hi"; // string
console.log("Datentyp: " + typeof test); // Ausgabe Datentyp
console.log("Inhalt: " + test); // Ausgabe Inhalt
console.log("----------------")

test = 2; // number
console.log("Datentyp: " + typeof test); // Ausgabe Datentyp
console.log("Inhalt: " + test); // Ausgabe Inhalt
console.log("----------------")

console.log("Datentyp: " + typeof test); // Ausgabe Datentyp
console.log("Inhalt: " + test); // Ausgabe Inhalt
console.log("----------------")

/* Variablen vs. Konstanten in JS */
// Variable

test = "hi"; // Wertzuweisung (Initialisierung)
test = "hello"; // Überschrieben
console.log("Inhalt: " + test); // Ausgabe

// Konstante 
const test2 = "Hi!"; // Deklaration + Wertzuweisung gemeinsam !
test2 = "hello"
console.log("Inhalt: " + test2); // Ausgabe

