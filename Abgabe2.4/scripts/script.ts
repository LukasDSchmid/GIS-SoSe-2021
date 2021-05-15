namespace Aufgabe2_4{

    export let keyConfig: string = "ConfigJson";
    export let selectElements: Select = {top: undefined, middle: undefined, bottom: undefined};

    export class Posibility {
        name: string;
        type: number;
        link: string;

        constructor (_name: string, _type: number, _link:string){
            this.name = _name;
            this.type = _type;
            this.link = _link;

            if(this.type == 0){
                this.removeSameFromArray(posibilityTop, this.name);
                posibilityTop.unshift(this);
            }
            else if (this.type == 1){
                this.removeSameFromArray(posibilityMiddle, this.name);
                posibilityMiddle.unshift(this);
            }
            else if (this.type == 2){
                this.removeSameFromArray(posibilityBottom, this.name);
                posibilityBottom.unshift(this);
            }
        }

        removeSameFromArray(posArray: Posibility[], name: string): void {
            posArray.forEach((element, i) => {
                if (element.name === name) {
                    posArray.splice(i, 1);
                }
            });
        }

        getInterface(): PosibilityInterface {
            return { name: this.name, type: this.type, link: this.link };
        }
    }

    export interface PosibilityInterface {
        name: string;
        type: number;
        link: string;
    }

    export interface Select{
        top: Posibility;
        middle: Posibility;
        bottom: Posibility;
    }

    export interface AllPartsArrInterface {
        top: Posibility[];
        middle: Posibility[];
        bottom: Posibility[];
    }

    export function selectedToJSON(): void {
        let json: string;
        json = JSON.stringify(selectElements);
        console.log(json);
        sessionStorage.setItem(keyConfig, json);
    }

    export function selectedFromJSON(jsonStr: string): void {
        let json: Select = JSON.parse(jsonStr);
        Object.keys(json).forEach(key => {
            if (key == "top") {
                let pos: PosibilityInterface = json[key];
                let topPosition: Posibility = new Posibility(pos.name, pos.type, pos.link);
                selectElements.top = topPosition;
            } else if (key == "middle") {
                let pos: PosibilityInterface = json[key];
                let middlePosition: Posibility = new Posibility(pos.name, pos.type, pos.link);
                selectElements.middle = middlePosition;
            } else if (key == "bottom") {
                let pos: PosibilityInterface = json[key];
                let bottomPosition: Posibility = new Posibility(pos.name, pos.type, pos.link);
                selectElements.bottom = bottomPosition;
            }
        });
    }



    let path: string = window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1);   
    if (path == "index.html" || path == "" ) {
        window.addEventListener("load", finalImage);
        
        function finalImage(): void {
            let json: string = sessionStorage.getItem(keyConfig);
            if (json != null) {
                selectedFromJSON(json);
                if (selectElements.top == undefined) {
                    window.open("sTop.html", "_self");
                } else if (selectElements.middle == undefined) {
                    window.open("sMiddle.html", "_self");
                } else if (selectElements.bottom == undefined) {
                    window.open("sBottom.html", "_self");
                } else {
                    window.open("final.html", "_self");
                }
            } else {
                console.log("No correct selection!");
                window.open("sTop.html", "_self");
            }
        }
    }
          
    else if(path == "final.html"){
        let pictureTop: HTMLImageElement = <HTMLImageElement>document.getElementById("headTop");
        let pictureMiddle: HTMLImageElement = <HTMLImageElement>document.getElementById("bodyMiddle");
        let pictureBottom: HTMLImageElement = <HTMLImageElement>document.getElementById("baseBottom");

        window.addEventListener("load", finalImage);

        function finalImage(): void {
            let json: string = sessionStorage.getItem(keyConfig);
            if (json != null) {
                selectedFromJSON(json);
                loadImages();
            } else {
                console.log("No correct selection");
                loadImages();
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
            console.log(selectElements);
        }


        let hEditTop: HTMLButtonElement = <HTMLButtonElement>document.getElementById("hButton");
        hEditTop.addEventListener("click", openDetailTop);
        let mEditMiddle: HTMLButtonElement = <HTMLButtonElement>document.getElementById("mButton");
        mEditMiddle.addEventListener("click", openDetailMiddle);
        let bEditBottom: HTMLButtonElement = <HTMLButtonElement>document.getElementById("bButton");
        bEditBottom.addEventListener("click", openDetailBottom);

        function openDetailTop(): void{
            window.open("sTop.html", "_self");
            console.log("Show head selection");
        }
        function openDetailMiddle(): void{
            window.open("sMiddle.html", "_self");
            console.log("Show body selection");   
        }
        function openDetailBottom(): void{
            window.open("sBottom.html", "_self");
            console.log("Show base selection");    
        }

    }
}