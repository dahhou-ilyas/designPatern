function test<S,T>(v1:S,v2:T):[S,T]{
    return [v1,v2]
}


class NameVlue<T>{
    private _value: T|undefined
    constructor(private name:string){}

    public setValue(value:T){
        this._value=value
    }

    public getValue():T|undefined{
        return this._value
    }
    public toString(): string {
        return `${this.name}: ${this._value}`;
    
    }

}


function myPolynome(x:number):number{
    let result:number=3*Math.pow(x,2)+4.7
    return result
}

type PointedPair<T, U> = {
    car: T;
    cdr: U;
};    

function cons<T, U>(_car: T, _cdr: U) : PointedPair<T, U> {
    return { car: _car, cdr: _cdr };
}


const fnc=()=>{
    return 5
}


const addArrow = (a:number) => (rr:number)=>{
    console.log(a);
}


function get(call:(a:number)=>any){
    call(3)
}

get(addArrow(5))
