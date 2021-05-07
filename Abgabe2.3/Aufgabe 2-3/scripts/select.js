"use strict";
var Aufgabe2_3;
(function (Aufgabe2_3) {
    let selected;
    let htmlImgs = [];
    let path = window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1);
    window.addEventListener("load", loadContent);
    function loadContent() {
        if (path == "top.html") {
            selected = Aufgabe2_3.selectedElements.top;
            addContentToWindow(Aufgabe2_3.posibilityTop);
        }
        else if (path == "middle.html") {
            selected = Aufgabe2_3.selectedElements.middle;
            addContentToWindow(Aufgabe2_3.posibilityMiddle);
        }
        else if (path == "bottom.html") {
            selected = Aufgabe2_3.selectedElements.bottom;
            addContentToWindow(Aufgabe2_3.posibilityBottom);
        }
    }
    function addContentToWindow(images) {
        let divAdd = document.getElementById("selectPartImg");
        images.forEach(img => {
            let imgElement = document.createElement("img");
            htmlImgs.push(imgElement);
            imgElement.className += "detailImg";
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
    function setSelected(img, imgElement) {
        selected = img;
        imgElement.className += "selectedImage";
        console.log("selected: " + img.name);
        htmlImgs.forEach(htmlImg => {
            if (htmlImg != imgElement) {
                htmlImg.classList.remove("selectedImage");
            }
        });
    }
    let buttSave = document.getElementById("buttSave");
    buttSave.addEventListener("click", saveSelection);
    let buttCancel = document.getElementById("buttCancel");
    buttCancel.addEventListener("click", cancelSelection);
    function saveSelection() {
        if (path == "top.html") {
            Aufgabe2_3.selectedElements.top = selected;
        }
        else if (path == "middle.html") {
            Aufgabe2_3.selectedElements.middle = selected;
        }
        else if (path == "bottom.html") {
            Aufgabe2_3.selectedElements.bottom = selected;
        }
        window.open("index.html", "_self");
        console.log("selected: " + selected.name);
    }
    function cancelSelection() {
        window.open("index.html", "_self");
        console.log("canceled selection");
    }
})(Aufgabe2_3 || (Aufgabe2_3 = {}));
//# sourceMappingURL=select.js.map