import { Boissant } from "../Boissant/Boissant";

export abstract class AbstractDecorateur extends Boissant{
    protected boisant:Boissant

    constructor(boissant:Boissant){
        super()
        this.boisant=boissant
    }

    abstract getDescriptin(): string;
}