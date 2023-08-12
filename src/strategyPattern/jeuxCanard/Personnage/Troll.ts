import { Personnage } from "./Personnage";
import { ComportementArmeArcEtFleche } from "../Comptement/ComportementArcEtFleche";
import { ComportementHach } from "../Comptement/ComportementHach";
import { ComportementPoignard } from "../Comptement/ComportementPoignard";

export class Troll extends Personnage{
    
    constructor(){
        super()
        this.comportementArme=new ComportementPoignard()
    }
    combattre():void{
        console.log('je suis une troll');
        this.comportementArme?.utiliserArme()
    }
}