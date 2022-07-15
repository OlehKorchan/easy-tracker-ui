import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpendingsComponent } from './components/spendings/spendings.component';
import { AuthenticationGuard } from '../authentication/guards/authentication.guard';

const routes: Routes = [
  { path: 'spending/all', component: SpendingsComponent, canActivate: [AuthenticationGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpendingRoutingModule {}
