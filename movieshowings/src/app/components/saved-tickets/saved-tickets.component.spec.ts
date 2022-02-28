import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedTicketsComponent } from './saved-tickets.component';

describe('SavedTicketsComponent', () => {
  let component: SavedTicketsComponent;
  let fixture: ComponentFixture<SavedTicketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavedTicketsComponent ]
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
