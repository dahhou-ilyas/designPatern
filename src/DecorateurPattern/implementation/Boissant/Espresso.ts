import { Boissant } from "./Boissant";

export class Espresso extends Boissant{

    constructor(){
        super();
        this.description="Espresso"
    }
    cout(): number {
        return 6;
    }
    
}