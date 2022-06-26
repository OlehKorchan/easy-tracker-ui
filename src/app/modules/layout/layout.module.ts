import { ErrorModule } from './../error/error.module';
import { CategoryModule } from './../category/category.module';
import { UserStatisticsModule } from './../user-statistics/user-statistics.module';
import { IncomeModule } from './../income/income.module';
import { WelcomeModule } from './../welcome/welcome.module';
import { NgModule } from '@angular/core';

import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { CurrencySelectComponent } from './components/currency-select/currency-select.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LayoutRoutingModule } from './layout-routing.module';
import { MaterialModule } from 'src/app/shared/material.module';
import { AuthenticationModule } from '../authentication/authentication.module';
import { CurrencySelectAlertComponent } from './components/currency-select-alert/currency-select-alert.component';

@NgModule({
  declarations: [
    SidenavComponent,
    ToolbarComponent,
    CurrencySelectComponent,
    CurrencySelectAlertComponent,
  ],
  imports: [
    MaterialModule,
    SharedModule,
    AuthenticationModule,
    IncomeModule,
    WelcomeModule,
    ErrorModule,
    CategoryModule,
    UserStatisticsModule,
    LayoutRoutingModule,
  ],
  exports: [SidenavComponent],
})
export class LayoutModule {}
