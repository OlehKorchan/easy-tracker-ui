import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CategoriesStatisticsComponent } from './categories-statistics/categories-statistics.component';

@NgModule({
  declarations: [CategoriesStatisticsComponent],
  imports: [SharedModule],
  exports: [CategoriesStatisticsComponent],
})
export class CategoryModule {}
