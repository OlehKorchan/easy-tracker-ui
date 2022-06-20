import { Component, Output, EventEmitter } from '@angular/core';
import { AuthenticationService } from '../../../authentication/services/authentication.service';

@Component({
	selector: 'app-toolbar',
	templateUrl: './toolbar.component.html',
	styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent {
	@Output() toggleSidenav = new EventEmitter<void>();
	constructor(private _authenticationService: AuthenticationService) {}

	get isUserLoggedIn(): boolean {
		const state = this._authenticationService.isLoggedIn();

		return state;
	}

	get userName(): string {
		return this._authenticationService.getUserName();
	}
}
