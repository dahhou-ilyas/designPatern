import { Boissant } from "../Boissant/Boissant";
import { AbstractDecorateur } from "./AbstractDecorateur";

export class Caramel extends AbstractDecorateur{

    constructor(boissant:Boissant){
        super(boissant)
    }
    cout(): number {
        return this.boisant.cout()+0.9
    }

    getDescriptin(): string {
        return this.boisant.getDescriptin()+" avec le caramel";
    }

}