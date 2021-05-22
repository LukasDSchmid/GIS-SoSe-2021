namespace Aufgabe2_5{

    let selected: Posibility;
    let htmlImgs: HTMLImageElement[] = [];
    let path: string = window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1);

    let pictureTop: HTMLImageElement = <HTMLImageElement>document.getElementById("headTop");
    let pictureMiddle: HTMLImageElement = <HTMLImageElement>document.getElementById("bodyMiddle");
    let pictureBottom: HTMLImageElement = <HTMLImageElement>document.getElementById("baseBottom");

    let buttSave: HTMLButtonElement = <HTMLButtonElement>document.getElementById("buttSave");
    buttSave.addEventListener("click", saveSelection);
    let buttCancel: HTMLButtonElement = <HTMLButtonElement>document.getElementById("buttCancel");


    window.addEventListener("load", loadContent);

    async function loadContent (): Promise<void>{   
        await getPossibilitysFromURL("dataSheet.json");

        let json: string = sessionStorage.getItem(keyConfig);
        if (json != null) {
            selectedFromJSON(json);
        }
        
        loadImages();
        if(path == "sTop.html"){
            selected = selectElements.top;
            addContentToWindow(posibilityTop);
        }
        else if(path == "sMiddle.html"){
            selected = selectElements.middle;
            addContentToWindow(posibilityMiddle);
        }
        else if(path == "sBottom.html"){
            selected = selectElements.bottom;
            addContentToWindow(posibilityBottom);
        }

        if (selectElements.top == undefined || selectElements.middle == undefined || selectElements.bottom == undefined) {
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

    function loadImages(): void {
        if (selectElements.top != undefined) {
            pictureTop.src = selectElements.top.link;
        }
        if (selectElements.middle != undefined) {
            pictureMiddle.src = selectElements.middle.link;
        }
        if (selectElements.bottom != undefined) {
            pictureBottom.src = selectElements.bottom.link;
        }
    }
        

    function addContentToWindow (_images: Posibility[]): void {
        let divAdd: HTMLDivElement = <HTMLDivElement>document.getElementById("selectPartImg");       
        _images.forEach(img => {
            let imgElement: HTMLImageElement = document.createElement("img");
            htmlImgs.push(imgElement);
            imgElement.src = img.link;
            if (img == selected){
                setSelected(img, imgElement);
            }
            imgElement.addEventListener("click", function(): void {
                setSelected(img, imgElement);                
            });
            divAdd.appendChild(imgElement);
        });
    }

    function setSelected (_img: Posibility, _imgElement: HTMLImageElement): void {
        selected = _img;
        _imgElement.className += "selectedImage";
        console.log("selected: " + _img.name);        
        htmlImgs.forEach(htmlImg => {
            if(htmlImg != _imgElement) {
                htmlImg.classList.remove("selectedImage");
            }
        });
    }

    function saveSelection(): void{
        if(path == "sTop.html"){
            selectElements.top = selected;
            window.open("sMiddle.html", "_self");
        }
        else if(path == "sMiddle.html"){
            selectElements.middle = selected;
            window.open("sBottom.html", "_self");
        }
        else if(path == "sBottom.html"){
            selectElements.bottom = selected;
            window.open("final.html", "_self");
        }
        selectedToJSON();
        console.log("selected: " + selected.name);
    }
   
    function cancel(): void {
        if(path == "sTop.html"){
            window.open("final.html", "_self");
        }
        else if(path == "sMiddle.html"){
            selectElements.middle = selected;
            window.open("sTop.html", "_self");
        }
        else if(path == "sBottom.html"){
            selectElements.bottom = selected;
            window.open("sMiddle.html", "_self");
        }    

    }

    function back(): void {
        let pathToOpen: string;
        if (path == "sMiddle.html") {
            pathToOpen = "sTop.html";
        } else if (path == "sBottom.html") {
            pathToOpen = "sMiddle.html";
        }
        window.open(pathToOpen, "_self");
    }


}