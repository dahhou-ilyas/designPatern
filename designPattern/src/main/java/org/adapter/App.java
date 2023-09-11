package org.adapter;

public class App {
    public static void main(String[] args) {
        Client client=new Client();
        client.setStandard(new StandardImple());
        client.process(4,5);
        client.setStandard(new StandardImple2());
        client.process(4,5);
    }
}