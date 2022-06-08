import { NgModule } from '@angular/core';
import { UserStatisticsComponent } from './user-statistics.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { AuthenticationGuard } from '../authentication/authentication.guard';
import { CategoryModule } from '../category/category.module';

@NgModule({
  declarations: [UserStatisticsComponent],
  imports: [
    SharedModule,
    CategoryModule,
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
