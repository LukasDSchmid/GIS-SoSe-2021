"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.P_3_2Server = void 0;
const Http = require("http");
const Url = require("url");
var P_3_2Server;
(function (P_3_2Server) {
    console.log("Starting server"); //Konsolenausgabe "Starting Server"
    let port = Number(process.env.PORT); //Variable anlegen, um sich mit dem Server zu verbinden
    if (!port) //Wen kein Port deklariert wird....
        port = 8100; //...wird dem Port den Wert 8100 zugewiesen
    let server = Http.createServer(); //Server wird erstellt
    server.addListener("request", handleRequest); //Ein Listener wird dem Server hinzugefügt, welcher die Funktion handleRequest ausführt
    server.addListener("listening", handleListen); //Ein Listener wird dem Server hinzugefügt, welcher die Funktion handleListen ausführt
    server.listen(port); //Der Server reagiert auf den angegebenen Port
    function handleListen() {
        console.log("Listening"); //Konsolenausgabe "Listening"
    }
    function handleRequest(_request, _response) {
        console.log("I hear voices!"); //Konsolenausgabe "I hear a voice"
        _response.setHeader("content-type", "text/html; charset=utf-8"); //Die Eigenschaften des Headers werden deaklariert
        _response.setHeader("Access-Control-Allow-Origin", "*"); //Zugriffserlaubnis wird festgelegt/überprüft
        let url = Url.parse(_request.url, true);
        let query = url.query; //Der Response des Servers wird beendet
        if (url.pathname == "/html") {
            for (let key in query) {
                let value = query[key];
                _response.write("<p>KEY: " + key + ", Value: " + value + "</p>");
            }
        }
        if (url.pathname == "/json") {
            _response.write(JSON.stringify(query));
        }
        _response.end(); //Response wird beendet
    }
})(P_3_2Server = exports.P_3_2Server || (exports.P_3_2Server = {}));
//# sourceMappingURL=bspServer.js.map