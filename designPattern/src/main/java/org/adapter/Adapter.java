package org.adapter;

//si vous souhaiter d'utiliser approche par héritage changela déclaration
//public class Adapter extends AncienneImpl implements Standard !!!!
public class Adapter implements Standard{
    private AncienneImpl ancienne=new AncienneImpl();
    @Override
    public void operation(int nb1, int nb2) {
        //il faut caster nb1 et nb2 car il est de type double
        double res =ancienne.calcule(nb1,nb2);
        ancienne.print(res);
    }
}
