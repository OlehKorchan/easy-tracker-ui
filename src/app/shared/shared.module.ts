import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxCurrencyModule } from 'ngx-currency';

@NgModule({
  declarations: [],
  imports: [],
  exports: [CommonModule, FormsModule, ReactiveFormsModule, NgxChartsModule, NgxCurrencyModule],
})
export class SharedModule {}
