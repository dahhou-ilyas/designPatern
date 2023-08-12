import {ComportementArme} from '../Comptement/IcomportementArme'

export abstract class Personnage{
    protected nom:string|undefined;
    protected score:number=0;

    protected comportementArme :ComportementArme|undefined

    setComportementArme(arm:ComportementArme):void{
        this.comportementArme=arm
    }
    

    //algoritme encapsuler pour chaque strategie
    abstract combattre():void;

}