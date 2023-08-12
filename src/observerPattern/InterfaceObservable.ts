import {Observer} from './InterfaceObserver'

export interface Observable{
    subscribe(o:Observer):void //add
    unsubscribe(o:Observer):void //remove
    notifyObservers():void
}