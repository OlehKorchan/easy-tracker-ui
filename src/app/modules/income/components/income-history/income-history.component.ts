import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { IncomeService } from '../../services/income.service';
import { IIncomeListResponse } from '../../models/income-list-response';
import { CurrencyCodes } from 'src/app/shared/models/currency-codes';

@Component({
  templateUrl: './income-history.component.html',
  styleUrls: ['./income-history.component.css'],
})
export class IncomeHistoryComponent implements OnInit, OnDestroy {
  public incomeListResponse$!: Observable<IIncomeListResponse>;
  public incomeListResponse!: IIncomeListResponse;
  private incomeListResponseSub!: Subscription;
  public displayedColumns: string[] = ['date', 'amount', 'comment', 'action'];

  public constructor(private incomeService: IncomeService) {}

  public toStringCurrencyCode(code: CurrencyCodes): string {
    return CurrencyCodes[code];
  }

  public deleteIncome(id: string) {
    this.incomeService.removeIncome(id).subscribe({
      next: () => {
        this.incomeListResponseSub = this.incomeService.getUserIncomeList();
      },
      error: (error) => console.error(error.error?.errorMessage),
    });
  }

  public ngOnInit(): void {
    this.incomeListResponse$ = this.incomeService.incomeList$;
    this.incomeListResponseSub = this.incomeService.getUserIncomeList();
    this.incomeListResponse$.subscribe({
      next: (data) => {
        this.incomeListResponse = data;
      },
    });
  }

  public ngOnDestroy(): void {
    this.incomeListResponseSub.unsubscribe();
  }
}
