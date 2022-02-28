package com.revature.models;
import com.fasterxml.jackson.annotation.JsonIgnore;
import javax.persistence.*;
import java.util.Date;
import java.util.ArrayList;
import java.util.List;


@Entity
@Table(name ="tickets")
public class Ticket {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private int id;

    @Column(name="Show_Time_Date",nullable = false)
    private Date Show_Time_Date;

    @Column(name = "movie_title",nullable = false)
    private String movie_title;

    @Column(name="price")
    private double price;

    @Column(name="genre",nullable = false)
    private  String genre;

    @Column(name="ReleaseDate",nullable = false)
    private  Date releaseDate;

    @ManyToOne(fetch =FetchType.LAZY)
    @JoinColumn(name="purchase")
    public Purchase purchase;
    
    @ManyToOne(fetch =FetchType.LAZY)
    @JoinColumn(name="owner")
    private User owner;  //unique, null.
  
    public Ticket (){
        this.tickets =new ArrayList<>();
    }
    public Ticket(int id, int ownerID, double price, Date Show_Time_Date, String movie_title,String genre,Date releaseDate) {
        this.id = id;
        this.ownerID = ownerID;

        this.price = price;
        this.Show_Time_Date= Show_Time_Date;
        this.movie_title = movie_title;
        this.releaseDate =releaseDate;
        this.genre =genre;

    }
    public Date getReleaseDate(){
        return releaseDate;
    }
    public void setReleaseDate(){
        this.releaseDate =releaseDate;
    }
    public String getGenres(){
        return genre;
    }
    public void  setGenres(){
        this.genre =genre;
    }

    public int getOwnerID() {
        return ownerID;
    }

    public void setOwnerID(int ownerID) {
        this.ownerID = ownerID;
    }

    public double getPrice() {
        return price;
    }

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




