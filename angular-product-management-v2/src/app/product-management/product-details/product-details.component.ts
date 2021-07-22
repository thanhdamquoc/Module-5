import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {Category} from '../../model/category';
import {ProductService} from '../../service/product/product.service';
import {CategoryService} from '../../service/category/category.service';
import {ActivatedRoute} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product = {
    category: {
      id: undefined,
    }
  };
  categories: Category[] = [];
  productId = -1;

  constructor(private productService: ProductService,
              private categoryService: CategoryService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.load();
  }

  load() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.categoryService.getAll().subscribe(categories => this.categories = categories);
      this.productId = +paramMap.get('id');
      this.productService.getById(this.productId).subscribe(product => this.product = product);
    });
  }

  update(productUpdateForm: NgForm) {
    if (productUpdateForm.valid) {
      this.productService.update(this.productId, this.product).subscribe(product => {
        this.load();
        alert(product.name + ' updated');
      });
    }
  }
}
