package com.revature.controllers;

import com.revature.models.Ticket;
import com.revature.services.TicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;
    @Controller
    @RequestMapping("/tickets")
    @CrossOrigin("*")
    public class TicketController {

        private TicketService ts;
        // no arg constructor
        public TicketController(){

        }
        @Autowired
        public TicketController(TicketService ts){
            this.ts =ts;
        }
        // mapping our methods to controller URI
        @GetMapping("/")
        @ResponseBody
        public List<Ticket> getAllTickets(){
            return ts.getAllTickets();
        }
        @GetMapping("/id")
        @ResponseBody
        public Ticket getTicketById(@PathVariable("id") int id){
            return ts.getTicketsById(id);
        }
        @GetMapping("/genre")
        @ResponseBody
        public Ticket getTicketByGenre(@PathVariable("genre") String genre){
            return ts.getTicketByGenre(genre);
        }
        @GetMapping("/releaseDate")
        @ResponseBody
        public Ticket getTicketByReleaseDate(@PathVariable("releaseDate") Date releaseDate){
            return ts.getTicketByReleaseDate(releaseDate);
        }
        @GetMapping("/movie_title")
        @ResponseBody
        public Ticket getTicketByName(@PathVariable("movie_title")String movie_title){
            return ts.getTicketByName(movie_title);
        }
        @GetMapping("/Show_Time_Date")
        @ResponseBody
        public  Ticket getTicketByShowTimeDate(@PathVariable("Show_Time_Variable") Date Show_Time_Date){
            return ts.getTicketByShowTimeDate(Show_Time_Date);
        }
        @GetMapping("/price")
        @ResponseBody
        public Ticket getTicketByPrice(@PathVariable("price") double price){
            return ts.getTicketByPrice(price);
        }

    }

