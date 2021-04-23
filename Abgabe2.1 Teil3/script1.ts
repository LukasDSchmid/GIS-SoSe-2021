/*-----------
Aufgabe 6 a.)
------------*/

for (let i: number = 1; i <= 7; i++) {
    let hashtag: string = "";
    while (hashtag.length < i) {
        hashtag = hashtag + "#";
    }
    console.log(hashtag);
}

/*----------
Aufgabe 6 b.)
-----------*/

function func (): void{

    let x: number = 1;

    console.log(x);

    while (x < 100) {
        
        x = x + 1;
        
        if(x % 3 == 0){
            let fizz: String = "Fizz";
            console.log(fizz)
        }

        else if(x % 5 == 0 && x % 3 !==0 ){
            let buzz: String = "Buzz"
            console.log(buzz)
        }
        else{
            console.log(x);
        }

    }  
}
func ();

/*-----------
Aufgabe 6 c.)
------------*/
function funct (): void{

    let x: number = 1;

    console.log(x);

    while (x < 100) {
        
        x = x + 1;
        
        if(x % 3 == 0){
            let fizz: String = "Fizz";
            console.log(fizz)
        }

        else if(x % 5 == 0 && x % 3 !==0 ){
            let buzz: String = "Buzz"
            console.log(buzz)
        }
        if (x % 5 == 0 && x % 3 ==0) {
            console.log("FizzBuzz");
        }
        else{
            console.log(x);
        }

    }  
}
funct ();  

/*-----------
Aufgabe 6 d.)
------------*/
let size: number = 8;
let output: string = "";
for (let row: number = 0; row < size; row++) {
    for (let column: number = 0; column < size; column++) {
        if ((row + column) % 2) {
            output = output + " ";
        } else {
            output = output + "#";
        }
    }
    output += "\n";
}
/*----------
Aufgabe 6 e.)
------------*/

output = "";
schachbrettmodellieren(8, 8);

function schachbrettmodellieren(sizeZ: number, sizeS: number): void {
    for (let row: number = 0; row < sizeZ; row++) {
        for (let column: number = 0; column < sizeS; column++) {
            if ((row + column) % 2) {
                output = output + " ";
            } else {
                output = output + "#";
            }
        }
        output += "\n";
    }
    console.log(output);
}