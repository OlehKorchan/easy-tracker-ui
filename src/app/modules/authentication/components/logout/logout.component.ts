import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
})
export class LogoutComponent {
  public constructor(
    private _authenticationService: AuthenticationService,
    private _router: Router,
  ) {}

  public logout(): void {
    this._authenticationService.logout().subscribe(() => this._router.navigate(['']));
  }
}
