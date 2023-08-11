abstract class Creator{
    public abstract factoryMethod():Product;
    public someOperation():string{
        const product=this.factoryMethod();
        return `Creator: The same creator's code has just worked with ${product.operation()}`;
    }
}
interface Product {
    operation(): string;
}


class ConcreteCreator1 extends Creator {
    /**
     * Note that the signature of the method still uses the abstract product
     * type, even though the concrete product is actually returned from the
     * method. This way the Creator can stay independent of concrete product
     * classes.
     */
    public factoryMethod(): Product {
        return new ConcreteProduct1();
    }
}
class ConcreteCreator2 extends Creator {
    public factoryMethod(): Product {
        return new ConcreteProduct2();
    }
}



class ConcreteProduct1 implements Product {
    public operation(): string {
        return '{Result of the ConcreteProduct1}';
    }
}

class ConcreteProduct2 implements Product {
    public operation(): string {
        return '{Result of the ConcreteProduct2}';
    }
}

function clientCode(creator: Creator) {
    // ...
    console.log('Client: I\'m not aware of the creator\'s class, but it still works.');
    console.log(creator.someOperation());
    // ...
}

// console.log('App: Launched with the ConcreteCreator1.');
// clientCode(new ConcreteCreator1());
// console.log('');

// console.log('App: Launched with the ConcreteCreator2.');
// clientCode(new ConcreteCreator2());


//2eme exemple
interface Shape{
    draw():void
}

class Circle implements Shape{
    draw() {
        console.log("Draw cercle");
    }

}

class Square implements Shape{
    draw(): void {
        console.log("Draw Square");
    }
    
}

class Rectange implements Shape{
    draw(): void {
        console.log("Draw rectangle");
    }
    
}

class FactoryShape {

    public static CIRCLE=1
    public static RECTANGLE=2
    public static SQUARE=3
    public static getShap(id:number):Shape{
        switch(id){
            case this.CIRCLE:
                return new Circle()
            case this.RECTANGLE:
                return new Rectange()
            case this.SQUARE:
                return new Square()
            default:
                throw new Error("dosn't existe")

        }

    }
}

const cer:Shape= FactoryShape.getShap(FactoryShape.CIRCLE)

cer.draw()