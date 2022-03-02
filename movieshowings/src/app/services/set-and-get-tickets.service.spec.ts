import { TestBed } from '@angular/core/testing';

import { SetAndGetTicketsService } from './set-and-get-tickets.service';

describe('SetAndGetTicketsService', () => {
  let service: SetAndGetTicketsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetAndGetTicketsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
