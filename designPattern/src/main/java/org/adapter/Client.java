package org.adapter;

public class Client {
    private  Standard standard;

    public Standard getStandard() {
        return standard;
    }

    public void setStandard(Standard standard) {
        this.standard = standard;
    }

    public void process(int nb1, int nb2){
        standard.operation(nb1,nb2);
    }
}
