
/*-----------
Aufgabe 5 a.)
-----------*/

let z:number = multipy(5, 9);

function multipy(_x:number, _y:number): number{
    let ergebniss: number = _x * _y;
    return ergebniss;
}    

console.log(z);
 

/*-----------
Aufgabe 5 b.)
-------------*/ 

let maximum:number =  max(6, 7);

function max (_zahl1:number, _zahl2:number) : number {

    if (_zahl1 > _zahl2){
        return _zahl1
    }
    else{
        return _zahl2
    }
}
console.log(maximum);


/*-----------
Aufgabe 5 c.) 
-------------*/

function f (): void{

    let x: number = 1;

    console.log(x);

    while (x < 100) {
        
        x = x + 1; 

        console.log(x);
    }  
}

f();

/*------------
Aufgabe 5 d.)
-------------*/

for (let i: number = 0; i < 10; i++) {
    let minimum: number = 1;
    let maximum: number = 100;
    minimum = Math.ceil(minimum);
    maximum = Math.floor(maximum);
    let random: number = Math.floor(Math.random() * (maximum - minimum)) + minimum;
    console.log(random);
}

/*------------
Aufgabe 5 e.)
-------------*/

let facto:number = factorial(8);

function factorial(_n:number):number{
    
    let fac:number = 1;
    for(let i:number = 1; i < _n; i++ ){
        fac = fac * i;
    }
    return fac;
}

console.log(facto);

/*------------
Aufgabe 5 f.)
--------------*/

leapyears();
function leapyears(): void {
    let date: Date = new Date();
    let current: number = date.getFullYear();
    for (let i: number = 1900; i <= current; i++) {
        if ((i % 4) == 0 && (i % 100) != 0) {
            console.log(i);
        } else if ((i % 400) == 0) {
            console.log(i);
        }
    }
}