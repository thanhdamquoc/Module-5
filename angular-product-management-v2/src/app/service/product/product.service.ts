import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../../model/product';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${API_URL}/products`);
  }

  getById(id: number): Observable<Product> {
    return this.httpClient.get<Product>(`${API_URL}/products/${id}`);
  }

  add(product: Product): Observable<Product> {
    return this.httpClient.post(`${API_URL}/products`, product);
  }

  update(id: number, product: Product): Observable<Product> {
    return this.httpClient.put(`${API_URL}products/${id}`, product);
  }

  deleteById(id: number): Observable<Product> {
    return this.httpClient.delete(`${API_URL}/products/${id}`);
  }
}
