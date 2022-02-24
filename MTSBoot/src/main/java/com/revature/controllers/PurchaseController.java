package com.revature.controllers;

import com.revature.models.Purchase;
import com.revature.services.PurchaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping(value="/purchase")
@CrossOrigin("*")
public class PurchaseController {
    private PurchaseService ps;

    public PurchaseController(){}

    @Autowired
    public PurchaseController(PurchaseService ps) {
        this.ps = ps;
    }

    @PostMapping("/")
    @ResponseBody
    public Purchase createPurchase(@RequestBody Purchase purchase) {
        return ps.createPurchase(purchase.getPurchaseId(), purchase.getPurchaseDate(), purchase.getUser());
    }

}
