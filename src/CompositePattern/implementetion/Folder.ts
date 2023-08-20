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
        compo.parent=this
        this.componants.push(compo)
        return compo
    }

    getCompoenet(name:string):Componant{
        for(let i=0 ;i<this.componants.length;i++){
            if(this.componants[i].name==name){
                return this.componants[i]
            }
        }
        throw new Error('not existe')
    }
    
}