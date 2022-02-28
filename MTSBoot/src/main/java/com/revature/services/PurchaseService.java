package com.revature.services;

import com.revature.models.Purchase;
import com.revature.models.Ticket;
import com.revature.models.User;
import com.revature.repository.PurchaseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;

@Service
@Transactional
public class PurchaseService {
    private PurchaseRepository pr;
    private TicketRepository tr;

    public PurchaseService() {}

    @Autowired
    public PurchaseService(PurchaseRepository pr) {

        this.pr = pr;
    }

    public Purchase createPurchase(int purchaseId, Date purchaseDate, User user) {
        Purchase purchase = new Purchase(purchaseId, (java.sql.Date) purchaseDate, user);
        return pr.save(purchase);
    }

    public Purchase getPurchaseById(int id) {
        return pr.getById(id);
    }


    public List<Purchase> getPurchasesByUser(User user){
        return pr.findAllByOwner(user);
    }

    public void deletePurchase(Purchase purchase) {
       pr.delete(purchase);
    }

    public List<Ticket> getAllTicketsByPurchase(Purchase purchase) {
        return tr.findAllTicketsByPurchase(purchase);
    }


}
