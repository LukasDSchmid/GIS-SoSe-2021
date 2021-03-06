namespace P_3_1Server {

    
    document.getElementsByTagName("button")[0].addEventListener("click", send);

    async function send (): Promise<void>{
        let formData: FormData = new FormData(document.forms[0]);       //FormData Objekt wird deklariert & wird auf Formelement verwiesen
        console.log(formData.get("name"));                              //Holt sich die Zeichenkette mit dem Attribut "name"
        for (let entry of formData) {                                   //Geht die Einträge der FormData durch
            console.log(entry);                 
            console.log("name: " + entry[0]);                           //Gibt "name" den ersten Eintrag aus                
            console.log("value: " + entry[1]);                          //Gibt "value" den zweiten Eintrag aus (also das, was im Formular eingegeben wurde)      
        }

        let url: string = "https://lukasschmidapp.herokuapp.com";                                   //Verweist auf die HerokuApp
        let query: URLSearchParams = new URLSearchParams(<any>formData);                                 
        url = url + "?" + query.toString();                                                         //URL wird um Query String erweitert          
        let response: Response = await fetch(url);                                                  //Daten werden asynchron gesendet     
        let text: string = await response.text()
        console.log("Answer:");
        let answerText: HTMLParagraphElement = <HTMLDivElement>document.getElementById("answer");   //Gibt die Antwort auf der Seite aus
        answerText.innerText = text;
        console.log(answerText);
    }
        
    
}