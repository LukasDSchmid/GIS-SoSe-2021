namespace Aufgabe2_3{


    export let posibilityTop: Posibility[] = [];
    export let posibilityMiddle: Posibility[] = [];
    export let posibilityBottom: Posibility[] = [];

    let path: string = window.location.pathname.substring(0, window.location.pathname.lastIndexOf("/") + 1);


    /*------
    Statue 1
    -------*/

    //Statue1Top

    let s1Top: Posibility = new Posibility ("statue1 - Top", 0, path + "images/top/statue1_top.png");

    
    //Statue1Middle

    let s1Middle: Posibility = new Posibility ("statue1 - Middle", 1, path + "images/middle/statue1_middle.png");


    //Statue1Bottom

    let s1Bottom: Posibility = new Posibility ("statue1 - Bottom", 2, path + "images/bottom/statue1_bottom.png");

    export let selectedElements: Select = {top: posibilityTop[0], middle: posibilityMiddle[0], bottom: posibilityBottom[0]};


    /*------
    Statue 2
    -------*/

    //Statue2Top

    let s2Top: Posibility = new Posibility ("statue2 - Top", 0, path + "images/top/statue2_top.png");

    
    //Statue2Middle
    
    let s2Middle: Posibility = new Posibility ("statue2 - Middle", 1, path + "images/middle/statue2_middle.png");
    
    
    //Statue2Bottom
    
    let s2Bottom: Posibility = new Posibility ("statue2 - Middle", 2, path + "images/bottom/statue2_bottom.png");



    /*------
    Statue 3
    -------*/

    //Statue3Top

    let s3Top: Posibility = new Posibility ("statue3 - Top", 0, path + "images/top/statue3_top.png");

    
    //Statue3Middle
    
    let s3Middle: Posibility = new Posibility ("statue3 - Middle", 1, path + "images/middle/statue3_middle.png");
    
    
    //Statue3Bottom
    
    let s3Bottom: Posibility = new Posibility ("statue3 - Middle", 2, path + "images/bottom/statue3_bottom.png");


    /*------
    Statue 4
    -------*/

    //Statue4Top

    let s4Top: Posibility = new Posibility ("statue4 - Top", 0, path + "images/top/statue4_top.png");

    
    //Statue4Middle
    
    let s4Middle: Posibility = new Posibility ("statue4 - Middle", 1, path + "images/middle/statue4_middle.png");
    
    
    //Statue4Bottom
    
    let s4Bottom: Posibility = new Posibility ("statue4 - Middle", 2, path + "images/bottom/statue4_bottom.png");



    


}