import {Observable} from './InterfaceObservable'
export interface Observer{

    //il ya deux modéle push et pull
    update(observable:Observable):void //pull
    
    //le model push permet de transfere etat de observer
    //update(etat:Etat):void //pull
    //Etat constien plus d'information dans notre cas etet représent seulemnt une number
}