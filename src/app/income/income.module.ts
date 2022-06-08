import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthenticationGuard } from '../authentication/authentication.guard';
import { SharedModule } from '../shared/shared.module';
import { IncomeFormComponent } from './income-form/income-form.component';
import { IncomeHistoryComponent } from './income-history/income-history.component';

@NgModule({
  declarations: [IncomeHistoryComponent, IncomeFormComponent],
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
  exports: [IncomeFormComponent, IncomeHistoryComponent],
})
export class IncomeModule {}
