import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
})
export class LogoutComponent {
  constructor(
    private _authenticationService: AuthenticationService,
    private _router: Router
  ) {}

  logout(): void {
    this._authenticationService
      .logout()
      .subscribe((data) => this._router.navigate(['']));
  }
}