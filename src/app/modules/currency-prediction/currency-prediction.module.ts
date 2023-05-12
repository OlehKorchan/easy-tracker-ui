import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/shared/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CurrencyPredictionComponent } from './components/currency-prediction.component';
import { CurrencyPredictionRoutingModule } from './currency-prediction-routing.module';

@NgModule({
  declarations: [CurrencyPredictionComponent],
  imports: [SharedModule, CurrencyPredictionRoutingModule, MaterialModule],
  exports: [CurrencyPredictionComponent],
})
export class CurrencyPredictionModule {}
