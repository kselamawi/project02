import { TestBed } from '@angular/core/testing';

import { SetAndGetTickets } from './set-and-get-tickets-service';

describe('LocalStorageService', () => {
  let service: SetAndGetTickets;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetAndGetTickets);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
