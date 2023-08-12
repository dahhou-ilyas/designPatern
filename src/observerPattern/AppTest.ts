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

    //dans cette methode on a pas besoin de implémenter une class qui implément une l'interface observer
    const annonyme:Observer={
        update: (observable: Observable) => {
            // Implémentation de la logique de mise à jour
            console.log('Observer mis à jour annonyle');
          }
    }
    observable.subscribe(annonyme)
    observable.setEtat(22)
}
main()