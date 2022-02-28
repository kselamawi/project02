package com.revature.models;

import javax.persistence.*;
import java.security.acl.Owner;
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


}
