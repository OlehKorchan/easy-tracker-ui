import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/shared/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CategoryRoutingModule } from './category-routing.module';
import { CategoriesStatisticsComponent } from './components/categories-statistics/categories-statistics.component';

@NgModule({
	declarations: [CategoriesStatisticsComponent],
	imports: [SharedModule, CategoryRoutingModule, MaterialModule],
	exports: [CategoriesStatisticsComponent],
})
export class CategoryModule {}
