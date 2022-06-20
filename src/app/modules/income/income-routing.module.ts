import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from '../authentication/guards/authentication.guard';
import { IncomeHistoryComponent } from './components/income-history/income-history.component';

const routes: Routes = [
	{
		path: 'income/history',
		canActivate: [AuthenticationGuard],
		component: IncomeHistoryComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class IncomeRoutingModule {}
