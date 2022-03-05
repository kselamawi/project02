import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PurchaseComponent } from './purchase.component';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {PurchaseService} from '../../services/purchase-service.service';
import {Subject} from 'rxjs';
import {IPurchase} from '../../interfaces/IPurchase';


class MockPurchaseService {
  user: Subject<IPurchase[]> = new Subject<IPurchase[]>(); 

  purchase() {
    return [
      {
        userID: 0,
        purchaseID: 0
      }
    ]
  }

}

describe('PurchaseComponent', () => {
  let component: PurchaseComponent;
  let fixture: ComponentFixture<PurchaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseComponent ],
      imports: [RouterTestingModule, HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
