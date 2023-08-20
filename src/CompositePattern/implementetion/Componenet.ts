import { Folder } from "./Folder"

export abstract class Componant {
    public name:string
    public level:number=0

    public parent:Componant|undefined

    constructor(name:string){
        this.name=name
    }

    //peut afficher , copresser ou d'autre chose 
    abstract view():void // si en applique par exemple sur un fichier il afficher le fichier et si on applique sur un dossier il afficher le contenue de dossier qui peut continne aussi des dossier et des ficheir

    indentation():string{
        let str:string=''
        for(let i=0 ;i<this.level;i++){
            str=str+'\t'
        }
        return str
    }

}