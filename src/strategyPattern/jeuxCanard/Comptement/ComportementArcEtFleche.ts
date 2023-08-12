import {ComportementArme} from './IcomportementArme'

export class ComportementArmeArcEtFleche implements ComportementArme{
    utiliserArme():void{
        console.log('je combat en utilisant ArmeArcEtFleche');
    }
}