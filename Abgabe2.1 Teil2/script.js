"use strict";
/*-----------
Aufgabe 5 a.)
-----------*/
let z = multipy(5, 9);
function multipy(_x, _y) {
    let ergebniss = _x * _y;
    return ergebniss;
}
console.log(z);
/*-----------
Aufgabe 5 b.)
-------------*/
let maximum = max(6, 7);
function max(_zahl1, _zahl2) {
    if (_zahl1 > _zahl2) {
        return _zahl1;
    }
    else {
        return _zahl2;
    }
}
console.log(maximum);
/*-----------
Aufgabe 5 c.)
-------------*/
function f() {
    let x = 1;
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
for (let i = 0; i < 10; i++) {
    let minimum = 1;
    let maximum = 100;
    minimum = Math.ceil(minimum);
    maximum = Math.floor(maximum);
    let random = Math.floor(Math.random() * (maximum - minimum)) + minimum;
    console.log(random);
}
/*------------
Aufgabe 5 e.)
-------------*/
let facto = factorial(8);
function factorial(_n) {
    let fac = 1;
    for (let i = 1; i < _n; i++) {
        fac = fac * i;
    }
    return fac;
}
console.log(facto);
/*------------
Aufgabe 5 f.)
--------------*/
leapyears();
function leapyears() {
    let date = new Date();
    let current = date.getFullYear();
    for (let i = 1900; i <= current; i++) {
        if ((i % 4) == 0 && (i % 100) != 0) {
            console.log(i);
        }
        else if ((i % 400) == 0) {
            console.log(i);
        }
    }
}
//# sourceMappingURL=script.js.map