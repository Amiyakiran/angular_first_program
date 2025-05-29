import { Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { DashBoardComponent } from './components/dash-board/dash-board.component';

export const routes: Routes = [
    //path - object
    {path:'', component:RegisterComponent},
    {path:'login', component:LoginComponent},
    {path:'dashboard', component:DashBoardComponent}
];
