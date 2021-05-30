import * as Http from "http";

export namespace P_3_1Server {
    console.log("Starting server");
    let port: number = Number(process.env.PORT);        //Variable anlegen, um sich mit dem Server zu verbinden
    if (!port)
        port = 8100;                                    //Port den Wert 8100 zuweisen

    let server: Http.Server = Http.createServer();      //Serverr erstellen + Eventlistener
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);

    function handleListen(): void {                     // Gibt "Listening" zurück
        console.log("Listening");
    }


    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {   //Gewährt Zugriff
        console.log("I hear voices!");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.write(_request.url);                                                               //Gibt URL zurück
        _response.end();
    }
}