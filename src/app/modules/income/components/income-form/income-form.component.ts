import { Component, OnDestroy, OnInit } from '@angular/core';
import { IIncomeCreateRequest } from '../../models/income-create.request';
import { MatDialogRef } from '@angular/material/dialog';
import { IncomeService } from '../../services/income.service';
import { Subscription } from 'rxjs';
import { CurrencyCodes } from 'src/app/shared/models/currency-codes';
import { IIncomeResponse } from '../../models/income-response';
import { UserService } from 'src/app/modules/user-statistics/services/user.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
	templateUrl: './income-form.component.html',
	styleUrls: ['./income-form.component.css'],
})
export class IncomeFormComponent implements OnInit, OnDestroy {
	private incomeResponseSub$: Subscription | undefined;

	public incomeForm!: FormGroup;
	public amountControl!: FormControl;
	public commentControl!: FormControl;
	public currencyControl!: FormControl;
	public incomeCreateResponse: IIncomeResponse = {
		id: '',
		amount: 0,
		comment: '',
		dateAdded: new Date(),
		errors: [],
		currency: CurrencyCodes.USD,
	};
	public currencies: string[];

	constructor(
    public dialogRef: MatDialogRef<IncomeFormComponent>,
    private incomeService: IncomeService,
    public userService: UserService
	) {
		this.currencies = userService.getCurrenciesList();
	}

	public onSubmit() {
		const incomeRequest: IIncomeCreateRequest = {
			amount: this.amountControl.value,
			comment: this.commentControl.value,
			currency: this.currencyControl.value,
		};

		this.incomeResponseSub$ = this.incomeService
			.addIncome(incomeRequest)
			.subscribe({
				next: (data) => {
					if (!data.errors.length) {
						this.dialogRef.close('ok');
					} else {
						this.incomeCreateResponse = data;
					}
				},
				error: () => this.dialogRef.close(),
			});
	}

	public ngOnInit(): void {
		this.amountControl = new FormControl(Number, [
			Validators.required,
			Validators.min(0.01),
			Validators.max(1000000000),
		]);
		this.commentControl = new FormControl('', [Validators.maxLength(300)]);
		this.currencyControl = new FormControl(CurrencyCodes.USD, [
			Validators.required,
		]);

		this.incomeForm = new FormGroup({
			amount: this.amountControl,
			comment: this.commentControl,
			currency: this.currencyControl,
		});
	}

	public ngOnDestroy(): void {
		this.incomeResponseSub$?.unsubscribe();
	}
}
