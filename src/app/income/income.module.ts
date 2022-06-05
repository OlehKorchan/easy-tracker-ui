import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IncomeHistoryComponent } from './income-history/income-history.component';
import { AuthenticationGuard } from '../authentication/authentication.guard';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [IncomeHistoryComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: 'income-history',
        canActivate: [AuthenticationGuard],
        component: IncomeHistoryComponent,
      },
    ]),
  ],
})
export class IncomeModule {}
