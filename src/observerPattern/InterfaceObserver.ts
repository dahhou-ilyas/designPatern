import {Observable} from './InterfaceObservable'
export interface Observer{
    update(observable:Observable):void
}