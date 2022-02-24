package com.revature.repository;

import com.revature.models.Purchase;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PurchaseRepository extends JpaRepository<Purchase, Integer> {

    //Purchase findAllPurchaseByUserId(int userId);

}
