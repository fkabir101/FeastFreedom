import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { RegisterUserPageComponent } from './register-user-page/register-user-page.component';
import { LoginUserPageComponent } from './login-user-page/login-user-page.component'
import { CreateKitchenComponent } from './create-kitchen/create-kitchen.component';
import {KitchenCreateMenuComponent} from './kitchen-create-menu/kitchen-create-menu.component'
import {KitchenMenuComponent} from './kitchen-menu/kitchen-menu.component'
import {CartComponent} from './cart/cart.component'

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'registerUser', component: RegisterUserPageComponent},
  {path: 'loginUser', component: LoginUserPageComponent},
  {path: 'createKitchen', component: CreateKitchenComponent},
  {path: 'createMenu/:kitchen', component: KitchenCreateMenuComponent},
  {path: 'kitchen/:id', component : KitchenMenuComponent},
  {path: 'cart', component : CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [HomePageComponent, RegisterUserPageComponent, LoginUserPageComponent, CreateKitchenComponent, KitchenCreateMenuComponent, KitchenMenuComponent, CartComponent]  
