import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthenticationGuard } from '../authentication/authentication.guard';
import { SharedModule } from '../shared/shared.module';
import { CategoriesStatisticsComponent } from './categories-statistics/categories-statistics.component';

@NgModule({
  declarations: [CategoriesStatisticsComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: 'spending-categories',
        canActivate: [AuthenticationGuard],
        component: CategoriesStatisticsComponent,
      },
    ]),
  ],
  exports: [CategoriesStatisticsComponent],
})
export class CategoryModule {}
