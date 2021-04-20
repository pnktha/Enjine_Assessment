import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodItemsComponent } from './food-items/food-items.component';
import { FoodOrdersComponent } from './food-orders/food-orders.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { FoodAddOnsComponent } from './food-add-ons/food-add-ons.component';
import { PaymentSuccessComponent } from './payment-success/payment-success.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodItemsComponent,
    FoodOrdersComponent,
    MenuItemComponent,
    FoodAddOnsComponent,
    PaymentSuccessComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }