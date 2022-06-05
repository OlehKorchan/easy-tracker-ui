import { ILoginResponse } from './login-response';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { ILoginRequest } from './login-request';
import { NgModel } from '@angular/forms';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit, OnDestroy {
  loginRequest: ILoginRequest = {
    login: '',
    password: '',
    rememberMe: false,
  };
  loginResultSubscription!: Subscription;
  loginResponse: ILoginResponse = {
    username: '',
    token: '',
    errors: [],
    expiresIn: 0,
  };
  hasErrors: boolean = false;
  errorMessages: string[] = [];

  constructor(
    private _authenticationService: AuthenticationService,
    private router: Router
  ) {}

  onSubmit(): void {
    this.errorMessages = [];

    this.loginResultSubscription = this._authenticationService
      .login(this.loginRequest)
      .subscribe({
        next: (data) => {
          this.loginResponse = data;

          if (
            !this.loginResponse.errors?.length &&
            this.loginResponse.token &&
            this.loginResponse.username
          ) {
            console.log(
              `User with username ${this.loginResponse.username} logged in`
            );
            this.router.navigate(['']);
          }
        },
        error: (error) => this.handleHttpError(error),
      });
  }

  handleHttpError(error: any) {
    console.log(error?.error?.errorMessage);
    this.hasErrors = true;
    this.errorMessages.push(error?.error?.errorMessage);
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    if (this.loginResultSubscription) {
      this.loginResultSubscription.unsubscribe();
    }
  }
}
