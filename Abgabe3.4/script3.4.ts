namespace P_3_4Server {

    let urlServer: string = "https://lukasschmidapp.herokuapp.com";
    //let urlServer: string = "http://localhost:8100"
    let sendData: HTMLButtonElement = <HTMLButtonElement>document.getElementById("sendButton");
    sendData.addEventListener("click", sendDataToDB);
    let getData: HTMLButtonElement = <HTMLButtonElement>document.getElementById("getButton");
    getData.addEventListener("click", getDatafromDB);
    let dataForm: HTMLFormElement = <HTMLFormElement> document.getElementById("document");


    async function sendDataToDB (): Promise <void> {
        let formData: FormData = new FormData(document.forms[0]);
        console.log(formData.get("name"));                              //Holt sich die Zeichenkette mit dem Attribut "name"
        for (let entry of formData) {                                   //Geht die Einträge der FormData durch
            console.log(entry);                 
            console.log("name: " + entry[0]);                           //Gibt "name" den ersten Eintrag aus                
            console.log("value: " + entry[1]);                          //Gibt "value" den zweiten Eintrag aus (also das, was im Formular eingegeben wurde)      
        }
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        query.append("command", "store");
        let url: string = urlServer + "?" + query.toString();                                  
        let response: Response = await fetch(url);    
        let answerText: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("answer");                                              //Daten werden asynchron gesendet     
        let text: string = await response.text()
        answerText.innerHTML = text;
        console.log(text);
    }
    

    async function getDatafromDB (): Promise<void>{
        let query: URLSearchParams = new URLSearchParams(); 
        query.append("command", "get");                                
        let url : string = urlServer + "?" + query.toString();                                                        //URL wird um Query String erweitert          
        let response: Response = await fetch(url);                                                  //Daten werden asynchron gesendet     
        let textJSON: Student = await response.json()
        console.log("Answer: " + response);
        let answerText: HTMLParagraphElement = <HTMLDivElement>document.getElementById("answer");   //Gibt die Antwort auf der Seite aus
        answerText.innerText = JSON.stringify(textJSON);
        //let answerJson: JSON = await response.json();
        console.log(JSON.stringify(textJSON));
    }

    interface Student{
        name: string;
        firstname: string;
        matrikel: string;
    }
        
    
}