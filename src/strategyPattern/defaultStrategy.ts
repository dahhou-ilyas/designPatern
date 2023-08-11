import {Istrategy} from './Istrategy'

export class defaultStrategy implements Istrategy {
    applyStrategy(): void {
        console.log("etap intermidiare de algorithme en utilisant strategie par default");
    }
    
}