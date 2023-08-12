import {ComportementArme} from '../Comptement/IcomportementArme'

export abstract class Personnage{
    protected nom:string|undefined;
    protected score:number|undefined;

    protected comportementArme :ComportementArme|undefined

    setComportementArme(arm:ComportementArme):void{
        this.comportementArme=arm
    }
    
    abstract combattre():void;

}