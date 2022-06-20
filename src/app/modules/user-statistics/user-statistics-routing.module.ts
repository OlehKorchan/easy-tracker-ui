import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from '../authentication/guards/authentication.guard';
import { UserStatisticsComponent } from './user-statistics.component';

const routes: Routes = [
	{
		path: 'user/statistics',
		canActivate: [AuthenticationGuard],
		component: UserStatisticsComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class UserStatisticsRoutingModule {}
