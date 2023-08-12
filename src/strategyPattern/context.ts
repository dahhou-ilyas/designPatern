import {Istrategy} from './Istrategy'
import { defaultStrategy } from './defaultStrategy';


export class Context{
    
    //avec la composition je peut switcher c'est pas quelque chose qui peut avoir avec héritage (car il est régide)
    private strategy:Istrategy;

    constructor(){
        //definire une strategy par defaut 
        this.strategy=new defaultStrategy()
    }

    //si on na pas le design patern strategy il faut faire if else donc achaque fois tu ajoute un strategy il faut modifer le code process (par exemple) chose qui mal
    public process():void{
        console.log('Etape 1 de algo');
        this.strategy?.applyStrategy()
        console.log('Etape final de algo');
    }

    //cet methode fonctionne comme un swith des strategy
    public setStrategy(strategy: Istrategy): void {
        this.strategy = strategy;
    }
}