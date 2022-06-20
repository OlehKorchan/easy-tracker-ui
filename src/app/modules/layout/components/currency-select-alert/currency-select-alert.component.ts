import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
	selector: 'app-currency-select-alert',
	templateUrl: './currency-select-alert.component.html',
	styleUrls: ['./currency-select-alert.component.css'],
})
export class CurrencySelectAlertComponent {
	constructor(public dialogRef: MatDialogRef<CurrencySelectAlertComponent>) {}
}
