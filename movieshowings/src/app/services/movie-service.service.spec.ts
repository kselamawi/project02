import { TestBed } from '@angular/core/testing';

import { MovieServiceService } from './movie-service.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';


describe('MovieServiceService', () => {
  let service: MovieServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MovieServiceService],
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(MovieServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
