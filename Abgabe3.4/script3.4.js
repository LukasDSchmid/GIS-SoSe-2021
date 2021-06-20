"use strict";
var P_3_4Server;
(function (P_3_4Server) {
    let urlServer = "https://lukasschmidapp.herokuapp.com";
    //let urlServer: string = "http://localhost:8100"
    let sendData = document.getElementById("sendButton");
    sendData.addEventListener("click", sendDataToDB);
    let getData = document.getElementById("getButton");
    getData.addEventListener("click", getDatafromDB);
    let dataForm = document.getElementById("document");
    async function sendDataToDB() {
        let formData = new FormData(document.forms[0]);
        console.log(formData.get("name")); //Holt sich die Zeichenkette mit dem Attribut "name"
        for (let entry of formData) { //Geht die Einträge der FormData durch
            console.log(entry);
            console.log("name: " + entry[0]); //Gibt "name" den ersten Eintrag aus                
            console.log("value: " + entry[1]); //Gibt "value" den zweiten Eintrag aus (also das, was im Formular eingegeben wurde)      
        }
        let query = new URLSearchParams(formData);
        query.append("command", "store");
        let url = urlServer + "?" + query.toString();
        let response = await fetch(url);
        let answerText = document.getElementById("answer"); //Daten werden asynchron gesendet     
        let text = await response.text();
        answerText.innerHTML = text;
        console.log(text);
    }
    async function getDatafromDB() {
        let query = new URLSearchParams();
        query.append("command", "get");
        let url = urlServer + "?" + query.toString(); //URL wird um Query String erweitert          
        let response = await fetch(url); //Daten werden asynchron gesendet     
        let textJSON = await response.json();
        console.log("Answer: " + response);
        let answerText = document.getElementById("answer"); //Gibt die Antwort auf der Seite aus
        answerText.innerText = JSON.stringify(textJSON);
        //let answerJson: JSON = await response.json();
        console.log(JSON.stringify(textJSON));
    }
})(P_3_4Server || (P_3_4Server = {}));
//# sourceMappingURL=script3.4.js.map