class ClassSingleton{
    private static readonly instance=new ClassSingleton()
    private constructor(){}
    public static getInstance():ClassSingleton{
        return ClassSingleton.instance;
    }     
}
const a:ClassSingleton=ClassSingleton.getInstance()
const b:ClassSingleton=ClassSingleton.getInstance()
console.log(b==a);


