import { MatDialog } from '@angular/material/dialog';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { CurrencyCodes } from 'src/app/shared/models/currency-codes';
import { IUserMainCurrencyRequest } from '../../../user-statistics/models/user-main-currency-request';
import { UserService } from '../../../user-statistics/services/user.service';
import { CurrencySelectAlertComponent } from '../currency-select-alert/currency-select-alert.component';

@Component({
	selector: 'app-currency-select',
	templateUrl: './currency-select.component.html',
	styleUrls: ['./currency-select.component.css'],
})
export class CurrencySelectComponent implements OnInit, OnDestroy {
	currencies: string[];
	userCurrency!: CurrencyCodes;
	userCurrency$!: Observable<CurrencyCodes>;
	userCurrencySub!: Subscription;

	constructor(private userService: UserService, private dialog: MatDialog) {
		this.currencies = userService.getCurrenciesList();
	}

	getCurrencyCodeFromName(name: string) {
		return this.userService.convertStringCurrencyToCurrencyCode(name);
	}

	changeCurrency() {
		const dialogItem = this.dialog.open(CurrencySelectAlertComponent, {
			width: '200px',
		});

		dialogItem.afterClosed().subscribe({
			next: response => {
				if (response === true) {
					const currencyRequest: IUserMainCurrencyRequest = {
						newMainCurrencyCode: this.userCurrency,
					};

					this.userService.setUserMainCurrency(currencyRequest).subscribe({
						next: () => {
							this.userCurrencySub = this.userService.getUserMainCurrency();
							this.userService.getUserAmount();
						},
						error: error => console.error(JSON.stringify(error)),
					});
				} else {
					this.userCurrency$.subscribe({
						next: data => (this.userCurrency = data),
					});
				}
			},
		});
	}

	ngOnInit(): void {
		this.userCurrency$ = this.userService.userMainCurrency$;
		this.userCurrencySub = this.userService.getUserMainCurrency();
		this.userCurrency$.subscribe({
			next: data => (this.userCurrency = data),
		});
	}

	ngOnDestroy(): void {
		this.userCurrencySub.unsubscribe();
	}
}
