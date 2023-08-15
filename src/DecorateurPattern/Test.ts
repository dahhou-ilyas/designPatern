import { Boissant } from "./implementation/Boissant/Boissant";
import { Espresso } from "./implementation/Boissant/Espresso";
import { Caramel } from "./implementation/Decorateur/Caramel";
import { Chocolat } from "./implementation/Decorateur/Chocolat";
import { Vanil } from "./implementation/Decorateur/Vanille";

function main():void{
    let espresso:Boissant=new Espresso()
    console.log(espresso.getDescriptin());
    console.log(espresso.cout());
    console.log("---------------------------------");
    espresso=new Caramel(espresso)
    console.log(espresso.getDescriptin());
    console.log(espresso.cout());
    console.log("---------------------------------");
    espresso=new Vanil(espresso)
    console.log(espresso.getDescriptin());
    console.log(espresso.cout());
    console.log("---------------------------------");
    espresso=new Vanil(espresso)
    console.log(espresso.getDescriptin());
    console.log(espresso.cout());
    console.log("---------------------------------");
    espresso=new Chocolat(espresso)
    console.log(espresso.getDescriptin());
    console.log(espresso.cout());
}

main();