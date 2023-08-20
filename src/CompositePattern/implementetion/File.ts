import { Componant } from "./Componenet";

export class File extends Componant{


    constructor(name:string){
        super(name)
    }

    view(): void {
        let tab:string=this.indentation()
        console.log(tab+'file: '+this.name);
    }


}