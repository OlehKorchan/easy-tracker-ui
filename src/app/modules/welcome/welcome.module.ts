import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [WelcomeComponent],
  imports: [SharedModule, WelcomeRoutingModule],
})
export class WelcomeModule {}
