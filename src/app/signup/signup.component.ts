import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    message: string;
    constructor(private authService: AuthService, private router: Router
    ) {
    }

    ngOnInit() {
    }

    onSignup(form: NgForm) {
        this.authService.signup(form.value.name, form.value.email, form.value.password, form.value.address)
            .subscribe(
                response => {
                    // this.message = 'Đăng kí thành công';
                    this.router.navigate(['/signin']);
                },
                // response => console.log(response),
                error => console.log(error)
            );
    }
}
