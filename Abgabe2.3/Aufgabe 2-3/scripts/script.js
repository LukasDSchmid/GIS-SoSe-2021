"use strict";
var Aufgabe2_3;
(function (Aufgabe2_3) {
    class Posibility {
        constructor(_name, _type, _link) {
            this.name = _name;
            this.type = _type;
            this.link = _link;
            if (this.type == 0) {
                Aufgabe2_3.posibilityTop.push(this);
            }
            else if (this.type == 1) {
                Aufgabe2_3.posibilityMiddle.push(this);
            }
            else if (this.type == 2) {
                Aufgabe2_3.posibilityBottom.push(this);
            }
        }
    }
    Aufgabe2_3.Posibility = Posibility;
    let path = window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1);
    if (path == "index.html" || path == "") {
        let imageTop = document.getElementById("headTop");
        let imageMiddle = document.getElementById("bodyMiddle");
        let imageBottom = document.getElementById("baseBottom");
        window.addEventListener("load", loadImage);
        function loadImage() {
            imageTop.src = Aufgabe2_3.selectedElements.top.link;
            imageMiddle.src = Aufgabe2_3.selectedElements.middle.link;
            imageBottom.src = Aufgabe2_3.selectedElements.bottom.link;
            console.log(Aufgabe2_3.selectedElements);
        }
        let hEditTop = document.getElementById("hButton");
        hEditTop.addEventListener("click", openDetailTop);
        let mEditMiddle = document.getElementById("mButton");
        mEditMiddle.addEventListener("click", openDetailMiddle);
        let bEditBottom = document.getElementById("bButton");
        bEditBottom.addEventListener("click", openDetailBottom);
        function openDetailTop() {
            window.open("top.html", "_self");
            console.log("Show head selection");
        }
        function openDetailMiddle() {
            window.open("middle.html", "_self");
            console.log("Show body selection");
        }
        function openDetailBottom() {
            window.open("bottom.html", "_self");
            console.log("Show base selection");
        }
    }
})(Aufgabe2_3 || (Aufgabe2_3 = {}));
//# sourceMappingURL=script.js.map