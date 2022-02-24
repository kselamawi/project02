package com.revature.services;

import com.revature.models.Purchase;
import com.revature.repository.PurchaseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;

@Service
@Transactional
public class PurchaseService {
    private PurchaseRepository pr;

    public PurchaseService() {}

    @Autowired
    public PurchaseService(PurchaseRepository pr) {
        this.pr = pr;
    }

    public Purchase createPurchase(int purchaseId, Date purchaseDate, int userId) {
        Purchase purchase = new Purchase(purchaseId, (java.sql.Date) purchaseDate, userId);
        return pr.save(purchase);
    }

//    public void deletePurchase(Purchase purchase) {
//       pr.delete(purchase);
//    }


}
