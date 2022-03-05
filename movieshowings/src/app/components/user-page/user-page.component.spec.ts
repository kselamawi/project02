import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserPageComponent } from './user-page.component';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {UserService} from '../../services/user.service';
import {Subject} from 'rxjs';
import {IUser} from '../../interfaces/IUser';
import { UpdateUserComponent } from '../update-user/update-user.component';

class MockUserService {
  user: Subject<IUser[]> = new Subject<IUser[]>(); 

  getUserFromUpdateUser() {
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

describe('UserPageComponent', () => {
  let component: UserPageComponent;
  let fixture: ComponentFixture<UserPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPageComponent, UpdateUserComponent ],
      imports: [RouterTestingModule, HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
