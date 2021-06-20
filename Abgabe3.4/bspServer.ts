import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";


export namespace P_3_4Server {

    let collection: Mongo.Collection;

    console.log("Starting server");                     //Konsolenausgabe "Starting Server"
    let port: number = Number(process.env.PORT);        //Variable anlegen, um sich mit dem Server zu verbinden
    if (!port)                                          //Wen kein Port deklariert wird....
        port = 8100;                                    //...wird dem Port den Wert 8100 zugewiesen

    let dbURL: string = "mongodb://localhost:27017";


    startServer(port);
    connectToDB(dbURL);


    function startServer(_port: number | string): void{
        let server: Http.Server = Http.createServer();      //Server wird erstellt
        server.addListener("request", handleRequest);       //Ein Listener wird dem Server hinzugefügt, welcher die Funktion handleRequest ausführt
        server.addListener("listening", handleListen);      //Ein Listener wird dem Server hinzugefügt, welcher die Funktion handleListen ausführt
        server.listen(port);                                //Der Server reagiert auf den angegebenen Port
    }
    
    async function connectToDB(_url: string): Promise <void> {
        let options: Mongo.MongoClientOptions = {useNewUrlParser: true, useUnifiedTopology: true};
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient (_url, options);
        await mongoClient.connect();

        let studenten: Mongo.Collection = mongoClient.db("admin").collection("studenten");
        console.log("Database connection " + studenten != undefined);
    }

    function handleListen(): void {                     // Gibt "Listening" zurück
        console.log("Listening");                       //Konsolenausgabe "Listening"
    }

    interface Query {
        [type: string]: string | string[];
    }

    interface Student{
        name: string;
        firstname: string;
        matrikel: string;
    }


    async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise <void> {   //Gewährt Zugriff
        console.log("I hear voices!");                                                               //Konsolenausgabe "I hear a voice"                             //Die Eigenschaften des Headers werden deaklariert
        _response.setHeader("Access-Control-Allow-Origin", "*"); 
        _response.setHeader("content-type", "text/html; charset=utf-8");                                    //Zugriffserlaubnis wird festgelegt/überprüft
        //let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);                                                                      //Der Response des Servers wird beendet
        
        if (_request.url) {
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
            let query: Query = url.query;
            let command: string = <string>query.command;
            if (command == "store") {
                let name: string = <string>query.name;
                let firstname: string = <string>query.firstname
                let matrikel: string = <string>query.matrikel;
                let student: Student = {name: name, firstname: firstname, matrikel: matrikel };
                storeStudent(student);
                let jsonString: string = JSON.stringify(url.query);
                _response.write(jsonString);
                _response.write("Succesfully saved a new Student");
                console.log("New Student was saved");
            }
            else if(command = "get"){

                let student: Student[] = await getListOfStudents();
                _response.write(JSON.stringify(student));
                console.log("Here is your Student");
            }
            else
            console.log("No correct command");  
        
        }
         
        _response.end(); //Response wird beendet
    }

    function storeStudent (_student: Student): void{
        collection.insertOne(_student);
    }

    async function getListOfStudents(): Promise<Student[]>{
        let listStudents: Student[];
        listStudents = await collection.find().toArray();
        console.log(listStudents);
        return listStudents;
    }
    
}