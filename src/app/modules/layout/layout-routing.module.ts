import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'category',
    loadChildren: () => import('../category/category.module').then((imp) => imp.CategoryModule),
  },
  {
    path: 'error',
    loadChildren: () => import('../error/error.module').then((imp) => imp.ErrorModule),
  },
  {
    path: 'prediction',
    loadChildren: () =>
      import('../currency-prediction/currency-prediction.module').then(
        (imp) => imp.CurrencyPredictionModule,
      ),
  },
  {
    path: '',
    redirectTo: 'welcome/index',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'error/not-found',
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
