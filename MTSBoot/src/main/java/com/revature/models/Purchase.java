package com.revature.models;

import javax.persistence.*;
import javax.persistence.Table;
import java.util.ArrayList;
import java.util.List;
import java.sql.Date;

@Entity
@Table(name="people")
public class Purchase {

    @Id
    @Column(name="purchaseId")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int purchaseId;

    @Column(name="purchase_date", nullable = false)
    private Date purchaseDate;

    @Column(name="userId")
    private int userId;

    @OneToMany(mappedBy = "ticket", cascade = CascadeType.ALL)
    private List<Ticket> tickets = new ArrayList<>();


    public Purchase() {}

    public Purchase(int id, Date purchaseDate, int userId) {
        this.purchaseId = id;
        this.purchaseDate = purchaseDate;
        this.userId = userId;
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

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public List<Ticket> getTickets() {
        return tickets;
    }

    public void setTickets(List<Ticket> tickets) {
        this.tickets = tickets;
    }
}
