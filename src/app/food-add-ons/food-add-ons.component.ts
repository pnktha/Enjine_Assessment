import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-food-add-ons',
  templateUrl: './food-add-ons.component.html',
  styleUrls: ['./food-add-ons.component.scss']
})
export class FoodAddOnsComponent implements OnInit {
  @Input() item: any = {};
  @Input() cartItems: any = [];
  @Output() addItem = new EventEmitter();
  addonForm: FormGroup;
  isSubmitted = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.addonForm = this.formBuilder.group({
      sides: ['Salads'],
      Ketchup: [],
      mustard: [''],
      lettuce: [''],
      tomato: [''],
      friesSize: ['Small'],
      saladType: ['caesar'],
      steakType: ['medium'],
      bakedPotatos: ['', Validators.required],
      specialOrders: ['']
    })
  }
  addFoodItem() {
    this.isSubmitted = true;
    if (this.item.name == 'Burger') {
      if (this.addonForm.get('Ketchup').value) {
        this.addItem.emit({ name: 'Ketchup', price: 0, currency: '$', quantity: 1 })
      } else if (this.addonForm.get('mustard').value) {
        this.addItem.emit({ name: 'Mustard', price: 0, currency: '$', quantity: 1 })
      } else if (this.addonForm.get('lettuce').value) {
        this.addItem.emit({ name: 'Lettuce', price: 0, currency: '$', quantity: 1 })
      } else if (this.addonForm.get('tomato').value) {
        this.addItem.emit({ name: 'Tomato', price: 0, currency: '$', quantity: 1 })
      } else {
        alert('Please check atleast one item to proceed.')
        return;
      }
    }

    if (this.addonForm.get('specialOrders').value) {
      this.addItem.emit({ name: this.addonForm.get('specialOrders').value, price: 0, currency: '$', quantity: 1 })
    }
    if (this.addonForm.get('sides').value == 'Fries') {
      this.addItem.emit({ name: this.addonForm.get('friesSize').value + ' Fries', price: 0, currency: '$', quantity: 1 })
    }
    if (this.addonForm.get('sides').value == 'Salads') {
      this.addItem.emit({ name: this.addonForm.get('saladType').value + ' Salad', price: 0, currency: '$', quantity: 1 })
    }
    if (this.item.name == 'Steaks') {
      if (this.addonForm.get('sides').value == 'BakedPotato') {
        if (this.addonForm.get('bakedPotatos').value) {
          this.addItem.emit({ name: this.addonForm.get('bakedPotatos').value + ' Baked Potatos', price: 0, currency: '$', quantity: 1 })
        } else {
          alert('Please specify number of Baked Potatos.')
          return;
        }
      }
    }
    this.addItem.emit({ isParentItem: true });
  }
}
