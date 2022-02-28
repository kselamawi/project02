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

    @Column(name="ownerID")
    private int ownerID;


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
    // many users can have same ticket (i.e many users can watch same movie)
    @OneToMany(mappedBy ="ticket",fetch = FetchType.LAZY,cascade = CascadeType.ALL)
    @JsonIgnore
    private List<User> users =new ArrayList<>();
    // second option
    /*  @ManyToOne (fetch = FetchType.LAZY, optional = false)
    @JoinColumn (name = "ticket_id", nullable = false)
    private User user;.
)
* */
    // many purchasers can purchase the many tickets but a ticket can be purchased by one
    // so the relationship is OneToMany or the reverse is ManyToOne
    @OneToMany(mappedBy ="ticket", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JsonIgnore
    private List<Purchase> purchases =new ArrayList<>();
    // second option
/*  @ManyToOne (fetch = FetchType.LAZY, optional = false)
    @JoinColumn (name = "ticket_id", nullable = false)
    private Purchase purchase;.
)
* */

    List<Ticket> tickets;
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

    public void setPrice(double price) {
        this.price = price;
    }

    public Date getShowTimeDate() {
        return Show_Time_Date;
    }

    public void setShowTimeDate(Date showTimeDate) {
        this.Show_Time_Date = showTimeDate;
    }

    public String getMovie_name() {
        return movie_title;
    }

    public void setMovie_name(String movie_name) {
        this.movie_title = movie_name;
    }

    public int getTicket_Id() {
        return id;
    }

    public void setTicket_Id(int ticket_Id) {
        this.id = ticket_Id;
    }

    @Override
    public String toString() {
        return "Ticket{" +
                "id=" + id +
                ", ownerID=" + ownerID +
                ", price=" + price +
                '}';
    }
}




