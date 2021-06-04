namespace P_3_1Server {

    
    document.getElementsByTagName("button")[0].addEventListener("click", send);

    async function send (): Promise<void>{
        let formData: FormData = new FormData(document.forms[0]);
        console.log(formData.get("name"));
        for (let entry of formData) {
            console.log(entry);
            console.log("name: " + entry[0]);
            console.log("value: " + entry[1]);
        }

        let url: string = "https://testgislukas.herokuapp.com/";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "?" + query.toString();
        let response: Response = await fetch(url);
        let text: string = await response.text()
        console.log("Answer:");
        let answerText: HTMLParagraphElement = <HTMLDivElement>document.getElementById("answer");
        answerText.innerText = text;
        console.log(answerText);
    }
        
    
}