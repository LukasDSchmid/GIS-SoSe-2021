"use strict";
var Aufgabe2_4;
(function (Aufgabe2_4) {
    Aufgabe2_4.posibilityTop = [];
    Aufgabe2_4.posibilityMiddle = [];
    Aufgabe2_4.posibilityBottom = [];
    let path = window.location.pathname.substring(0, window.location.pathname.lastIndexOf("/") + 1);
    /*------
    Statue 1
    -------*/
    //Statue1Top
    let s1Top = new Aufgabe2_4.Posibility("statue1 - Top", 0, "images/top/statue1_top.png");
    //Statue1Middle
    let s1Middle = new Aufgabe2_4.Posibility("statue1 - Middle", 1, "images/middle/statue1_middle.png");
    //Statue1Bottom
    let s1Bottom = new Aufgabe2_4.Posibility("statue1 - Bottom", 2, "images/bottom/statue1_bottom.png");
    /*------
    Statue 2
    -------*/
    //Statue2Top
    let s2Top = new Aufgabe2_4.Posibility("statue2 - Top", 0, "images/top/statue2_top.png");
    //Statue2Middle
    let s2Middle = new Aufgabe2_4.Posibility("statue2 - Middle", 1, "images/middle/statue2_middle.png");
    //Statue2Bottom
    let s2Bottom = new Aufgabe2_4.Posibility("statue2 - Bottom", 2, "images/bottom/statue2_bottom.png");
    /*------
    Statue 3
    -------*/
    //Statue3Top
    let s3Top = new Aufgabe2_4.Posibility("statue3 - Top", 0, "images/top/statue3_top.png");
    //Statue3Middle   
    let s3Middle = new Aufgabe2_4.Posibility("statue3 - Middle", 1, "images/middle/statue3_middle.png");
    //Statue3Bottom 
    let s3Bottom = new Aufgabe2_4.Posibility("statue3 - Bottom", 2, "images/bottom/statue3_bottom.png");
    /*------
    Statue 4
    -------*/
    //Statue4Top
    let s4Top = new Aufgabe2_4.Posibility("statue4 - Top", 0, "images/top/statue4_top.png");
    //Statue4Middle
    let s4Middle = new Aufgabe2_4.Posibility("statue4 - Middle", 1, "images/middle/statue4_middle.png");
    //Statue4Bottom 
    let s4Bottom = new Aufgabe2_4.Posibility("statue4 - Bottom", 2, "images/bottom/statue4_bottom.png");
    allPartsArrFromJSON(allPartsArrToJSON());
    function allPartsArrToJSON() {
        let allPosArray = { top: Aufgabe2_4.posibilityTop, middle: Aufgabe2_4.posibilityMiddle, bottom: Aufgabe2_4.posibilityBottom };
        let json = JSON.stringify(allPosArray);
        console.log(json);
        return json;
    }
    Aufgabe2_4.allPartsArrToJSON = allPartsArrToJSON;
    function allPartsArrFromJSON(jsonStr) {
        Aufgabe2_4.posibilityTop = [];
        Aufgabe2_4.posibilityMiddle = [];
        Aufgabe2_4.posibilityBottom = [];
        let json = JSON.parse(jsonStr);
        Object.keys(json).forEach(key => {
            if (key == "top" || key == "middle" || key == "bottom") {
                let posIf = json[key];
                posIf.forEach(pos => {
                    new Aufgabe2_4.Posibility(pos.name, pos.type, pos.link);
                });
            }
        });
    }
    Aufgabe2_4.allPartsArrFromJSON = allPartsArrFromJSON;
})(Aufgabe2_4 || (Aufgabe2_4 = {}));
//# sourceMappingURL=data.js.map