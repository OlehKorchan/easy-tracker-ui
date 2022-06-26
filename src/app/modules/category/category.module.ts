import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/shared/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CategoryRoutingModule } from './category-routing.module';
import { CategoriesStatisticsComponent } from './components/categories-statistics/categories-statistics.component';
import { SpendingsChartComponent } from './components/spendings-chart/spendings-chart.component';

@NgModule({
  declarations: [CategoriesStatisticsComponent, SpendingsChartComponent],
  imports: [SharedModule, CategoryRoutingModule, MaterialModule],
  exports: [CategoriesStatisticsComponent, SpendingsChartComponent],
})
export class CategoryModule {}
