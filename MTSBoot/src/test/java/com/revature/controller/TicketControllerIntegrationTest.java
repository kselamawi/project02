package com.revature.controller;

import com.revature.models.Ticket;
import com.revature.models.User;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.jdbc.Sql;

import java.util.Date;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class TicketControllerIntegrationTest {
//
//    /*I am trying to implement and do integration testing of Rest APIs using @SpringBootTest.
//   I am using TestRestTemplate to execute and test our Rest APIs by starting a real server on a random port.
//     */
//    @Autowired
//    private TestRestTemplate testRestTemplate;
//
//    @Sql("/ticketTest.sql")
//    @Test
//    public void getTicketByIdTest(){
//        ResponseEntity<Ticket> response =testRestTemplate.getForEntity("/ticket/1223",Ticket.class);
//        assertEquals(1223,response.getBody().getId());
////        assertEquals("05-25-2022",response.getBody().getShowTimeDate());
//        assertEquals("funnyfriends",response.getBody().getMovieTitle());
//        assertEquals(450,response.getBody().getPrice());
//        assertEquals("comedy",response.getBody().getGenre());
////        assertEquals("04-04-2022",response.getBody().getReleaseDate());
//
//    }
//    // let's test for post Api
//    @Test
//    public void saveTicket(){
//       Ticket ticket =new Ticket();
////        ticket.setShowTimeDate(new Date());
//        ticket.setMovieTitle("falling from grace");
//        ticket.setPrice(340);
//        ticket.setGenre("Comedy");
////        ticket.setReleaseDate(new Date());
//
//        HttpEntity<Ticket> request =new HttpEntity<>(ticket);
//        ResponseEntity<Ticket> response =testRestTemplate.postForEntity("/user",request,Ticket.class);
//        assertNotNull(response.getBody().getId());
//
////        assertEquals(new Date(),response.getBody().getShowTimeDate());
////        assertEquals("falling from grace",response.getBody().getShowTimeDate());
//        assertEquals(340,response.getBody().getPrice());
//        assertEquals("comedy",response.getBody().getGenre());
////        assertEquals(new Date(),response.getBody().getReleaseDate());
//    }
}
