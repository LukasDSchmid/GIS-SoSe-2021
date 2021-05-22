"use strict";
var Aufgabe2_5;
(function (Aufgabe2_5) {
    Aufgabe2_5.keyConfig = "ConfigJson";
    Aufgabe2_5.selectElements = { top: undefined, middle: undefined, bottom: undefined };
    class Posibility {
        constructor(_name, _type, _link) {
            this.name = _name;
            this.type = _type;
            this.link = _link;
        }
        removeSameFromArray(_posArray, _name) {
            _posArray.forEach((element, i) => {
                if (element.name === _name) {
                    _posArray.splice(i, 1);
                }
            });
        }
        getInterface() {
            return { name: this.name, type: this.type, link: this.link };
        }
    }
    Aufgabe2_5.Posibility = Posibility;
    function selectedToJSON() {
        let json;
        json = JSON.stringify(Aufgabe2_5.selectElements);
        sessionStorage.setItem(Aufgabe2_5.keyConfig, json);
    }
    Aufgabe2_5.selectedToJSON = selectedToJSON;
    function selectedFromJSON(_jsonStr) {
        let json = JSON.parse(_jsonStr);
        Object.keys(json).forEach(key => {
            if (key == "top") {
                let pos = json[key];
                let topPosition = new Posibility(pos.name, pos.type, pos.link);
                Aufgabe2_5.selectElements.top = topPosition;
            }
            else if (key == "middle") {
                let pos = json[key];
                let middlePosition = new Posibility(pos.name, pos.type, pos.link);
                Aufgabe2_5.selectElements.middle = middlePosition;
            }
            else if (key == "bottom") {
                let pos = json[key];
                let bottomPosition = new Posibility(pos.name, pos.type, pos.link);
                Aufgabe2_5.selectElements.bottom = bottomPosition;
            }
        });
    }
    Aufgabe2_5.selectedFromJSON = selectedFromJSON;
    let path = window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1);
    if (path == "index.html" || path == "") {
        window.addEventListener("load", finalImage);
        function finalImage() {
            let json = sessionStorage.getItem(Aufgabe2_5.keyConfig);
            if (json != null) {
                selectedFromJSON(json);
                if (Aufgabe2_5.selectElements.top == undefined) {
                    window.open("sTop.html", "_self");
                }
                else if (Aufgabe2_5.selectElements.middle == undefined) {
                    window.open("sMiddle.html", "_self");
                }
                else if (Aufgabe2_5.selectElements.bottom == undefined) {
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
        window.addEventListener("load", finalLoading);
        function finalLoading() {
            let json = sessionStorage.getItem(Aufgabe2_5.keyConfig);
            if (json != null) {
                selectedFromJSON(json);
                loadImages();
                sendCache("https://gis-communication.herokuapp.com/");
            }
            else {
                console.log("No correct selection");
                loadImages();
            }
        }
        function loadImages() {
            if (Aufgabe2_5.selectElements.top != undefined) {
                pictureTop.src = Aufgabe2_5.selectElements.top.link;
            }
            if (Aufgabe2_5.selectElements.middle != undefined) {
                pictureMiddle.src = Aufgabe2_5.selectElements.middle.link;
            }
            if (Aufgabe2_5.selectElements.bottom != undefined) {
                pictureBottom.src = Aufgabe2_5.selectElements.bottom.link;
            }
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
        async function sendCache(_url) {
            let browserCacheData = JSON.parse(sessionStorage.getItem(Aufgabe2_5.keyConfig));
            console.log("Send cache Elements to Server:");
            console.log(browserCacheData);
            let query = new URLSearchParams(browserCacheData);
            _url = _url + "?" + query.toString();
            let resp = await fetch(_url);
            let text = await resp.json();
            serverAnswer(text);
        }
        function serverAnswer(_answer) {
            let status = document.getElementById("serverAusgabe");
            if (_answer.message != undefined) {
                status.textContent = "Message from Server: " + _answer.message;
                status.style.color = "green";
            }
            else if (_answer.error != undefined) {
                status.textContent = "Message from Server: " + _answer.error;
                status.style.color = "red";
            }
        }
    }
})(Aufgabe2_5 || (Aufgabe2_5 = {}));
//# sourceMappingURL=script.js.map