package com.revature.services;

import com.revature.models.Purchase;
import com.revature.models.Ticket;
import com.revature.models.User;
import com.revature.repository.TicketRepository;
import com.revature.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Date;
import java.util.List;

@Service
@Transactional
public class TicketService {
        private TicketRepository tr;
        private UserRepository ur;

        @Autowired
        public TicketService(TicketRepository tr){
            this.tr =tr;
        }
//
//        public TicketService(){
//        }
//
//        // Here we're adding 'Sort' parameter specifying the property name and direction by which we want to sort.
//        public List<Ticket> getAllTickets(){
//            return tr.findAll(Sort.by(Sort.Direction.ASC,"releaseDate"));
//        }
////
//        public Ticket getTicketsById(int id) {
//            return tr.getById(id);
//        }
//


        public Ticket getTicketByGenre(String genre){
            return tr.getByGenre(genre);
        }

        public Ticket getTicketByName(String movie_title){
            return tr.getByMovieTitle(movie_title);
        }

        public Ticket getTicketByPrice(double price){
            return tr.getTicketByPrice(price);
        }

        public Ticket createTicket(Ticket ticket) {
            return tr.save(ticket);
        }

        public List<Ticket> getAllTickets() {
            return tr.findAll();
        }
        public List<Ticket> getTicketsByUser(User user){
            return tr.findAllByOwner(user);
        }

    }

