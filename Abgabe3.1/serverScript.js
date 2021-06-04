"use strict";
var P_3_1Server;
(function (P_3_1Server) {
    document.getElementsByTagName("button")[0].addEventListener("click", send);
    async function send() {
        let formData = new FormData(document.forms[0]);
        console.log(formData.get("name"));
        for (let entry of formData) {
            console.log(entry);
            console.log("name: " + entry[0]);
            console.log("value: " + entry[1]);
        }
        let url = "https://lukasschmidapp.herokuapp.com";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        let response = await fetch(url);
        let text = await response.text();
        console.log("Answer:");
        let answerText = document.getElementById("answer");
        answerText.innerText = text;
        console.log(answerText);
    }
})(P_3_1Server || (P_3_1Server = {}));
//# sourceMappingURL=serverScript.js.map