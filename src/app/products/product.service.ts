import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product';
import { Observable } from 'rxjs';
import { Category } from './sidebar/category';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpClient: HttpClient) {}

  getAllProducts(): Observable<Product> {
    const productUrl = 'http://localhost:3000/products';
    return this.httpClient.get<Product>(productUrl); // return an observable
  }

  createProduct(productBody: any): Observable<Product> {
    const baseUrl = 'http://localhost:3000/products';
    return this.httpClient.post<Product>(baseUrl, productBody);
  }
  viewProduct(categoryId: number): Observable<Product> {
    const baseUrl = 'http://localhost:3000/products/' + categoryId;
    return this.httpClient.get<Product>(baseUrl);
  }
  updateProduct(productId: any, productBody: any): Observable<Product> {
    const baseUrl = 'http://localhost:3000/products/' + productId;
    return this.httpClient.put<Product>(baseUrl, productBody);
  }
  deleteProduct(productId: any): Observable<Product> {
    const baseUrl = 'http://localhost:3000/products/' + productId;
    return this.httpClient.delete<Product>(baseUrl);
  }
  searchCategoryProduct(categoryId: number): Observable<Product> {
    const baseUrl = 'http://localhost:3000/products?categoryId=' + categoryId;
    return this.httpClient.get<Product>(baseUrl);
  }
  searchDateProduct(dateParam: string): Observable<Product> {
    const baseUrl = 'http://localhost:3000/products' + dateParam;
    return this.httpClient.get<Product>(baseUrl);
  }
  getCategory() {
    const CategoryUrl = 'http://localhost:3000/categoreis';
    return this.httpClient.get<Category>(CategoryUrl);
  }
}
