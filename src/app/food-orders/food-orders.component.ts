import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-food-orders',
  templateUrl: './food-orders.component.html',
  styleUrls: ['./food-orders.component.scss']
})
export class FoodOrdersComponent implements OnInit {
  @Input() cartItems: any = [];
  @Output() cancelItem = new EventEmitter();
  @Output() remove = new EventEmitter();

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  cancel() {
    this.cancelItem.emit(false);
  }
  deleteItem(idx) {
    this.cartItems.splice(idx, 1);
  }
  pay(){
this.router.navigate(['/payment-success']);
  }
}
