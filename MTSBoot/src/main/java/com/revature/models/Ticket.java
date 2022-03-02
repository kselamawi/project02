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
    private Date showTimeDate;

    @Column(name = "movie_title",nullable = false)
    private String movieTitle;

    @Column(name="price")
    private double price;

    @Column(name="genre",nullable = false)
    private  String genre;

    @Column(name="ReleaseDate",nullable = false)
    private  Date releaseDate;

    @ManyToOne()
    @JoinColumn(name="purchase")
    @JsonIgnore
    public Purchase purchase;

    @ManyToOne(fetch =FetchType.LAZY)
    @JoinColumn(name="owner")
    @JsonIgnore
    private User owner;  //unique, null.

    public Ticket() {
    }

    public Ticket(Date show_Time_Date, String movie_title, double price, String genre, Date releaseDate, Purchase purchase, User owner) {
        this.showTimeDate = show_Time_Date;
        this.movieTitle = movie_title;
        this.price = price;
        this.genre = genre;
        this.releaseDate = releaseDate;
        this.purchase = purchase;
        this.owner = owner;
    }


    public Ticket(int id, Date show_Time_Date, String movie_title, double price, String genre, Date releaseDate, Purchase purchase, User owner) {
        this.id = id;
        this.showTimeDate = show_Time_Date;
        this.movieTitle = movie_title;
        this.price = price;
        this.genre = genre;
        this.releaseDate = releaseDate;
        this.purchase = purchase;
        this.owner = owner;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }


    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public Date getReleaseDate() {
        return releaseDate;
    }

    public void setReleaseDate(Date releaseDate) {
        this.releaseDate = releaseDate;
    }

    public Purchase getPurchase() {
        return purchase;
    }

    public void setPurchase(Purchase purchase) {
        this.purchase = purchase;
    }

    public User getOwner() {
        return owner;
    }

    public void setOwner(User owner) {
        this.owner = owner;
    }

    public Date getShowTimeDate() {
        return showTimeDate;
    }

    public void setShowTimeDate(Date showTimeDate) {
        this.showTimeDate = showTimeDate;
    }

    public String getMovieTitle() {
        return movieTitle;
    }

    public void setMovieTitle(String movieTitle) {
        this.movieTitle = movieTitle;
    }

    @Override
    public String toString() {
        return "Ticket{" +
                "id=" + id +
                ", showTimeDate=" + showTimeDate +
                ", movieTitle='" + movieTitle + '\'' +
                ", price=" + price +
                ", genre='" + genre + '\'' +
                ", releaseDate=" + releaseDate +
                ", purchase=" + purchase +
                ", owner=" + owner +
                '}';
    }

}




