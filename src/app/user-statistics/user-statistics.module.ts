import { NgModule } from '@angular/core';
import { UserStatisticsComponent } from './user-statistics.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { AuthenticationGuard } from '../authentication/authentication.guard';

@NgModule({
  declarations: [UserStatisticsComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: 'statistics',
        canActivate: [AuthenticationGuard],
        component: UserStatisticsComponent,
      },
    ]),
  ],
  exports: [UserStatisticsComponent],
})
export class UserStatisticsModule {}
