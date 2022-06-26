import { CategoryModule } from './../category/category.module';
import { NgModule } from '@angular/core';
import { UserStatisticsComponent } from './user-statistics.component';
import { SpendingModule } from '../spending/spending.module';
import { IncomeModule } from '../income/income.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserStatisticsRoutingModule } from './user-statistics-routing.module';
import { MaterialModule } from 'src/app/shared/material.module';

@NgModule({
  declarations: [UserStatisticsComponent],
  imports: [
    MaterialModule,
    SharedModule,
    SpendingModule,
    IncomeModule,
    UserStatisticsRoutingModule,
    CategoryModule,
  ],
})
export class UserStatisticsModule {}
