import {ComportementArme} from './IcomportementArme'

export class ComportementPoignard implements ComportementArme{
 
    utiliserArme():void{
        console.log('je combat en utilisant Poignard');
    }
    
}