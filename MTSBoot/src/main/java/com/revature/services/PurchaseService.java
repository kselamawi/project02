package com.revature.services;

import com.revature.models.Purchase;
import com.revature.models.Ticket;
import com.revature.models.User;
import com.revature.repository.PurchaseRepository;
import com.revature.repository.TicketRepository;
import com.revature.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class PurchaseService {
    private PurchaseRepository pr;
    private EmailService es;
    private TicketRepository tr;

    public PurchaseService() {}

    @Autowired
    public PurchaseService(PurchaseRepository pr){
        this.pr = pr;
    }

    public Purchase createPurchase(int price, List<Ticket> ticket, User owner) {
        Purchase purchase = new Purchase(price, ticket, owner);
        return pr.save(purchase);
    }

    public Purchase getPurchaseById(int id) {
        return pr.getById(id);
    }

    //get total cost

    public int getPrice(int id) {
        return pr.getPurchasePriceById(id);
    }

    public List<Purchase> getPurchasesByUser(User user){
        return pr.findAllByOwner(user);
    }

    public void deletePurchase(Purchase purchase) {
       pr.delete(purchase);
    }



    public List<Ticket> getTickets(int id) {
        return pr.getAllTicketsById(id);
    }


}
