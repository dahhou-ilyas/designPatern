import { Boissant } from "../Boissant/Boissant";
import { AbstractDecorateur } from "./AbstractDecorateur";

class Chocolat extends AbstractDecorateur{

    constructor(boissant:Boissant){
        super(boissant)
    }
    cout(): number {
        return this.boisant.cout()+0.7
    }

    getDescriptin(): string {
        return this.boisant.getDescriptin()+" avec le chocolat";
    }

}