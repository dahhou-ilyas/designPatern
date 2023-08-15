import { Boissant } from "../Boissant/Boissant";


//heritage permet de faire des decoration à l'infinie c'est à dire deco(deco(deco(deco...deco(composant concret))))
export abstract class AbstractDecorateur extends Boissant{
    protected boisant:Boissant

    constructor(boissant:Boissant){
        super()
        this.boisant=boissant
    }

    //rendre la class abstrai pour permet de redéfinie dans les sous class de AbstractDecorateur pour faire la recursivité
    abstract getDescriptin(): string;
}