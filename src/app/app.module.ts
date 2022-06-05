import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AuthenticationInterceptor } from './authentication/authentication.interceptor';
import { AuthenticationModule } from './authentication/authentication.module';
import { SidenavComponent } from './layout/sidenav/sidenav.component';
import { ToolbarComponent } from './layout/toolbar/toolbar.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { UserStatisticsComponent } from './user-statistics/user-statistics.component';
import { AuthenticationGuard } from './authentication/authentication.guard';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SharedModule } from './shared/shared.module';
import { IncomeFormComponent } from './income/income-form/income-form.component';
import { IncomeModule } from './income/income.module';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    ToolbarComponent,
    WelcomeComponent,
    UserStatisticsComponent,
    IncomeFormComponent,
  ],
  imports: [
    SharedModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'statistics',
        canActivate: [AuthenticationGuard],
        component: UserStatisticsComponent,
      },
      { path: 'welcome', component: WelcomeComponent, pathMatch: 'full' },
      {
        path: '',
        redirectTo: 'welcome',
        pathMatch: 'full',
      },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' },
    ]),
    IncomeModule,
    AuthenticationModule,
    NgxSpinnerModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthenticationInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
  entryComponents: [IncomeFormComponent],
})
export class AppModule {}
