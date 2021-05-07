"use strict";
var Aufgabe2_3;
(function (Aufgabe2_3) {
    Aufgabe2_3.posibilityTop = [];
    Aufgabe2_3.posibilityMiddle = [];
    Aufgabe2_3.posibilityBottom = [];
    let path = window.location.pathname.substring(0, window.location.pathname.lastIndexOf("/") + 1);
    /*------
    Statue 1
    -------*/
    //Statue1Top
    let s1Top = new Aufgabe2_3.Posibility("statue1 - Top", 0, path + "images/top/statue1_top.png");
    //Statue1Middle
    let s1Middle = new Aufgabe2_3.Posibility("statue1 - Middle", 1, path + "images/middle/statue1_middle.png");
    //Statue1Bottom
    let s1Bottom = new Aufgabe2_3.Posibility("statue1 - Bottom", 2, path + "images/bottom/statue1_bottom.png");
    Aufgabe2_3.selectedElements = { top: Aufgabe2_3.posibilityTop[0], middle: Aufgabe2_3.posibilityMiddle[0], bottom: Aufgabe2_3.posibilityBottom[0] };
    /*------
    Statue 2
    -------*/
    //Statue2Top
    let s2Top = new Aufgabe2_3.Posibility("statue2 - Top", 0, path + "images/top/statue2_top.png");
    //Statue2Middle
    let s2Middle = new Aufgabe2_3.Posibility("statue2 - Middle", 1, path + "images/middle/statue2_middle.png");
    //Statue2Bottom
    let s2Bottom = new Aufgabe2_3.Posibility("statue2 - Middle", 2, path + "images/bottom/statue2_bottom.png");
    /*------
    Statue 3
    -------*/
    //Statue3Top
    let s3Top = new Aufgabe2_3.Posibility("statue3 - Top", 0, path + "images/top/statue3_top.png");
    //Statue3Middle
    let s3Middle = new Aufgabe2_3.Posibility("statue3 - Middle", 1, path + "images/middle/statue3_middle.png");
    //Statue3Bottom
    let s3Bottom = new Aufgabe2_3.Posibility("statue3 - Middle", 2, path + "images/bottom/statue3_bottom.png");
    /*------
    Statue 4
    -------*/
    //Statue4Top
    let s4Top = new Aufgabe2_3.Posibility("statue4 - Top", 0, path + "images/top/statue4_top.png");
    //Statue4Middle
    let s4Middle = new Aufgabe2_3.Posibility("statue4 - Middle", 1, path + "images/middle/statue4_middle.png");
    //Statue4Bottom
    let s4Bottom = new Aufgabe2_3.Posibility("statue4 - Middle", 2, path + "images/bottom/statue4_bottom.png");
})(Aufgabe2_3 || (Aufgabe2_3 = {}));
//# sourceMappingURL=data.js.map