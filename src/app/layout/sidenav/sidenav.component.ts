import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { AuthenticationService } from 'src/app/authentication/authentication.service';

const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent implements OnInit {
  isScreenSmall: boolean = false;

  constructor(
    private breakPointObserver: BreakpointObserver,
    private authService: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.breakPointObserver
      .observe([`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`])
      .subscribe((state: BreakpointState) => {
        this.isScreenSmall = state.matches;
      });
  }

  get isUserLoggedIn() {
    return this.authService.isLoggedIn();
  }
}
