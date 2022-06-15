import { NgModule } from '@angular/core';

import { SidenavComponent } from './sidenav/sidenav.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { CurrencySelectComponent } from './currency-select/currency-select.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LayoutRoutingModule } from './layout-routing.module';
import { AuthenticationModule } from '../authentication/authentication.module';
import { WelcomeModule } from '../welcome/welcome.module';
import { ErrorModule } from '../error/error.module';
import { UserStatisticsModule } from '../user-statistics/user-statistics.module';
import { CategoryModule } from '../category/category.module';
import { IncomeModule } from '../income/income.module';

@NgModule({
  declarations: [SidenavComponent, ToolbarComponent, CurrencySelectComponent],
  imports: [
    UserStatisticsModule,
    CategoryModule,
    UserStatisticsModule,
    IncomeModule,
    ErrorModule,
    WelcomeModule,
    AuthenticationModule,
    SharedModule,
    AuthenticationModule,
    LayoutRoutingModule,
  ],
  exports: [SidenavComponent],
})
export class LayoutModule {}
