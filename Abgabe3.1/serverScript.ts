namespace P_3_1Server {

    let formData: FormData = new FormData(document.forms[0]);

    let sendButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("send");
    sendButton.addEventListener("click", send);

    async function send (): Promise<void>{
        let url: string = "https://testgislukas.herokuapp.com/";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "?" + query.toString();
        let response: Response = await fetch(url);
        let text: string = await response.text()
        console.log("Answer:");
        console.log(text);
    }
        
    
}