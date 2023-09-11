package org.adapter;

public class StandardImple2 implements Standard{

    @Override
    public void operation(int nb1, int nb2) {
        double res=nb1+nb2;
        System.out.println("********************");
        System.out.println("implémentation standard 2");
        System.out.println("resultat="+res);
        System.out.println("********************");
    }
}
