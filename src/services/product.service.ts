import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Category} from '../models/Category';
import {Product} from '../models/Product';
import {Producer} from '../models/Producer';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productUrl = 'http://localhost:3000/api/product';
  categoryUrl = 'http://localhost:3000/api/category';
  producerUrl = 'http://localhost:3000/api/producer';

  constructor(private http: HttpClient) { }

  getAllCategory(): Observable<Category[]> {
    return this.http.get<Category[]>(this.categoryUrl);
  }

  getProducer(): Observable<Producer[]> {
    return this.http.get<Producer[]>(this.producerUrl);
  }

  getAllProduct(query): Observable<Product[]> {
      return this.http.get<Product[]>(`${this.productUrl}?skip=${query.skip}&limit=${query.limit}`);
  }

  getProductById(id): Observable<Product> {
    return this.http.get<Product>(this.productUrl + '/' + id);
  }
}