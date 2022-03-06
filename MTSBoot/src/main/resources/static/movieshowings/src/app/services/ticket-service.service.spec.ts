import { TestBed } from '@angular/core/testing';

import { TicketServiceService } from './ticket-service.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';

describe('TicketServiceService', () => {
  let service: TicketServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TicketServiceService],
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(TicketServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
