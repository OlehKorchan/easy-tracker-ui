import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { IncomeService } from '../../services/income.service';
import { IIncomeListResponse } from '../../models/income-list-response';
import { CurrencyCodes } from 'src/app/shared/models/currency-codes';

@Component({
	templateUrl: './income-history.component.html',
	styleUrls: ['./income-history.component.css'],
})
export class IncomeHistoryComponent implements OnInit, OnDestroy {
	incomeListResponse$!: Observable<IIncomeListResponse>;
	incomeListResponse!: IIncomeListResponse;
	incomeListResponseSub!: Subscription;
	displayedColumns: string[] = ['date', 'amount', 'comment', 'action'];

	constructor(private incomeService: IncomeService, private router: Router) {}

	toStringCurrencyCode(code: CurrencyCodes): string {
		return CurrencyCodes[code];
	}

	deleteIncome(id: string) {
		this.incomeService.removeIncome(id).subscribe({
			next: () => {
				this.incomeListResponseSub = this.incomeService.getUserIncomeList();
			},
			error: error => console.error(error.error?.errorMessage),
		});
	}

	ngOnInit(): void {
		this.incomeListResponse$ = this.incomeService.incomeList$;
		this.incomeListResponseSub = this.incomeService.getUserIncomeList();
		this.incomeListResponse$.subscribe({
			next: data => {
				this.incomeListResponse = data;
			},
		});
	}

	ngOnDestroy(): void {
		this.incomeListResponseSub.unsubscribe();
	}
}
