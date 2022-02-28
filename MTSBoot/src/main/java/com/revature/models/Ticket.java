package com.revature.models;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "tickets")
public class Ticket {

    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;  //unique - not null.

    @ManyToOne(fetch =FetchType.LAZY)
    @JoinColumn(name="owner")
    private User owner;  //unique, null.

    @Column(name="price", nullable = false)
    private double price;

    //Date of the ticket's showtime.
    @Column(name="show_time_date", nullable = false)
    private Date showTimeDate;

    //Store movies information related to ticket.
    @Column(name="movie_name", nullable = false)
    private String movie_name;

    @ManyToOne(fetch =FetchType.LAZY)
    @JoinColumn(name="purchase")
    public Purchase purchase;

    public Ticket (){

    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public User getOwner() {
        return owner;
    }

    public void setOwner(User owner) {
        this.owner = owner;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public Date getShowTimeDate() {
        return showTimeDate;
    }

    public void setShowTimeDate(Date showTimeDate) {
        this.showTimeDate = showTimeDate;
    }

    public String getMovie_name() {
        return movie_name;
    }

    public void setMovie_name(String movie_name) {
        this.movie_name = movie_name;
    }

    public Purchase getPurchase() {
        return purchase;
    }

    public void setPurchase(Purchase purchase) {
        this.purchase = purchase;
    }

    public Ticket(int id, User owner, double price, Date showTimeDate, String movie_name, Purchase purchase) {
        this.id = id;
        this.owner = owner;
        this.price = price;
        this.showTimeDate = showTimeDate;
        this.movie_name = movie_name;
        this.purchase = purchase;
    }
}
