import { Personnage } from "./Personnage";
import { ComportementArmeArcEtFleche } from "../Comptement/ComportementArcEtFleche";
import { ComportementHach } from "../Comptement/ComportementHach";
import { ComportementPoignard } from "../Comptement/ComportementPoignard";

export class Roi extends Personnage{
    
    constructor(){
        super()
        this.comportementArme=new ComportementHach()
    }

    combattre():void{
        this.score+=2
        console.log('je suis une roi');
        this.comportementArme?.utiliserArme();
        console.log('ma score est '+this.score);
    }
}