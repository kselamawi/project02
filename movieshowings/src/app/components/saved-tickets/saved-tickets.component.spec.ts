import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SavedTicketsComponent } from './saved-tickets.component';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {TicketServiceService} from '../../services/ticket-service.service';
import {Subject} from 'rxjs';
import {ITicket} from '../../interfaces/ITicket';

class MockTicketServiceService {
  ticket: Subject<ITicket[]> = new Subject<ITicket[]>(); 

  getTickets() {
    return [
      {
        id: 0,
        price: 0,
        movieTitle: "Test",
        genre: "Test",
        releaseDate: "Test",
        showTimeDate: "Test",
        timeslot: "Test"
      }
    ]
  }

}

describe('SavedTicketsComponent', () => {
  let component: SavedTicketsComponent;
  let fixture: ComponentFixture<SavedTicketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavedTicketsComponent ],
      imports: [RouterTestingModule, HttpClientTestingModule]
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
