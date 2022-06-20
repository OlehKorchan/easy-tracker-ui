import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/shared/material.module';

@NgModule({
	declarations: [WelcomeComponent],
	imports: [SharedModule, MaterialModule, WelcomeRoutingModule],
})
export class WelcomeModule {}
