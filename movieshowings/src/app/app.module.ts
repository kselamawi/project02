import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
<<<<<<< HEAD
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { UserPageComponent } from './components/user-page/user-page.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { PurchaseComponent } from './components/purchase/purchase.component';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    UserPageComponent,
    UpdateUserComponent,
    PurchaseComponent
=======
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent
    PurchaseComponent
>>>>>>> ce5cb435937e9248c76a63437952f7ab7a5ecfdd
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
