import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../product';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  @Input() products: Product[];
  newProduct = {
    id: undefined,
    name: undefined,
    brand: undefined,
  };

  constructor() {
  }

  ngOnInit() {
  }

  addNewProduct() {
    this.products.push({
      id: this.newProduct.id,
      name: this.newProduct.name,
      brand: this.newProduct.brand,
    });
  }
}
