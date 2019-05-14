import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
    message: string;
    public form = {
        email: null,
        password: null
    };
    public error = null;

    constructor(private authService: AuthService, private router: Router, private http: HttpClient) {
    }

    ngOnInit() {
    }

    onSignin(form: NgForm) {
        this.authService.signin(form.value.email, form.value.password)
            .subscribe(
                tokenData => {
                    this.router.navigate(['/home']);
                },
                error => this.handledError(error),
            );
    }


    handledError(error) {
        this.error = error.error.error;
    }
}
