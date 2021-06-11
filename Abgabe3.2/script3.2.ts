namespace P_3_2Server {

    let urlServer: string = "https://lukasschmidapp.herokuapp.com";
    //let urlServer: string = "http://localhost:8100"
    let btSendJSON: HTMLButtonElement = <HTMLButtonElement>document.getElementById("sendJSON");
    btSendJSON.addEventListener("click", sendtoJson);
    let buttonHTML: HTMLButtonElement = <HTMLButtonElement>document.getElementById("sendButton");
    buttonHTML.addEventListener("click", sendtoHTML);
    let formData: FormData = new FormData(document.forms[0]);
    

    async function sendtoJson (): Promise<void>{
        let formDataJson: FormData = new FormData(document.forms[0]);       //FormData Objekt wird deklariert & wird auf Formelement verwiesen
        console.log(formDataJson.get("name"));                              //Holt sich die Zeichenkette mit dem Attribut "name"
        for (let entry of formDataJson) {                                   //Geht die Einträge der FormData durch
            console.log(entry);                 
            console.log("name: " + entry[0]);                           //Gibt "name" den ersten Eintrag aus                
            console.log("value: " + entry[1]);                          //Gibt "value" den zweiten Eintrag aus (also das, was im Formular eingegeben wurde)      
        }

        let url: string = urlServer + "/json";                                  //Verweist auf die HerokuApp
        let query: URLSearchParams = new URLSearchParams(<any>formDataJson);                                 
        url = url + "?" + query.toString();                                                        //URL wird um Query String erweitert          
        let response: Response = await fetch(url);                                                  //Daten werden asynchron gesendet     
        let text: string = await response.text()
        console.log("Answer: " + response);
        let answerText: HTMLParagraphElement = <HTMLDivElement>document.getElementById("answer");   //Gibt die Antwort auf der Seite aus
        answerText.innerText = text;
        let answerJson: JSON = await response.json();
        console.log(answerJson);
    }

    async function sendtoHTML (): Promise <void> {
        let formDataHTML: FormData = new FormData(document.forms[0]);
        let url: string = urlServer + "/html";
        let query: URLSearchParams = new URLSearchParams(<any>formDataHTML);                                 
        url = url + "?" + query.toString();     
        let response: Response = await fetch(url);    
        let answerText: HTMLParagraphElement = <HTMLDivElement>document.getElementById("answer");                                              //Daten werden asynchron gesendet     
        let text: string = await response.text()
        answerText.innerText = text;
    }
        
    
}