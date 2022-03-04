package com.revature.repository;

import com.revature.models.Purchase;
import com.revature.models.Ticket;
import com.revature.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public interface PurchaseRepository extends JpaRepository<Purchase, Integer> {
    List<Purchase> findAllByOwner(User user);
   // Purchase save(Purchase purchase);
      Purchase getById(int id);
      double getPurchasePriceById(int id);
   // void delete(Purchase purchase);
      List<Ticket> getAllTicketsById(int id);
//    List<Ticket> findAllTicketsByPurchase(Purchase purchase);

}

