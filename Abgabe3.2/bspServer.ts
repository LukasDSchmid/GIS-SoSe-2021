import * as Http from "http";
import * as Url from "url";


export namespace P_3_2Server {
    console.log("Starting server");                     //Konsolenausgabe "Starting Server"
    let port: number = Number(process.env.PORT);        //Variable anlegen, um sich mit dem Server zu verbinden
    if (!port)                                          //Wen kein Port deklariert wird....
        port = 8100;                                    //...wird dem Port den Wert 8100 zugewiesen

    let server: Http.Server = Http.createServer();      //Server wird erstellt
    server.addListener("request", handleRequest);       //Ein Listener wird dem Server hinzugefügt, welcher die Funktion handleRequest ausführt
    server.addListener("listening", handleListen);      //Ein Listener wird dem Server hinzugefügt, welcher die Funktion handleListen ausführt
    server.listen(port);                                //Der Server reagiert auf den angegebenen Port

    function handleListen(): void {                     // Gibt "Listening" zurück
        console.log("Listening");                       //Konsolenausgabe "Listening"
    }

    interface Query {
        [type: string]: string | string[];
    }


    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {   //Gewährt Zugriff
        console.log("I hear voices!");                                                               //Konsolenausgabe "I hear a voice"
        //_response.setHeader("content-type", "text/html; charset=utf-8");                             //Die Eigenschaften des Headers werden deaklariert
        _response.setHeader("Access-Control-Allow-Origin", "*");                                     //Zugriffserlaubnis wird festgelegt/überprüft
        let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
        let query: Query = url.query;                                                                           //Der Response des Servers wird beendet
        
        if (url.pathname == "/html") {
            _response.setHeader("content-type", "text/html; charset=utf-8");
            for (let key in query) {
                let value: string | string [] = query[key];
                _response.write("<p>KEY: " + key + ", Value: " + value + "</p>");
            }
        }
        
        if (url.pathname == "/json") {
            _response.setHeader("content-type", "application/json");
            _response.write(JSON.stringify(query));
        }
        _response.end(); //Response wird beendet
    }
    
}