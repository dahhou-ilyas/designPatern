import { ComportementArmeArcEtFleche } from "./Comptement/ComportementArcEtFleche"
import { ComportementHach } from "./Comptement/ComportementHach"
import { ComportementPoignard } from "./Comptement/ComportementPoignard"
import { Personnage } from "./Personnage/Personnage"
import { Reine } from "./Personnage/Reine"
import { Roi } from "./Personnage/Roi"
import { Troll } from "./Personnage/Troll"


function main():void{

    const reine :Personnage=new Reine()
    reine.combattre()
    console.log('------------------------');
    const roi:Personnage=new Roi()
    roi.combattre()
    console.log('------------------------');
    const troll:Personnage=new Troll()
    troll.combattre()
    console.log('--------NIVEAU2------------');
    console.log('LE ROI CHANGE SA ARME ET UTILISE ARC ET FLECH \n');
    roi.setComportementArme(new ComportementArmeArcEtFleche())
    roi.combattre()
}

main()