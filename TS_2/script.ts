namespace TS_2 {

    let events: any[] = [];

    class concertEvent {

        private interpret: string;
        private price: number; 
        private date: string;

        constructor(interpret: string, price: number, date: string) {
            this.interpret = interpret;
            this.price = price;
            this.date = date;
            
        }
    }

    let button: HTMLButtonElement = <HTMLButtonElement>document.getElementById("eventButton");
    button.addEventListener("click", addToList);

    function addToList(){
        concertEvent.arguments
    }

    function submitToEventlist(name:string, price:number, date: string ): void {
        events.push({name, price, date});
    }

    function hasInterpret (array: any[][], name: string): boolean{
        for(const entry of array){
            if(entry[0] === name){
                return true
            }
        }
        return false;
    }

    function hasPrice (array: any[][], price: number): boolean{
        for(const entry of array){
            if(entry[0] === price){
                return true
            }
        }
        return false;
    }

    function hasDate (array: any[][], date: string): boolean{
        for(const entry of array){
            if(entry[0] === date){
                return true
            }
        }
        return false;
    }

    


}