import { NgModule } from '@angular/core';
import { SpendingRoutingModule } from './spending-routing.module';
import { SpendingFormComponent } from './components/spending-form/spending-form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/shared/material.module';

@NgModule({
	declarations: [SpendingFormComponent],
	imports: [SharedModule, SpendingRoutingModule, MaterialModule],
})
export class SpendingModule {}
