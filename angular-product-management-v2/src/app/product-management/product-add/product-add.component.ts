import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {ProductService} from '../../service/product/product.service';
import {CategoryService} from '../../service/category/category.service';
import {Category} from '../../model/category';
import {finalize} from 'rxjs/operators';
import {AngularFireStorage} from '@angular/fire/storage';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  product: Product = {};
  categories: Category[] = [];
  imageUrl = undefined;

  constructor(private productService: ProductService,
              private categoryService: CategoryService,
              private storage: AngularFireStorage) {
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
      this.product.image = this.imageUrl;
      this.productService.add(this.product).subscribe(() => {
        alert('product added');
        this.load();
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
