"use strict";
function a1() {
    let x = "Alles";
    console.log(x);
    fuc1();
    console.log(x);
    fuc2();
    console.log(x);
    console.log("Logo!");
}
a1();
function fuc1() {
    console.log("Gute!");
}
function fuc2() {
    console.log("Klar?");
}
/*----------------------------------------------------------------------

a.) Aus der Konsole wird "Alles" "Klar?" "Logo!". Bei dieser Aufgabe ist x der Variablenname und sollte beliebig geändert werden können

b.) Zuerst wird Zeile 2, dann 3, dann 4, danach springt er zu Zeile 11 und beendet die Funktion bei Zeile 12

-------------------------------------------------------------------------*/
function a2() {
    let i = 9;
    do {
        console.log(i);
        i = i - 1;
    } while (i > 0);
}
a2();
/*----------------------------------------------------
a.) Es werden die Zahlen 9 - 1 in absteigender Reiehenfolge ausgegeben, da die do-while Schleife immer eine Zahl herunter zählt
    bis die Bedingung i > 0 nicht mehr erfüllt ist, sprich bis zur Zahl 1
-----------------------------------------*/
/*------------------------------------------------------
Aufgabe 3
Durch die Aussage, "Var Y not found" wird z.B. eine Variable Y benutzt, diese wurde aber nicht deklariert
--------------------------------------------------------*/
let x = "Hallo";
console.log(x);
func1(x);
console.log(x);
func2();
func3();
console.log(x);
function func1(y) {
    y = "Bla";
    console.log(y);
}
function func2() {
    let x = "Blubb";
    console.log(x);
}
function func3() {
    x = "Test";
}
/*----------------------------------------------
Aufgabe 4

a.) Es wird "Hallo Bla Blubb Test" ausgegeben. Korrektur: Es wird "Hallo Bla Hallo Blubb Test"

b.) 1.Globale Variable sind von überall zugreifbar und veränderbar
    2.Lokale Variable sind Variablen, die in einer Methode deklariert wurde und Variablen, die mit einer Methode als Parameter übergeben werden.
    3.Gibt an, was eine Funktion nach einem Durchlauf weitergibt z.B. void: Die Funktion übergibt keinen Parameter.

    "Normale Variablen" können  nur mit einem bestimmten Datentypen deklariert werden z.B. String mit Buchstaben.
    Eine Funktion kann aus mehreren unterschiedlichen Variablen und Datentypen bestehen.
    Sie ähneln sich insofern, dass beide mit einem Varbiablennamen benannt werden können und durch diesen aufgerufen werden können.
-------------------------------------------------*/
//# sourceMappingURL=script.js.map