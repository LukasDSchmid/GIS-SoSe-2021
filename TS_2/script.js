"use strict";
var TS_2;
(function (TS_2) {
    let events = [];
    class concertEvent {
        constructor(interpret, price, date) {
            this.interpret = interpret;
            this.price = price;
            this.date = date;
        }
    }
    let button = document.getElementById("eventButton");
    button.addEventListener("click", addToList);
    function addToList() {
        concertEvent.arguments;
    }
    function submitToEventlist(name, price, date) {
        events.push({ name, price, date });
    }
    function hasInterpret(array, name) {
        for (const entry of array) {
            if (entry[0] === name) {
                return true;
            }
        }
        return false;
    }
    function hasPrice(array, price) {
        for (const entry of array) {
            if (entry[0] === price) {
                return true;
            }
        }
        return false;
    }
    function hasDate(array, date) {
        for (const entry of array) {
            if (entry[0] === date) {
                return true;
            }
        }
        return false;
    }
})(TS_2 || (TS_2 = {}));
//# sourceMappingURL=script.js.map