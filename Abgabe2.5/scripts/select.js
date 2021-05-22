"use strict";
var Aufgabe2_5;
(function (Aufgabe2_5) {
    let selected;
    let htmlImgs = [];
    let path = window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1);
    let pictureTop = document.getElementById("headTop");
    let pictureMiddle = document.getElementById("bodyMiddle");
    let pictureBottom = document.getElementById("baseBottom");
    let buttSave = document.getElementById("buttSave");
    buttSave.addEventListener("click", saveSelection);
    let buttCancel = document.getElementById("buttCancel");
    window.addEventListener("load", loadContent);
    async function loadContent() {
        await Aufgabe2_5.getPossibilitysFromURL("dataSheet.json");
        let json = sessionStorage.getItem(Aufgabe2_5.keyConfig);
        if (json != null) {
            Aufgabe2_5.selectedFromJSON(json);
        }
        loadImages();
        if (path == "sTop.html") {
            selected = Aufgabe2_5.selectElements.top;
            addContentToWindow(Aufgabe2_5.posibilityTop);
        }
        else if (path == "sMiddle.html") {
            selected = Aufgabe2_5.selectElements.middle;
            addContentToWindow(Aufgabe2_5.posibilityMiddle);
        }
        else if (path == "sBottom.html") {
            selected = Aufgabe2_5.selectElements.bottom;
            addContentToWindow(Aufgabe2_5.posibilityBottom);
        }
        if (Aufgabe2_5.selectElements.top == undefined || Aufgabe2_5.selectElements.middle == undefined || Aufgabe2_5.selectElements.bottom == undefined) {
            buttSave.textContent = "Next";
            buttCancel.textContent = "Back";
            if (path == "sTop.html") {
                buttCancel.disabled = true;
            }
            buttCancel.addEventListener("click", back);
        }
        else {
            buttSave.textContent = "save";
            buttCancel.textContent = "cancel";
            buttCancel.addEventListener("click", cancel);
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
    function addContentToWindow(_images) {
        let divAdd = document.getElementById("selectPartImg");
        _images.forEach(img => {
            let imgElement = document.createElement("img");
            htmlImgs.push(imgElement);
            imgElement.src = img.link;
            if (img == selected) {
                setSelected(img, imgElement);
            }
            imgElement.addEventListener("click", function () {
                setSelected(img, imgElement);
            });
            divAdd.appendChild(imgElement);
        });
    }
    function setSelected(_img, _imgElement) {
        selected = _img;
        _imgElement.className += "selectedImage";
        console.log("selected: " + _img.name);
        htmlImgs.forEach(htmlImg => {
            if (htmlImg != _imgElement) {
                htmlImg.classList.remove("selectedImage");
            }
        });
    }
    function saveSelection() {
        if (path == "sTop.html") {
            Aufgabe2_5.selectElements.top = selected;
            window.open("sMiddle.html", "_self");
        }
        else if (path == "sMiddle.html") {
            Aufgabe2_5.selectElements.middle = selected;
            window.open("sBottom.html", "_self");
        }
        else if (path == "sBottom.html") {
            Aufgabe2_5.selectElements.bottom = selected;
            window.open("final.html", "_self");
        }
        Aufgabe2_5.selectedToJSON();
        console.log("selected: " + selected.name);
    }
    function cancel() {
        if (path == "sTop.html") {
            window.open("final.html", "_self");
        }
        else if (path == "sMiddle.html") {
            Aufgabe2_5.selectElements.middle = selected;
            window.open("sTop.html", "_self");
        }
        else if (path == "sBottom.html") {
            Aufgabe2_5.selectElements.bottom = selected;
            window.open("sMiddle.html", "_self");
        }
    }
    function back() {
        let pathToOpen;
        if (path == "sMiddle.html") {
            pathToOpen = "sTop.html";
        }
        else if (path == "sBottom.html") {
            pathToOpen = "sMiddle.html";
        }
        window.open(pathToOpen, "_self");
    }
})(Aufgabe2_5 || (Aufgabe2_5 = {}));
//# sourceMappingURL=select.js.map