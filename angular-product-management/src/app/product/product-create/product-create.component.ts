import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {ProductService} from '../../service/product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  product: Product = {};

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
  }

  addProduct(productForm) {
    if (productForm.valid) {
      this.productService.add(productForm.value).subscribe(() => alert('new product added'));
    }
  }
}
