import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
    private readonly API_URL = 'http://localhost:8000/api/product';

    constructor(private http: HttpClient) { }

    getProduct() {
        return this.http.get<Product[]>(this.API_URL);
    }
    getProductById(id: number): Observable<Product> {
        return this.http.get<Product>(`${this.API_URL}/${id}`);
    }
    searchProduct(keyword): Observable<Product[]> {
        return this.http.get<Product[]>(`${this.API_URL}/search/${keyword}`);
    }
}
