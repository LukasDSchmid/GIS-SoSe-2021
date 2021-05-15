"use strict";
var Aufgabe2_4;
(function (Aufgabe2_4) {
    Aufgabe2_4.keyConfig = "ConfigJson";
    Aufgabe2_4.selectElements = { top: undefined, middle: undefined, bottom: undefined };
    class Posibility {
        constructor(_name, _type, _link) {
            this.name = _name;
            this.type = _type;
            this.link = _link;
            if (this.type == 0) {
                this.removeSameFromArray(Aufgabe2_4.posibilityTop, this.name);
                Aufgabe2_4.posibilityTop.unshift(this);
            }
            else if (this.type == 1) {
                this.removeSameFromArray(Aufgabe2_4.posibilityMiddle, this.name);
                Aufgabe2_4.posibilityMiddle.unshift(this);
            }
            else if (this.type == 2) {
                this.removeSameFromArray(Aufgabe2_4.posibilityBottom, this.name);
                Aufgabe2_4.posibilityBottom.unshift(this);
            }
        }
        removeSameFromArray(posArray, name) {
            posArray.forEach((element, i) => {
                if (element.name === name) {
                    posArray.splice(i, 1);
                }
            });
        }
        getInterface() {
            return { name: this.name, type: this.type, link: this.link };
        }
    }
    Aufgabe2_4.Posibility = Posibility;
    function selectedToJSON() {
        let json;
        json = JSON.stringify(Aufgabe2_4.selectElements);
        console.log(json);
        sessionStorage.setItem(Aufgabe2_4.keyConfig, json);
    }
    Aufgabe2_4.selectedToJSON = selectedToJSON;
    function selectedFromJSON(jsonStr) {
        let json = JSON.parse(jsonStr);
        Object.keys(json).forEach(key => {
            if (key == "top") {
                let pos = json[key];
                let topPosition = new Posibility(pos.name, pos.type, pos.link);
                Aufgabe2_4.selectElements.top = topPosition;
            }
            else if (key == "middle") {
                let pos = json[key];
                let middlePosition = new Posibility(pos.name, pos.type, pos.link);
                Aufgabe2_4.selectElements.middle = middlePosition;
            }
            else if (key == "bottom") {
                let pos = json[key];
                let bottomPosition = new Posibility(pos.name, pos.type, pos.link);
                Aufgabe2_4.selectElements.bottom = bottomPosition;
            }
        });
    }
    Aufgabe2_4.selectedFromJSON = selectedFromJSON;
    let path = window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1);
    if (path == "index.html" || path == "") {
        window.addEventListener("load", finalImage);
        function finalImage() {
            let json = sessionStorage.getItem(Aufgabe2_4.keyConfig);
            if (json != null) {
                selectedFromJSON(json);
                if (Aufgabe2_4.selectElements.top == undefined) {
                    window.open("sTop.html", "_self");
                }
                else if (Aufgabe2_4.selectElements.middle == undefined) {
                    window.open("sMiddle.html", "_self");
                }
                else if (Aufgabe2_4.selectElements.bottom == undefined) {
                    window.open("sBottom.html", "_self");
                }
                else {
                    window.open("final.html", "_self");
                }
            }
            else {
                console.log("No correct selection!");
                window.open("sTop.html", "_self");
            }
        }
    }
    else if (path == "final.html") {
        let pictureTop = document.getElementById("headTop");
        let pictureMiddle = document.getElementById("bodyMiddle");
        let pictureBottom = document.getElementById("baseBottom");
        window.addEventListener("load", finalImage);
        function finalImage() {
            let json = sessionStorage.getItem(Aufgabe2_4.keyConfig);
            if (json != null) {
                selectedFromJSON(json);
                loadImages();
            }
            else {
                console.log("No correct selection");
                loadImages();
            }
        }
        function loadImages() {
            if (Aufgabe2_4.selectElements.top != undefined) {
                pictureTop.src = Aufgabe2_4.selectElements.top.link;
            }
            if (Aufgabe2_4.selectElements.middle != undefined) {
                pictureMiddle.src = Aufgabe2_4.selectElements.middle.link;
            }
            if (Aufgabe2_4.selectElements.bottom != undefined) {
                pictureBottom.src = Aufgabe2_4.selectElements.bottom.link;
            }
            console.log(Aufgabe2_4.selectElements);
        }
        let hEditTop = document.getElementById("hButton");
        hEditTop.addEventListener("click", openDetailTop);
        let mEditMiddle = document.getElementById("mButton");
        mEditMiddle.addEventListener("click", openDetailMiddle);
        let bEditBottom = document.getElementById("bButton");
        bEditBottom.addEventListener("click", openDetailBottom);
        function openDetailTop() {
            window.open("sTop.html", "_self");
            console.log("Show head selection");
        }
        function openDetailMiddle() {
            window.open("sMiddle.html", "_self");
            console.log("Show body selection");
        }
        function openDetailBottom() {
            window.open("sBottom.html", "_self");
            console.log("Show base selection");
        }
    }
})(Aufgabe2_4 || (Aufgabe2_4 = {}));
//# sourceMappingURL=script.js.map