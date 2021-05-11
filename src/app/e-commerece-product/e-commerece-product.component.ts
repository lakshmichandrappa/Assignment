import { Component, OnInit } from '@angular/core';
import { GlobalConstants } from '../product-constant'

@Component({
  selector: 'app-e-commerece-product',
  templateUrl: './e-commerece-product.component.html',
  styleUrls: ['./e-commerece-product.component.css']
})
export class ECommereceProductComponent implements OnInit {

  products = GlobalConstants.products;
  gridViews: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  gridView() {
    this.gridViews = true;
  }
  
  listView() {
    this.gridViews = false;
  }

}
