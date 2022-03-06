package com.revature.services;

import com.revature.models.Ticket;
import com.revature.models.User;
import com.revature.repository.TicketRepository;
import com.revature.repository.UserRepository;
import jdk.nashorn.internal.objects.NativeDate;
import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import static java.time.temporal.TemporalQueries.localDate;
import static jdk.nashorn.internal.objects.NativeDate.getDate;
import static org.apache.tomcat.jni.SSL.getTime;
import static org.junit.Assert.assertEquals;
import static org.mockito.ArgumentMatchers.*;
import static org.mockito.Mockito.when;

public class TicketServiceTest {

//
//    @Mock
//    TicketRepository ticketRepository;
//    @InjectMocks
//   TicketService ticketService;
//    Ticket ticket;
//    List<Ticket> ticketList;
//    @Before
//    public void setupTest(){
//        MockitoAnnotations.openMocks(this);
//
//    }
//// 1
//    @Test
//    public void getAllTickets() {
//        when(ticketService.getAllTickets())
//                .thenReturn(ticketList);
//
//        assertEquals(ticketService.getAllTickets(), ticketList);
//    }
//    //2
//    @Test
//    public void getTicketByGenre(){
//        when(ticketService.getTicketByGenre(anyString()))
//                .thenReturn(ticket);
//
//        assertEquals(ticketService.getTicketByGenre(anyString()), ticket);
//
//    }
//    //3
//    @Test
//    public void getTicketByePrice(){
//        when(ticketService.getTicketByPrice(anyDouble()))
//                .thenReturn(ticket);
//
//        assertEquals(ticketService.getTicketByPrice(anyInt()), ticket);
//
//    }
//    //4
//    @Test
//    public void getTicketByName(){
//        when(ticketService.getTicketByName(anyString()))
//                .thenReturn(ticket);
//
//        assertEquals(ticketService.getTicketByName(anyString()), ticket);
//
//    }
//    //5
//    @Test
//    public void getTicketById(){
////        when(ticketService.getTicketsById(anyInt()))
////                .thenReturn(ticket);
////
////        assertEquals(ticketService.getTicketsById(anyInt()), ticket);
//    }
//    //6
//    @Test
//    public void createTicket(){
//        when(ticketService.createTicket(any()))
//                .thenReturn(ticket);
//        assertEquals(ticketService.createTicket(any()),ticket);
//    }
//    //7
//    @Test
//    public void getTicketByShowTimeDate(){
//        Ticket SimpleDateFormat = null;
////        when(ticketService.getTicketByShowTimeDate(any()))
////                .thenReturn(null);
////        assertEquals(ticketService.getTicketByShowTimeDate(any()), null);
//    }
////8
//    @Test
//    public void getTicketByReleaseDate(){
//        Ticket SimpleDateFormat = null;
////        when(ticketService.getTicketByReleaseDate(any()))
////                .thenReturn(null);
////        assertEquals(ticketService.getTicketByReleaseDate(any()), null);
//    }
//@Test
//    public void getByGenre(){
//        when(ticketRepository.getByGenre(anyString()))
//                .thenReturn(ticket);
//        assertEquals(ticketRepository.getByGenre(anyString()),ticket);
//}
//@Test
//  public void getByMovieTitle(){
//    when(ticketRepository.getByMovieTitle(anyString()))
//            .thenReturn(ticket);
//    assertEquals(ticketRepository.getByMovieTitle(anyString()),ticket);
//}
//@Test
//  public void getByReleaseDate(){
//    Ticket SimpleDateFormat = null;
////    when(ticketRepository.getByReleaseDate(any()))
////            .thenReturn(null);
////    assertEquals(ticketRepository.getByReleaseDate(any()), null);
//
//  }
//@Test
//  public void  getByShowTimeDate(){
//      Ticket SimpleDateFormat = null;
////      when(ticketRepository.getByShowTimeDate(any()))
////              .thenReturn(null);
////      assertEquals(ticketRepository.getByShowTimeDate(any()), null);
//
//  }
//@Test
//    public void getTicketByPrice(){
//        when(ticketRepository.getTicketByPrice(anyDouble()))
//                .thenReturn(ticket);
//        assertEquals(ticketRepository.getTicketByPrice(anyDouble()),ticket);
//
//    }

    }
