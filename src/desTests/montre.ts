class Montre {
    public heure:number
    public mini:number
    public constructor(h: number, m: number){
        this.heure=h
        this.mini=m
    }
    static createMontreFromMontre(montre: Montre): Montre {
        return new Montre(montre.heure, montre.mini);
    }

    avancerParHeure(){
        if(this.heure==23 && this.mini==59){
            this.heure=0
            this.mini=0
        }else if(this.mini=59){
            this.heure++
        }else{
            this.mini++
        }
    }
}

class Personne{
    public nom:string
    public montre?:Montre
    constructor(nom:string,mont?:Montre){
        this.nom=nom
        if(mont){
            this.montre=mont
        }
    }
    donneMontre(person:Personne):boolean{
        if(this.montre){
            if(person.montre){
                return false
            }else{
                person.montre=this.montre
                this.montre=undefined
                return true
            }
        }else{
            return false
        }
    }
}
