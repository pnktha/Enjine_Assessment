import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food-items',
  templateUrl: './food-items.component.html',
  styleUrls: ['./food-items.component.scss']
})
export class FoodItemsComponent implements OnInit {
  foodList: any = [];
  cartItems: any = [];
  isCheckout: boolean = false;
  foodItem: any = {};
  constructor() { }

  ngOnInit(): void {
    this.getFoodItems();
  }

  getFoodItems() {
    const foodList =
      [{ name: 'Burger', imageUrl: 'https://images.mcdelivery.co.in/hardcastle-restaurants-pvt-ltd/image/upload/f_auto,q_auto,w_250/v1589466568/Item/47.png 1x, https://images.mcdelivery.co.in/hardcastle-restaurants-pvt-ltd/image/upload/f_auto,q_auto,w_500/v1589466568/Item/47.png 2x, https://images.mcdelivery.co.in/hardcastle-restaurants-pvt-ltd/image/upload/f_auto,q_auto,w_750/v1589466568/Item/47.png 4x', price: 20, currency: '$', subitems: false },
      { name: 'Steaks', imageUrl: 'https://i.ytimg.com/vi/nsw0Px-Pho8/maxresdefault.jpg 5x', price: 40, currency: '$', subitems: false },
      { name: 'Wraps', imageUrl: 'https://images.mcdelivery.co.in/hardcastle-restaurants-pvt-ltd/image/upload/f_auto,q_auto,w_250/v1589467267/Item/74.png 1x, https://images.mcdelivery.co.in/hardcastle-restaurants-pvt-ltd/image/upload/f_auto,q_auto,w_500/v1589467267/Item/74.png 2x, https://images.mcdelivery.co.in/hardcastle-restaurants-pvt-ltd/image/upload/f_auto,q_auto,w_750/v1589467267/Item/74.png 3x', price: 50, currency: '$', subitems: false }]
    this.foodList = foodList;
  }
  SubmitData() {
    this.isCheckout = true;
  }
  addToCart(item) {
    this.foodItem = item;
    this.cartItems.push(item);
  }
  cancel() {
    this.isCheckout = false;
  }
}
