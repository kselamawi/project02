package com.revature.repository;

import com.revature.models.Ticket;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Date;

    @Repository
    public interface TicketRepository extends JpaRepository<Ticket,Integer> {
        Ticket getByGenre(String genre);

        Ticket getByTitle(String movie_title);

        Ticket getByReleaseDate(java.util.Date releaseDate);

        Ticket getByShowTimeDate(Date show_time_date);

        Ticket getTicketByPrice(double price);
    }



