package com.revature.models;

import java.util.Date;

public class Ticket {
    private int id;  //unique - not null.
    private int ownerID;  //unique, null.
    private AgeGroup ageGroup; // null
    private double price;

    //Date of the ticket's showtime.
    private Date showTimeDate;

    //Store movies information related to ticket.
    private String movie_name;


    public Ticket(){

    }

    public Ticket(double price) {
        this.price = price;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getOwnerID() {
        return ownerID;
    }

    public void setOwnerID(int ownerID) {
        this.ownerID = ownerID;
    }

    public AgeGroup getAgeGroup() {
        return ageGroup;
    }

    public void setAgeGroup(AgeGroup ageGroup) {
        this.ageGroup = ageGroup;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    @Override
    public String toString() {
        return "Ticket{" +
                "id=" + id +
                ", ownerID=" + ownerID +
                ", ageGroup=" + ageGroup +
                ", price=" + price +
                '}';
    }
}
