import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpendingRoutingModule } from './spending-routing.module';
import { SpendingFormComponent } from './components/spending-form/spending-form.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [SpendingFormComponent],
  imports: [SharedModule, SpendingRoutingModule],
})
export class SpendingModule {}
