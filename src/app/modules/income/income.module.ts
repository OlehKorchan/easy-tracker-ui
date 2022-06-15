import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { IncomeFormComponent } from './components/income-form/income-form.component';
import { IncomeHistoryComponent } from './components/income-history/income-history.component';
import { IncomeRoutingModule } from './income-routing.module';

@NgModule({
  declarations: [IncomeHistoryComponent, IncomeFormComponent],
  imports: [SharedModule, IncomeRoutingModule],
  exports: [IncomeFormComponent, IncomeHistoryComponent],
})
export class IncomeModule {}
