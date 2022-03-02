import { ComponentFixture, TestBed } from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { RegisterComponent } from './register.component';
import {UserService} from '../../services/user.service';
import {Subject} from 'rxjs';
import {IUser} from '../../interfaces/IUser';


class MockUserService {
  user: Subject<IUser[]> = new Subject<IUser[]>(); 

  register() {
    return [
      {
        id: 0,
        first: "Test",
        last: "Test",
        email: "Test",
        password: "Test"
      }
    ]
  }

}

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
      imports: [RouterTestingModule, HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
