"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.P_3_2Server = void 0;
var P_3_2Server;
(function (P_3_2Server) {
    let urlServer = "http://localhost:8100";
    document.getElementsByTagName("button")[0].addEventListener("click", send);
    let btSendJSON = document.getElementById("sendJSON");
    btSendJSON.addEventListener("click", send);
    async function send() {
        let formData = new FormData(document.forms[0]); //FormData Objekt wird deklariert & wird auf Formelement verwiesen
        console.log(formData.get("name")); //Holt sich die Zeichenkette mit dem Attribut "name"
        for (let entry of formData) { //Geht die Einträge der FormData durch
            console.log(entry);
            console.log("name: " + entry[0]); //Gibt "name" den ersten Eintrag aus                
            console.log("value: " + entry[1]); //Gibt "value" den zweiten Eintrag aus (also das, was im Formular eingegeben wurde)      
        }
        let url = "https://lukasschmidapp.herokuapp.com"; //Verweist auf die HerokuApp
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString(); //URL wird um Query String erweitert          
        let response = await fetch(url); //Daten werden asynchron gesendet     
        let text = await response.text();
        console.log("Answer: " + response);
        let answerText = document.getElementById("answer"); //Gibt die Antwort auf der Seite aus
        answerText.innerText = text;
        let answerJson = await response.json();
        console.log(answerJson);
    }
})(P_3_2Server = exports.P_3_2Server || (exports.P_3_2Server = {}));
//# sourceMappingURL=serverScript.js.map