package com.revature.repository;

import com.revature.models.Purchase;
import com.revature.models.Ticket;
import com.revature.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
    public interface TicketRepository extends JpaRepository<Ticket, Integer> {
        Ticket getByGenre(String genre);

        Ticket getByMovieTitle(String movie_title);

        Ticket getTicketByPrice(double price);
//
        List<Ticket> findAllByOwner(User user);

    }



