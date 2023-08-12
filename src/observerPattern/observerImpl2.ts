import { Observable } from './InterfaceObservable';
import { Observer } from './InterfaceObserver';
import {ObservableImpl} from './ObservableImpl'


export class ObserverImpl2 implements Observer{

    update(observable:Observable){
        let etat:number =(observable as ObservableImpl).getEtat()
        let result=etat*etat+2+100
        //dans ce section appliquer la logique que vous voulez
        console.log('----------observerImpl2--------');
        console.log(result);
    }

}