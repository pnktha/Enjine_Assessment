import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FoodItemsComponent } from './food-items/food-items.component';
import { FoodOrdersComponent } from './food-orders/food-orders.component';
import { PaymentSuccessComponent } from './payment-success/payment-success.component';

const routes: Routes = [{
  path: 'food-items', component: FoodItemsComponent
},
{
  path: 'checkout-items', component: FoodOrdersComponent
},
{
  path: 'payment-success', component: PaymentSuccessComponent
},
{
  path: '', redirectTo: 'food-items',pathMatch:'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
