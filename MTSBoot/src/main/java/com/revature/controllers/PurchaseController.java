package com.revature.controllers;

import com.revature.models.Purchase;
import com.revature.models.User;
import com.revature.services.PurchaseService;
import com.revature.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@Controller
@RequestMapping(value="/purchase")
@CrossOrigin("*")
public class PurchaseController {
    private UserService us;
    private PurchaseService ps;

    public PurchaseController(){}

    @Autowired
    public PurchaseController(PurchaseService ps, UserService us) {
        this.ps = ps;
        this.us = us;
    }

    @PostMapping("/")
    @ResponseBody
    public Purchase createPurchase(@RequestBody Purchase purchase) {
        System.out.println("why is it not working?" + purchase);
        return ps.createPurchase(purchase.getPurchaseId(), purchase.getPurchaseDate(), purchase.getOwner());
    }

    // This method gets all purchase by user (waiting on UserService to be created) *********************************

    @GetMapping("/user/{id}")
    @ResponseBody
    public List<Purchase> getPurchaseByUserId(@PathVariable("id")int id) {
         User user = us.getUserById(id);
         return ps.getPurchasesByUser(user);
    }

    @DeleteMapping("/{purchaseId}")
    @ResponseBody
    boolean deletePurchaseById(@PathVariable("purchaseId")int purchaseId) {
        Purchase purchase = ps.getPurchaseById(purchaseId);
        ps.deletePurchase(purchase);

        return true;
    }

}
