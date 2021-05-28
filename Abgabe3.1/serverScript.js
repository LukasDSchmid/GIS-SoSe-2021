"use strict";
var P_3_1Server;
(function (P_3_1Server) {
    let formData = new FormData(document.forms[0]);
    let sendButton = document.getElementById("send");
    sendButton.addEventListener("click", send);
    async function send() {
        let url = "https://testgislukas.herokuapp.com/";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        let response = await fetch(url);
        let text = await response.text();
        console.log("Answer:");
        console.log(text);
    }
})(P_3_1Server || (P_3_1Server = {}));
//# sourceMappingURL=serverScript.js.map