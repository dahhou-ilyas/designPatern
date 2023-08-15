import { Boissant } from "../Boissant/Boissant";
import { AbstractDecorateur } from "./AbstractDecorateur";

export class Vanil extends AbstractDecorateur{

    constructor(boissant:Boissant){
        super(boissant)
    }
    cout(): number {
        return this.boisant.cout()+0.4
    }

    getDescriptin(): string {
        return this.boisant.getDescriptin()+" avec le vanille";
    }

}