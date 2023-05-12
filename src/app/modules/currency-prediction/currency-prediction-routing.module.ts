import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from '../authentication/guards/authentication.guard';
import { CurrencyPredictionComponent } from './components/currency-prediction.component';

const routes: Routes = [
  {
    path: 'next-week',
    canActivate: [AuthenticationGuard],
    component: CurrencyPredictionComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CurrencyPredictionRoutingModule {}
