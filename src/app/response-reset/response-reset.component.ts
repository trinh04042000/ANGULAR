import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import {SnotifyService} from 'ng-snotify';

@Component({
    selector: 'app-response-reset',
    templateUrl: './response-reset.component.html',
    styleUrls: ['./response-reset.component.scss']
})
export class ResponseResetComponent implements OnInit {
    public form = {
        email: null
    };

    constructor(private authService: AuthService,
                private notify: SnotifyService,
    ) {
    }

    ngOnInit() {
    }

    onSubmit() {
        this.authService.sendPasswordResetLink(this.form).subscribe(
            data => this.handleRespose(data),
            error => this.notify.error(error.error.error)
        );
    }

    handleRespose(res) {
        console.log(res);
        this.form.email = null;
    }
}
