import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {ProductService} from '../../service/product/product.service';
import {CategoryService} from '../../service/category/category.service';
import {Category} from '../../model/category';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  product: Product = {};
  categories: Category[] = [];

  constructor(private productService: ProductService, private categoryService: CategoryService) {
  }

  ngOnInit() {
    this.load();
  }

  load() {
    this.product = {
      category: {
        id: undefined,
      }
    };
    this.categoryService.getAll().subscribe(categories => this.categories = categories);
  }

  addProduct(productForm) {
    if (productForm.valid) {
      this.productService.add(this.product).subscribe(() => {
        alert('product added');
        this.load();
      });
    }
  }
}
