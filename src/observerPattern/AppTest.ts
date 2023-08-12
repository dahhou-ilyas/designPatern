import { Observable } from './InterfaceObservable';
import { Observer } from './InterfaceObserver';
import { ObservableImpl } from './ObservableImpl';
import { ObserverImpl1 } from './observerImpl1';
import { ObserverImpl2 } from './observerImpl2';

function main(){

    let observable:ObservableImpl=new ObservableImpl()
    let o1:Observer=new ObserverImpl1()
    let o2:Observer=new ObserverImpl2()
    let o3:Observer=new ObserverImpl2()


    observable.subscribe(o1)
    observable.subscribe(o2)
    observable.subscribe(o3)
    observable.setEtat(55)
    observable.setEtat(500)
    observable.setEtat(550)

}
main()