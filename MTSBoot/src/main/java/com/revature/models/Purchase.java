package com.revature.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.revature.services.EmailService;

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

    @ManyToOne(fetch=FetchType.LAZY) //removed @CascadeType.All
    @JoinColumn(name="owner")
//    @JsonIgnore
    private User owner;

    @OneToMany(mappedBy = "purchase", cascade = CascadeType.ALL)
    private List<Ticket> tickets = new ArrayList<>();


    public Purchase() {}

    public Purchase(int id, Date purchaseDate, User user) {
        this.purchaseId = id;
        this.purchaseDate = purchaseDate;
        this.owner = user;
    }

    public void sendEmailConfirmation(String smtpServer, String to, String from, String subject, String body){
        EmailService.send(smtpServer, to, from, subject, body);
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


    public User getOwner() {
        return this.owner;
    }

    public void setOwner(User owner) {
        this.owner = owner;
    }

    //    public List<Ticket> getTickets() {
//        return tickets;
//    }

//    public void setTickets(List<Ticket> tickets) {
//        this.tickets = tickets;
//    }
}
