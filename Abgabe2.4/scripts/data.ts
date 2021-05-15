namespace Aufgabe2_4{


    export let posibilityTop: Posibility[] = [];
    export let posibilityMiddle: Posibility[] = [];
    export let posibilityBottom: Posibility[] = [];

    let path: string = window.location.pathname.substring(0, window.location.pathname.lastIndexOf("/") + 1);


    /*------
    Statue 1
    -------*/

    //Statue1Top
    let s1Top: Posibility = new Posibility ("statue1 - Top", 0,"images/top/statue1_top.png");

    //Statue1Middle
    let s1Middle: Posibility = new Posibility ("statue1 - Middle", 1,"images/middle/statue1_middle.png");

    //Statue1Bottom
    let s1Bottom: Posibility = new Posibility ("statue1 - Bottom", 2,"images/bottom/statue1_bottom.png");


    /*------
    Statue 2
    -------*/

    //Statue2Top
    let s2Top: Posibility = new Posibility ("statue2 - Top", 0,"images/top/statue2_top.png");
    
    //Statue2Middle
    let s2Middle: Posibility = new Posibility ("statue2 - Middle", 1,"images/middle/statue2_middle.png");
    
    //Statue2Bottom
    let s2Bottom: Posibility = new Posibility ("statue2 - Bottom", 2,"images/bottom/statue2_bottom.png");



    /*------
    Statue 3
    -------*/

    //Statue3Top
    let s3Top: Posibility = new Posibility ("statue3 - Top", 0,"images/top/statue3_top.png");
  
    //Statue3Middle   
    let s3Middle: Posibility = new Posibility ("statue3 - Middle", 1,"images/middle/statue3_middle.png");
      
    //Statue3Bottom 
    let s3Bottom: Posibility = new Posibility ("statue3 - Bottom", 2,"images/bottom/statue3_bottom.png");

    /*------
    Statue 4
    -------*/

    //Statue4Top
    let s4Top: Posibility = new Posibility ("statue4 - Top", 0,"images/top/statue4_top.png");
  
    //Statue4Middle
    let s4Middle: Posibility = new Posibility ("statue4 - Middle", 1, "images/middle/statue4_middle.png");
    
    //Statue4Bottom 
    let s4Bottom: Posibility = new Posibility ("statue4 - Bottom", 2,"images/bottom/statue4_bottom.png");

    allPartsArrFromJSON(allPartsArrToJSON());
    
    export function allPartsArrToJSON(): string {
        let allPosArray: AllPartsArrInterface = {top: posibilityTop, middle: posibilityMiddle, bottom: posibilityBottom};
        let json: string =  JSON.stringify(allPosArray);
        console.log(json);
        return json;
    }

    export function allPartsArrFromJSON(jsonStr: string): void {
        posibilityTop = [];
        posibilityMiddle = [];
        posibilityBottom = [];
        let json: AllPartsArrInterface = JSON.parse(jsonStr);
        Object.keys(json).forEach(key => {
            if (key == "top" || key == "middle" || key == "bottom") {
                let posIf: PosibilityInterface[] = json[key];
                posIf.forEach(pos => {
                    new Posibility(pos.name, pos.type, pos.link);
                });
            }
        });
    }

    


}