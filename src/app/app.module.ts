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
import { NgxSpinnerModule } from 'ngx-spinner';
import { SharedModule } from './shared/shared.module';
import { CategoryModule } from './category/category.module';
import { UserStatisticsModule } from './user-statistics/user-statistics.module';
import { IncomeModule } from './income/income.module';
import { CurrencySelectComponent } from './currency-select/currency-select.component';
import { SpendingFormComponent } from './spending-form/spending-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    ToolbarComponent,
    WelcomeComponent,
    CurrencySelectComponent,
    SpendingFormComponent,
  ],
  imports: [
    CategoryModule,
    SharedModule,
    BrowserModule,
    HttpClientModule,
    UserStatisticsModule,
    IncomeModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent, pathMatch: 'full' },
      {
        path: '',
        redirectTo: 'welcome',
        pathMatch: 'full',
      },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' },
    ]),
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
})
export class AppModule {}
