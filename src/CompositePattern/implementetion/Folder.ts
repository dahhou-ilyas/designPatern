import { Componant } from "./Componenet";

export class Coposite extends Componant{

    private componants:Componant[]=[]

    constructor(name:string){
        super(name)
    }

    view(): void {
        let tab=this.indentation()
        console.log(tab+'Folder: '+this.name);

        this.componants.map(componant=>{
            componant.view()
        })
    }

    addComponent(compo:Componant):void{
        compo.level=this.level+1;
        this.componants.push(compo)
    }
    
}