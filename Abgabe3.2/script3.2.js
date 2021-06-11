"use strict";
var P_3_2Server;
(function (P_3_2Server) {
    let urlServer = "https://lukasschmidapp.herokuapp.com";
    //let urlServer: string = "http://localhost:8100"
    let btSendJSON = document.getElementById("sendJSON");
    btSendJSON.addEventListener("click", sendtoJson);
    let buttonHTML = document.getElementById("sendButton");
    buttonHTML.addEventListener("click", sendtoHTML);
    let formData = new FormData(document.forms[0]);
    async function sendtoJson() {
        let formDataJson = new FormData(document.forms[0]); //FormData Objekt wird deklariert & wird auf Formelement verwiesen
        console.log(formDataJson.get("name")); //Holt sich die Zeichenkette mit dem Attribut "name"
        for (let entry of formDataJson) { //Geht die Einträge der FormData durch
            console.log(entry);
            console.log("name: " + entry[0]); //Gibt "name" den ersten Eintrag aus                
            console.log("value: " + entry[1]); //Gibt "value" den zweiten Eintrag aus (also das, was im Formular eingegeben wurde)      
        }
        let url = urlServer + "/json"; //Verweist auf die HerokuApp
        let query = new URLSearchParams(formDataJson);
        url = url + "?" + query.toString(); //URL wird um Query String erweitert          
        let response = await fetch(url); //Daten werden asynchron gesendet     
        let text = await response.text();
        console.log("Answer: " + response);
        let answerText = document.getElementById("answer"); //Gibt die Antwort auf der Seite aus
        answerText.innerText = text;
        let answerJson = await response.json();
        console.log(answerJson);
    }
    async function sendtoHTML() {
        let formDataHTML = new FormData(document.forms[0]);
        let url = urlServer + "/html";
        let query = new URLSearchParams(formDataHTML);
        url = url + "?" + query.toString();
        let response = await fetch(url);
        let answerText = document.getElementById("answer"); //Daten werden asynchron gesendet     
        let text = await response.text();
        answerText.innerText = text;
    }
})(P_3_2Server || (P_3_2Server = {}));
//# sourceMappingURL=script3.2.js.map