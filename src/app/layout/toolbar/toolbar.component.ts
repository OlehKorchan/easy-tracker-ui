import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication/authentication.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent implements OnInit {
  @Output() toggleSidenav = new EventEmitter<void>();
  constructor(private _authenticationService: AuthenticationService) {}

  get isUserLoggedIn(): boolean {
    var state = this._authenticationService.isLoggedIn();

    return state;
  }

  get userName(): string {
    return this._authenticationService.getUserName();
  }

  ngOnInit(): void {}
}
