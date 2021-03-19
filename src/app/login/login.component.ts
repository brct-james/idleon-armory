import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.sass'],
})
export class LoginComponent implements OnInit {
    form: FormGroup;

    constructor(
        private fb: FormBuilder,
        private authService: AuthService,
        private router: Router
    ) {
        this.form = this.fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required],
        });
    }

    login() {
        const val = this.form.value;

        if (val.email && val.password) {
            //Commenting out for now as I've postponed getting auth working in lieu of fixing the rest of the site
            /*this.authService.login(val.email, val.password).subscribe(() => {
                console.log('User is logged in');
                this.router.navigateByUrl('/');
            });*/
        }
    }

    ngOnInit(): void {}
}
