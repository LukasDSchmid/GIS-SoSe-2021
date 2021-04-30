namespace Aufgabe2_2{

    /*-----------
    Aufgabe 1 a.)
    ------------*/
    
    console.log("Die kleinste Zahl ist: " + min(0, -3, 20, 9));
    
    function min (...nummer: number[]): number{
    
        let minimum: number = nummer[0]
    
        for(let i: number = 0; i = nummer.length; i++){
    
            const safeNumber: number = nummer[i];
    
            if(safeNumber < minimum){
    
                minimum = safeNumber;
            }
    
        }
    
        return minimum;
    
    }

    /*-----------
    Aufgabe 1 b.)
    ------------*/

    
    
    
}
    