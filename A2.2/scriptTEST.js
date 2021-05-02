"use strict";
//namespace Aufgabe2_2{
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
console.log("Die Zahl 50 ist: " + isEven(50));
console.log("Die Zahl 75 ist: " + isEven(75));
console.log("Die Zahl -1 ist: " + isEven(-1)); //Wir müssen mit dem 1. if die negative Zahl in eine Positive umwandeln, um sie auf gerade/ungerade zu prüfen
function isEven(evenTest) {
    let evenSafe = evenTest;
    //negative Zahlen
    if (evenSafe < 0) {
        evenSafe = 0 - evenSafe;
    }
    if (evenSafe == 0) {
        return true;
    }
    else if (evenSafe == 1) {
        return false;
    }
    else {
        return isEven(evenSafe - 2);
    }
}
/*-----------
Aufgabe 1 c.)
------------*/
/*interface student{
    name: string;
    vorname: string;
    alter: number;
    martrikelnummer: number;
    studiengang: string;
}

let student1: student = {
    
    name: "Schmid",
    vorname: "Lukas",
    alter: 20,
    martrikelnummer: 267290,
    studiengang: "OMB2",
}

let student2: student = {
    
    name: "Wait",
    vorname: "Larissa",
    alter: 24,
    martrikelnummer: 268909,
    studiengang: "MKB3",
}

let student3: student = {
    
    name: "Bananane",
    vorname: "Mandarine",
    alter: 19,
    martrikelnummer: 568878,
    studiengang: "WING3",
}

let studentArray: student[] = [student1,student2, student3 ];
studentArray.push({name: "Herdin", vorname: "Dominik", alter: 21, martrikelnummer: 256786, studiengang:"OMB1"})

for(const studentenListe of studentArray){
    showInfo(studentenListe);
}

function showInfo (studentenListe: student): void{

    console.log("Name: " + studentenListe.name + " Vorname: " + studentenListe.vorname + " Alter: " + studentenListe.alter + " Martrikelnummer: " + studentenListe.martrikelnummer + " studiengang: " + studentenListe.studiengang)

}

console.log(student2.name + " studiert im Studiengang " + student2.studiengang);*/
class studenten {
    constructor(_name, _vorname, _alter, _martrikelnummer, _studiengang) {
        this.name = _name;
        this.vorname = _vorname;
        this.alter = _alter;
        this.martrikelnummer = _martrikelnummer;
        this.studiengang = _studiengang;
    }
    showInfo() {
        console.log("Name: " + this.name + " Vorname: " + this.vorname + " Alter: " + this.alter + " Martrikelnummer: " + this.martrikelnummer + " studiengang: " + this.studiengang);
    }
}
let s1 = new studenten("Herdin", "Dominik", 21, 2567, "OMB1");
s1.showInfo();
/*-----------
Aufgabe 2 a.)
-----------*/
function backwards(array) {
    let backList = [];
    for (let j = array.length - 1; j >= 0; j--) {
        backList[j] = array[array.length - j - 1];
    }
    return backList;
}
/*-----------
Aufgabe 2 b.)
-----------*/
function join(...arrays) {
    let jArray1 = [];
    let jArray2 = 0;
    arrays.forEach(array => {
        for (let j = 0; j < array.length; j++) {
            jArray1[jArray2] = array[j];
            jArray2++;
        }
    });
    return jArray1;
}
/*-----------
Aufgabe 2 c.)
-----------*/
function split(array, index1, index2) {
    if (index1 < 0 || index2 < 0) {
        return undefined;
    }
    else if (index2 < index1) {
        let i1 = index1;
        index1 = index2;
        index2 = i1;
    }
    else if (index2 > array.length) {
        return undefined;
    }
    let jArray1 = [];
    let jA = 0;
    for (let j = index1; j <= index2; j++) {
        jArray1[jA] = array[j];
        j++;
    }
    return jArray1;
}
let arr = [5, 42, 17, 2018, -10, 60, -10010];
let arrBack = backwards(arr);
console.log(arr);
console.log(arrBack);
console.log(join(arr, [15, 9001, -440]));
arr = split(arr, 0, 4);
console.log(arr);
console.log(split(arr, 1, 2));
//}
//# sourceMappingURL=scriptTEST.js.map