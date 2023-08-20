import { Componant } from "./Componenet";

export class Folder extends Componant{

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

    addComponent(compo:Componant):Componant{
        compo.level=this.level+1;
        console.log(compo.level);
        this.componants.push(compo)
        return compo
    }
    
}