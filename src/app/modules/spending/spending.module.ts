import { NgModule } from '@angular/core';
import { SpendingRoutingModule } from './spending-routing.module';
import { SpendingFormComponent } from './components/spending-form/spending-form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/shared/material.module';
import { SpendingsComponent } from './components/spendings/spendings.component';

@NgModule({
  declarations: [SpendingFormComponent, SpendingsComponent],
  imports: [SharedModule, SpendingRoutingModule, MaterialModule],
})
export class SpendingModule {}
