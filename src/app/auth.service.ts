import {Injectable} from '@angular/core';
import 'rxjs/add/operator/do';
import {Http, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private http: Http) {
    }

    signup(name: string, email: string, password: string, address: string) {
        return this.http.post('http://localhost:8000/api/user', {name: name, email: email, password: password, address: address},
            {headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})}
        );
    }

    signin(email: string, password: string) {
        return this.http.post('http://localhost:8000/api/user/signin', {email: email, password: password},
            {headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})})
            .map(
                (response: Response) => {
                    const token = response.json().token;
                    const base64Url = token.split('.')[1];
                    const base64 = base64Url.replace('-', '+').replace('_', '/');
                    return {token: token, decoded: JSON.parse(window.atob(base64))};
                }
            )
            .do(
                tokenData => {
                    localStorage.setItem('token', tokenData.token);
                }
            );
    }

    sendPasswordResetLink(data) {
        return this.http.post('http://localhost:8009/api/sendPasswordResetLink', data
        );
    }

    changePassword(data) {
        return this.http.post('http://localhost:8009/api/resetPassword', data
        );
    }
}
