import { Observable } from './InterfaceObservable';
import { Observer } from './InterfaceObserver';
import {ObservableImpl} from './ObservableImpl'


export class ObserverImpl2 implements Observer{

    update(observable:Observable){
        let etat:number =(observable as ObservableImpl).getEtat()
        let result=etat*etat+2
        console.log('----------observer1--------');
        console.log(result);
    }

}