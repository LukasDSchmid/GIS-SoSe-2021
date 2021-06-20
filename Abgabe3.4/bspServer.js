"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.P_3_4Server = void 0;
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var P_3_4Server;
(function (P_3_4Server) {
    let collection;
    console.log("Starting server"); //Konsolenausgabe "Starting Server"
    let port = Number(process.env.PORT); //Variable anlegen, um sich mit dem Server zu verbinden
    if (!port) //Wen kein Port deklariert wird....
        port = 8100; //...wird dem Port den Wert 8100 zugewiesen
    let dbURL = "mongodb+srv://versuchskaninchen:<yeet12345>@zielgerade.zsn9b.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    startServer(port);
    connectToDB(dbURL);
    function startServer(_port) {
        let server = Http.createServer(); //Server wird erstellt
        server.addListener("request", handleRequest); //Ein Listener wird dem Server hinzugefügt, welcher die Funktion handleRequest ausführt
        server.addListener("listening", handleListen); //Ein Listener wird dem Server hinzugefügt, welcher die Funktion handleListen ausführt
        server.listen(port); //Der Server reagiert auf den angegebenen Port
    }
    async function connectToDB(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        let studenten = mongoClient.db("admin").collection("studenten");
        console.log("Database connection " + studenten != undefined);
    }
    function handleListen() {
        console.log("Listening"); //Konsolenausgabe "Listening"
    }
    async function handleRequest(_request, _response) {
        console.log("I hear voices!"); //Konsolenausgabe "I hear a voice"                             //Die Eigenschaften des Headers werden deaklariert
        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.setHeader("content-type", "text/html; charset=utf-8"); //Zugriffserlaubnis wird festgelegt/überprüft
        let url = Url.parse(_request.url, true); //Der Response des Servers wird beendet
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            let query = url.query;
            let command = query.command;
            if (command == "store") {
                let name = query.name;
                let firstname = query.firstname;
                let matrikel = query.matrikel;
                let student = { name: name, firstname: firstname, matrikel: matrikel };
                storeStudent(student);
                let jsonString = JSON.stringify(url.query);
                _response.write(jsonString);
                _response.write("Succesfully saved a new Student");
            }
            else if (command = "get") {
                let student = await getListOfStudents();
                _response.write(JSON.stringify(student));
            }
            else
                console.log("No correct command");
        }
        _response.end(); //Response wird beendet
    }
    function storeStudent(_student) {
        collection.insertOne(_student);
    }
    async function getListOfStudents() {
        let listStudents;
        listStudents = await collection.find().toArray();
        console.log(listStudents);
        return listStudents;
    }
})(P_3_4Server = exports.P_3_4Server || (exports.P_3_4Server = {}));
//# sourceMappingURL=bspServer.js.map