import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from '../authentication/guards/authentication.guard';
import { CategoriesStatisticsComponent } from './components/categories-statistics/categories-statistics.component';

const routes: Routes = [
  {
    path: 'spending-categories',
    canActivate: [AuthenticationGuard],
    component: CategoriesStatisticsComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryRoutingModule {}
