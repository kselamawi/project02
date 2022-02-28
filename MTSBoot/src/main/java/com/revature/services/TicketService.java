package com.revature.services;

import com.revature.models.Ticket;
import com.revature.repository.TicketRepository;
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
        public TicketService(){

        }
        @Autowired
        public TicketService(TicketRepository tr){
            this.tr =tr;
        }
        // Here we're adding 'Sort' parameter specifying the property name and direction by which we want to sort.
        public List<Ticket> getAllTickets(){
            return tr.findAll(Sort.by(Sort.Direction.ASC,"releaseDate"));

        }
        public Ticket getTicketsById(int id) {
            return tr.getById(id);
        }
        public Ticket getTicketByReleaseDate(Date releaseDate){
            return tr.getByReleaseDate(releaseDate);
        }
        public Ticket getTicketByGenre(String genre){
            return tr.getByGenre(genre);
        }
        public Ticket getTicketByName(String movie_title){
            return tr.getByTitle(movie_title);
        }
        public Ticket getTicketByShowTimeDate( Date Show_Time_Date){
            return  tr.getByShowTimeDate(Show_Time_Date);

        }
        public Ticket getTicketByPrice(double price){
            return tr.getTicketByPrice(price);
        }
    }

