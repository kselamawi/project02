package com.revature.repository;

import com.revature.models.Purchase;
import com.revature.models.Ticket;
import com.revature.models.User;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.Date;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.*;
@RunWith(SpringRunner.class)
@DataJpaTest
class TicketRepositoryTest {
@Autowired
private TestEntityManager entityManager;
//    @Autowired
//    private TicketRepository ticketRepository;
//    @Test
//    public void saveTicketTest(){
//        Ticket ticket = ticketRepository.save(new Ticket());
//      assertThat(ticket).hasFieldOrPropertyWithValue("show_Time_Date",new Date(05/25/2022));
//      assertThat(ticket).hasFieldOrPropertyWithValue("movie_title","friends for ever");
//      assertThat(ticket).hasFieldOrPropertyWithValue("price",450);
//      assertThat(ticket).hasFieldOrPropertyWithValue("genre","comedy");
//      assertThat(ticket).hasFieldOrPropertyWithValue("releaseDate",new Date(03/03/2022));
//      assertThat(ticket).hasFieldOrPropertyWithValue("Purchase",new Purchase(112,new java.sql.Date(03/04/2022),new User("first","last","last@email.com","password")));
//       assertThat(ticket).hasFieldOrPropertyWithValue("User",new User("Abc","xyz","Abc@email.com","xyzabc"));
//
//
//    }

}