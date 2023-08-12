import {ComportementArme} from './IcomportementArme'

export class ComportementHach implements ComportementArme{
 
    utiliserArme():void{
        console.log('je combat en utilisant Hach');
    }
    
}