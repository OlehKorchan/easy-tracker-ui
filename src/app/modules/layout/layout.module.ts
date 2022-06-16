import { NgModule } from '@angular/core';

import { SidenavComponent } from './sidenav/sidenav.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { CurrencySelectComponent } from './currency-select/currency-select.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LayoutRoutingModule } from './layout-routing.module';
import { MaterialModule } from 'src/app/shared/material.module';
import { AuthenticationModule } from '../authentication/authentication.module';
import { WelcomeRoutingModule } from '../welcome/welcome-routing.module';
import { UserStatisticsRoutingModule } from '../user-statistics/user-statistics-routing.module';
import { IncomeRoutingModule } from '../income/income-routing.module';
import { ErrorRoutingModule } from '../error/error-routing.module';

@NgModule({
  declarations: [SidenavComponent, ToolbarComponent, CurrencySelectComponent],
  imports: [
    MaterialModule,
    SharedModule,
    LayoutRoutingModule,
    AuthenticationModule,
    IncomeRoutingModule,
    WelcomeRoutingModule,
    ErrorRoutingModule,
    UserStatisticsRoutingModule,
  ],
  exports: [SidenavComponent],
})
export class LayoutModule {}
