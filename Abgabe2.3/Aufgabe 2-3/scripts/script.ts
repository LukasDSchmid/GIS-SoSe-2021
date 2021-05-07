namespace Aufgabe2_3{

    export class Posibility {

        name: string;
        type: number;
        link: string;

        constructor (_name: string, _type: number, _link:string){

            this.name = _name;
            this.type = _type;
            this.link = _link;

            if(this.type == 0){

                posibilityTop.push(this);
            }

            else if (this.type == 1){

                posibilityMiddle.push(this);
            }

            else if (this.type == 2){

                posibilityBottom.push(this);
            }
        }
    }

    export interface Select{

        top: Posibility;
        middle: Posibility;
        bottom: Posibility;
    }

    let path: string = window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1);
    
    if (path == "index.html" || path == "" ) {
        let imageTop: HTMLImageElement = <HTMLImageElement>document.getElementById("headTop");
        let imageMiddle: HTMLImageElement = <HTMLImageElement>document.getElementById("bodyMiddle");
        let imageBottom: HTMLImageElement = <HTMLImageElement>document.getElementById("baseBottom");

        window.addEventListener("load", loadImage);
        
        function loadImage(): void {
           
            imageTop.src = selectedElements.top.link;
            imageMiddle.src = selectedElements.middle.link;
            imageBottom.src = selectedElements.bottom.link;

            console.log(selectedElements);
        }

        let hEditTop: HTMLButtonElement = <HTMLButtonElement>document.getElementById("hButton");
        hEditTop.addEventListener("click", openDetailTop);

        let mEditMiddle: HTMLButtonElement = <HTMLButtonElement>document.getElementById("mButton");
        mEditMiddle.addEventListener("click", openDetailMiddle);

        let bEditBottom: HTMLButtonElement = <HTMLButtonElement>document.getElementById("bButton");
        bEditBottom.addEventListener("click", openDetailBottom);

        function openDetailTop(): void{

            window.open("top.html", "_self");
            console.log("Show head selection");

        }

        function openDetailMiddle(): void{

            window.open("middle.html", "_self");
            console.log("Show body selection");
            
        }

        function openDetailBottom(): void{

            window.open("bottom.html", "_self");
            console.log("Show base selection");
            
        }


    }

}