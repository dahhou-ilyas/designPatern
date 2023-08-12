import {Observable} from './InterfaceObservable'
import { Observer } from './InterfaceObserver';

export class ObservableImpl implements Observable{

    private etat:number=10;
    private observers:Observer[]=[];

    subscribe(o: Observer): void {
        this.observers.push(o)
    }
    unsubscribe(o: Observer): void {
        this.observers=this.observers.filter(item => item !== o)
    }
    notifyObservers(): void {
        this.observers.map(observer=>{
            observer.update(this)
        })
    }

    setEtat(etat:number){
        this.etat=etat
        this.notifyObservers()
    }

    getEtat():number{
        return this.etat
    }

}