package com.revature.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import javax.persistence.Table;
import java.util.ArrayList;
import java.util.List;
import java.sql.Date;

@Entity
@Table(name="purchases")
public class Purchase {

    @Id
    @Column(name="purchaseId")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int purchaseId;

    @Column(name="purchase_date", nullable = false)
    private Date purchaseDate;

    @ManyToOne(cascade = CascadeType.ALL, fetch=FetchType.LAZY)
    @JoinColumn(name="userId")
    @JsonIgnore
    private User userId;

//    @OneToMany(mappedBy = "ticket", cascade = CascadeType.ALL)
//    private List<Ticket> tickets = new ArrayList<>();


    public Purchase() {}

    public Purchase(int id, Date purchaseDate, User user) {
        this.purchaseId = id;
        this.purchaseDate = purchaseDate;
        this.userId = user;
    }

    public int getPurchaseId() {
        return purchaseId;
    }

    public void setPurchaseId(int purchaseId) {
        this.purchaseId = purchaseId;
    }

    public Date getPurchaseDate() {
        return purchaseDate;
    }

    public void setPurchaseDate(Date purchaseDate) {
        this.purchaseDate = purchaseDate;
    }

    public User getUser() {
        return userId;
    }

    public void setUser(User user) {
        this.userId = user;
    }

    //    public List<Ticket> getTickets() {
//        return tickets;
//    }

//    public void setTickets(List<Ticket> tickets) {
//        this.tickets = tickets;
//    }
}
