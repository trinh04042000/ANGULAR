import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../auth.service';
@Component({
    selector: 'app-request-reset',
    templateUrl: './request-reset.component.html',
    styleUrls: ['./request-reset.component.scss']
})
export class RequestResetComponent implements OnInit {
    public error = [];
    public form = {
        email: null,
        password: null,
        password_confirmation: null,
        resetToken: null,
    };

    constructor(private route: ActivatedRoute,
                private authService: AuthService,
                private router: Router) {
        route.queryParams.subscribe(params => {
            this.form.resetToken = params['token'];
        });
    }
    onSubmit() {
        this.authService.changePassword(this.form).subscribe(
            data => this.handledResponse(data),
            error => this.handleError(error),
        );
    }
    handledResponse(data) {
        this.router.navigate(['/signin']);
    }
    handleError(error) {

    }
    ngOnInit() {
    }
   
}
