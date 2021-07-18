import {Component, OnInit} from '@angular/core';
import {Product} from '../product';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  products: Product[] = [{
    id: 11,
    name: 'iPhone 12',
    brand: 'Apple',
  }, {
    id: 12,
    name: 'iPhone 12 Pro',
    brand: 'Apple',
  }, {
    id: 21,
    name: 'Samsung S10',
    brand: 'Samsung',
  }];

  createFormIsShown = false;
  editFormIsShown = -1;

  toggleCreateForm() {
    if (this.createFormIsShown === false) {
      this.createFormIsShown = true;
    } else {
      this.createFormIsShown = false;
    }
  }

  deleteProductById(productId: number) {
    for (let i = 0; i < this.products.length; i++) {
      let product = this.products[i];
      if (product.id === productId) {
        this.products.splice(i, 1);
      }
    }
  }

  toggleEditForm(productId: number) {
    if (this.editFormIsShown === productId) {
      this.editFormIsShown = -1;
    } else {
      this.editFormIsShown = productId;
    }
  }

  constructor() {
  }

  ngOnInit() {
  }

}
