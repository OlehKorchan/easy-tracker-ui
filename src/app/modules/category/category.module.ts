import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CategoryRoutingModule } from './category-routing.module';
import { CategoriesStatisticsComponent } from './components/categories-statistics/categories-statistics.component';

@NgModule({
  declarations: [CategoriesStatisticsComponent],
  imports: [SharedModule, CategoryRoutingModule],
  exports: [CategoriesStatisticsComponent],
})
export class CategoryModule {}
