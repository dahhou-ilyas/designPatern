import {Istrategy} from './Istrategy'
import { defaultStrategy } from './defaultStrategy';


export class Context{
    
    private strategy:Istrategy;

    constructor(){
        this.strategy=new defaultStrategy()
    }

    public process():void{
        console.log('Etape 1 de algo');
        this.strategy?.applyStrategy()
        console.log('Etape final de algo');
    }

    public setStrategy(strategy: Istrategy): void {
        this.strategy = strategy;
    }
}