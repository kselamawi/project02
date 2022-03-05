package com.revature.services;

import com.revature.models.Purchase;
import com.revature.models.Ticket;
import com.revature.models.User;
import com.revature.repository.PurchaseRepository;
import com.sun.xml.txw2.Document;
import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.mockito.stubbing.OngoingStubbing;

import java.time.Instant;
import java.util.Date;
import java.util.List;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNull;
import static org.mockito.ArgumentMatchers.*;
import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.when;

public class PurchaseServiceTest {

//
//    @Mock
//    PurchaseRepository purchaseRepository;
//
//    @InjectMocks
//    PurchaseService purchaseService;
//    Purchase purchase;
//    List<Purchase> purchaseList;
//
//    @Before
//    public void setupTest() {
//        MockitoAnnotations.openMocks(this);
//    }
//
//    //1
//    @Test
//    public void getPurchaseById() {
//        when(purchaseService.getPurchaseById(anyInt()))
//                .thenReturn(purchase);
//        assertEquals(purchaseService.getPurchaseById(anyInt()), purchase);
//    }
//
//    //2
//    @Test
//    public void getPurchaseByUser() {
//        when(purchaseService.getPurchasesByUser(any()))
//                .thenReturn((List<Purchase>) purchase);
//        assertEquals(purchaseService.getPurchasesByUser(any()), purchase);
//    }
//
//    //3
//    @Test
//            public void createPurchase(){
//
//            Purchase SimpleDateFormat = null;
////            when(purchaseService.createPurchase(112,null,null))
////                    .thenReturn(null);
////            assertEquals(purchaseService.createPurchase(112,null,null),null);
//        }
//        //4
//    @Test
//    public void deletePurchase() {
//        Purchase purchase =new Purchase(
//                102,
//                null,
//                null);
//
//    purchaseService.deletePurchase(any());
//
//    }
//   // @Test
//  /*  public void getPrice(){
//        when(purchaseService.getPurchasePriceById(anyInt()))
//                .thenReturn(purchase);
//        assertEquals(purchaseService.getPurchasePriceById(),purchase);
//    }*/
}






