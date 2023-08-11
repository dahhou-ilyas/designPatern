import { type } from "os"

//static type
const car:{type:string,model:string,price?:number}={
    type:'mercedes',
    model:'class A',
}


const indXeXample:{[index:string]:number|string}={}
indXeXample.ilyas=20
indXeXample.ilyass=20
indXeXample.ilyasss="20"

//les enumiration
enum Cardina {
    Noth=2,
    est=9,
    south,
    west
}

//les alias
type caryers=number
type carname=string
type carmodel=string

type Cars={
    year:caryers,
    type:carname,
    model:carmodel
}
const demo:Cars={
    year:50,
    type:"ferari",
    model:'dddd'
}
demo.model="mercedes"

//les interface
interface Rectangle {
    height:number,
    width:number,
    erea():number
}

class Recr implements Rectangle {
    height: number;
    width: number;
    constructor(h:number,w:number){
        this.height=h
        this.width=w
    }
    erea(): number {
        return this.height*this.width
    }
}

//function

function devide({dividend,devisor}:{dividend:number,devisor:number}){

}

let test:{dividend:number,devisor:number}={
    dividend:10,
    devisor:5
}

//Paramètres de repos

function add(a:number,b:number,...rest:number[]){
    console.log(a);
    console.log(b);
    console.log(rest);
}

//function with alias

type pow=(valeur:number)=>number

const power:pow=(valeur)=>{
    return valeur**2
}

abstract class Personnee {
    private name:string;
    private prenom:string;
    private age:number
    constructor(n:string,p:string,age:number){
        this.name=n
        this.prenom=p
        this.age=age
    }
    toString():string{
        return this.name+' '+this.prenom
    }
}

class Employer extends Personnee{
    private jobname:string
    constructor(job:string,n:string,p:string,age:number){
        super(n,p,age)
        this.jobname=job
    }
}

