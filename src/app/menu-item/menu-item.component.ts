import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {
  @Input() item: any = {};
  @Input() cartItems: any = [];
  @Output() addItem = new EventEmitter();
  @Input() foodItem: any = {};
  isClosed = true;
  constructor() { }

  ngOnInit(): void {
  }

  addFoodItem(item) {
    this.foodItem = item;
    if (this.foodItem.name == 'Burger' || this.foodItem.name == 'Steaks') {
      this.isClosed = false;
    } else {
      this.addToCart(this.foodItem);
      alert('Items added tocart');
    }
  }

  addToCart(item) {
    const cartItems = this.cartItems.filter(x => x.name == item.name);
    if (cartItems && cartItems.length > 0) {
      const itemData = this.cartItems.find(x => x.name == item.name);
      itemData.price = itemData.price + item.price;
      itemData.quantity = cartItems.length + 1;
    } else {
      this.addItem.emit({ name: item.name, price: item.price, currency: item.currency, quantity: cartItems.length + 1 });
    }
  }

  addSubItems(subitems) {
    if (subitems.isParentItem) {
      this.addToCart(this.foodItem);
      this.isClosed = true;
      alert('Items added tocart');
      return;
    }
    this.foodItem.subitems = true;
    this.addToCart(subitems);

  }
}
