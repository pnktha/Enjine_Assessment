import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodAddOnsComponent } from './food-add-ons.component';

describe('FoodAddOnsComponent', () => {
  let component: FoodAddOnsComponent;
  let fixture: ComponentFixture<FoodAddOnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodAddOnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodAddOnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
