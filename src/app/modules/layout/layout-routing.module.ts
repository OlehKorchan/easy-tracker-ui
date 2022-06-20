import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: 'user',
		loadChildren: () =>
			import('../user-statistics/user-statistics.module').then(
				(imp) => imp.UserStatisticsModule
			),
	},
	{
		path: 'category',
		loadChildren: () =>
			import('../category/category.module').then((imp) => imp.CategoryModule),
	},
	{
		path: 'error',
		loadChildren: () =>
			import('../error/error.module').then((imp) => imp.ErrorModule),
	},
	{
		path: 'income',
		loadChildren: () =>
			import('../income/income.module').then((imp) => imp.IncomeModule),
	},
	{
		path: 'welcome',
		loadChildren: () =>
			import('../welcome/welcome.module').then((imp) => imp.WelcomeModule),
	},
	{
		path: 'spending',
		loadChildren: () =>
			import('../spending/spending.module').then((imp) => imp.SpendingModule),
	},
	{
		path: '',
		redirectTo: 'welcome/index',
		pathMatch: 'full',
	},
];

@NgModule({
	declarations: [],
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class LayoutRoutingModule {}
