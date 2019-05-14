import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';


const API_URL = 'http://localhost:8000/api/cart';
@Injectable({
    providedIn: 'root'
})
export class CartService {
    constructor(private http: HttpClient) {
    }

    get(path, params: HttpParams = new HttpParams()) {
        return this.http.get(`${API_URL}/ ${path}`, {params})
            .pipe(
                catchError(this.handleError)
            );
    }


    post(path, params) {
        return this.http.post(`${API_URL}/ ${path}`, params)
            .pipe(
                catchError(this.handleError)
            );
    }

    handleError(err: any) {
        return Observable.throw(err);
    }
}
