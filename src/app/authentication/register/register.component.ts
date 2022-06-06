import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthenticationService } from '../authentication.service';
import { IRegisterRequest } from './register-request';
import { IRegisterResponse } from './register-response';

@Component({
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnDestroy {
  registerRequest: IRegisterRequest = {
    userName: '',
    password: '',
    passwordConfirm: '',
  };
  registerResultSubscription!: Subscription;
  registerResponse: IRegisterResponse = {
    username: '',
    token: '',
    errors: [],
    expiresIn: 0,
  };
  hasErrors: boolean = false;
  errorMessages: string[] = [];

  constructor(
    private _authenticationService: AuthenticationService,
    private _router: Router
  ) {}

  onSubmit(): void {
    this.hasErrors = false;
    this.errorMessages = [];

    this.registerResultSubscription = this._authenticationService
      .register(this.registerRequest)
      .subscribe({
        next: (data) => {
          this.registerResponse = data;

          if (
            !this.registerResponse.errors?.length &&
            this.registerResponse.token &&
            this.registerResponse.username
          ) {
            console.log(
              `User with username ${this.registerResponse.username} logged in`
            );
            this._router.navigate(['']);
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

  validateConfirmPassword(
    passwordField: NgModel,
    confirmPasswordField: NgModel
  ) {
    if (passwordField.value !== confirmPasswordField.value) {
      confirmPasswordField.control.setErrors({ duplicate: true });
    }
  }

  ngOnDestroy(): void {
    if (this.registerResultSubscription) {
      this.registerResultSubscription.unsubscribe();
    }
  }
}
