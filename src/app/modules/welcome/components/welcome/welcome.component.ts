import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/modules/authentication/services/authentication.service';

@Component({
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  public constructor(private authService: AuthenticationService, private router: Router) {}

  public ngOnInit(): void {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/user/statistics']);
    }
  }
}
