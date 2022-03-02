import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedTicketsComponent } from './saved-tickets.component';
import { Router, NavigationExtras } from '@angular/router';
import { TicketServiceService } from 'src/app/services/ticket-service.service';
import { SetAndGetTicketsService } from 'src/app/services/set-and-get-tickets.service';

describe('SavedTicketsComponent', () => {
  let component: SavedTicketsComponent;
  let fixture: ComponentFixture<SavedTicketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavedTicketsComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
