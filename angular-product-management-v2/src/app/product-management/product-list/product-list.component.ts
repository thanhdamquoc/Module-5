import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {ProductService} from '../../service/product/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.load();
  }

  load() {
    this.productService.getAll().subscribe(products => this.products = products);
  }

  deleteById(id: number) {
    const isSureAboutDelete = confirm('Are you sure?');
    if (isSureAboutDelete) {
      this.productService.deleteById(id).subscribe(() => this.load());
    }
  }
}
