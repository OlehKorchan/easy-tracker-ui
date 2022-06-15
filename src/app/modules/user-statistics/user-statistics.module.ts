import { NgModule } from '@angular/core';
import { UserStatisticsComponent } from './user-statistics.component';
import { SpendingModule } from '../spending/spending.module';
import { IncomeModule } from '../income/income.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserStatisticsRoutingModule } from './user-statistics-routing.module';

@NgModule({
  declarations: [UserStatisticsComponent],
  imports: [
    SharedModule,
    SpendingModule,
    IncomeModule,
    UserStatisticsRoutingModule,
  ],
})
export class UserStatisticsModule {}
