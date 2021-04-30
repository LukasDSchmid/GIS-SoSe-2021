"use strict";
var Aufgabe2_2;
(function (Aufgabe2_2) {
    /*-----------
    Aufgabe 1 a.)
    ------------*/
    console.log("Die kleinste Zahl ist: " + min(0, -3, 20, 9));
    function min(...nummer) {
        let minimum = nummer[0];
        for (let i = 0; i = nummer.length; i++) {
            const safeNumber = nummer[i];
            if (safeNumber < minimum) {
                minimum = safeNumber;
            }
        }
        return minimum;
    }
    /*-----------
    Aufgabe 1 b.)
    ------------*/
})(Aufgabe2_2 || (Aufgabe2_2 = {}));
//# sourceMappingURL=script.js.map