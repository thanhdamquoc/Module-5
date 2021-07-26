import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {Category} from '../../model/category';
import {ProductService} from '../../service/product/product.service';
import {CategoryService} from '../../service/category/category.service';
import {ActivatedRoute} from '@angular/router';
import {NgForm} from '@angular/forms';
import {AngularFireStorage} from '@angular/fire/storage';
import {finalize} from 'rxjs/operators';

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
  imageUrl = '';

  constructor(private productService: ProductService,
              private categoryService: CategoryService,
              private activatedRoute: ActivatedRoute,
              private storage: AngularFireStorage) {
  }

  ngOnInit() {
    this.load();
  }

  load() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.categoryService.getAll().subscribe(categories => this.categories = categories);
      this.productId = +paramMap.get('id');
      this.productService.getById(this.productId).subscribe(product => {
        this.product = product;
        this.imageUrl = product.image;
      });
    });
  }

  update(productUpdateForm: NgForm) {
    if (productUpdateForm.valid) {
      this.product.image = this.imageUrl;
      this.productService.update(this.productId, this.product).subscribe(product => {
        this.load();
        alert(product.name + ' updated');
      });
    }
  }

  previewImage(event: Event) {
    if (event.target.files && event.target.files[0]) {
      const selectedImage = event.target.files[0];
      // upload file to storage
      const fileName = selectedImage.name.concat(new Date().getTime());
      const fileRef = this.storage.ref(fileName);
      this.storage.upload(fileName, selectedImage).snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe(url => {
            this.imageUrl = url;
          });
        })
      ).subscribe();
    }
  }
}
