import { CategoryRoutingModule } from './../category/category-routing.module';
import { NgModule } from '@angular/core';

import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { CurrencySelectComponent } from './components/currency-select/currency-select.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LayoutRoutingModule } from './layout-routing.module';
import { MaterialModule } from 'src/app/shared/material.module';
import { AuthenticationModule } from '../authentication/authentication.module';
import { WelcomeRoutingModule } from '../welcome/welcome-routing.module';
import { UserStatisticsRoutingModule } from '../user-statistics/user-statistics-routing.module';
import { IncomeRoutingModule } from '../income/income-routing.module';
import { ErrorRoutingModule } from '../error/error-routing.module';
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
		LayoutRoutingModule,
		AuthenticationModule,
		IncomeRoutingModule,
		WelcomeRoutingModule,
		ErrorRoutingModule,
		CategoryRoutingModule,
		UserStatisticsRoutingModule,
	],
	exports: [SidenavComponent],
})
export class LayoutModule {}
