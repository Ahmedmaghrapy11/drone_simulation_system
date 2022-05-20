
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthonGuard } from './guard/authon.guard';
import { UserComponent } from './components/user/user.component';
import { DroneSimComponent } from './components/drone-sim/drone-sim.component';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login' ,component:LoginComponent },
  {path:'register' ,component:RegisterComponent },
  {path:'system' ,component:UserComponent, canActivate:[AuthonGuard]},
  {path:'drone-sim' ,component:DroneSimComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
