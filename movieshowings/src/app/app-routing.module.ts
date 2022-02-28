import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { UserPageComponent } from './components/user-page/user-page.component';
import { RegisterComponent } from './components/register/register.component';
import { SavedTicketsComponent } from './components/saved-tickets/saved-tickets.component';

const routes = 
    [
        {path:'', redirectTo:'/login', pathMatch:'full'},
        {path:'login', component: LoginComponent},
        {path: 'registration', component: RegisterComponent},
        {path: 'user-page', component: UserPageComponent},
        {path:'saved-tickets', component: SavedTicketsComponent}
    ]

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
})

export class AppRoutingModule{}