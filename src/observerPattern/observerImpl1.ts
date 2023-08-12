import { Observable } from './InterfaceObservable';
import { Observer } from './InterfaceObserver';
import {ObservableImpl} from './ObservableImpl'

export class ObserverImpl1 implements Observer{

    update(observable:Observable){
        let etat:number =(observable as ObservableImpl).getEtat()
        let result=etat*etat+2
        console.log('----------observerImpl1--------');
        console.log(result);
    }

}