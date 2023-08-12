import { ComportementArmeArcEtFleche } from "../Comptement/ComportementArcEtFleche";
import { ComportementHach } from "../Comptement/ComportementHach";
import { ComportementPoignard } from "../Comptement/ComportementPoignard";
import { Personnage } from "./Personnage";


export class Reine extends Personnage{
    
    constructor(){
        super()
        this.comportementArme=new ComportementArmeArcEtFleche()
    }

    combattre():void{
        this.score+=4
        console.log('je suis rein');
        this.comportementArme?.utiliserArme()
        console.log('ma score est '+this.score);
    }
}