import { strategy1 } from "./StrategyImpl1";
import { strategy2 } from "./StrategyImpl2";
import { strategy3 } from "./StrategyImpl3";
import { Context } from "./context";

function main():void{
    const context=new Context()
    context.process()
    console.log('---------------------');
    context.setStrategy(new strategy1)
    context.process()
    console.log('---------------------');
    context.setStrategy(new strategy2)
    context.process()
    console.log('---------------------');
    context.setStrategy(new strategy3)
    context.process()
 
}

main()