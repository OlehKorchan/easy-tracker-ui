import { Component, OnDestroy } from '@angular/core';
import { IIncomeResponse } from '../../models/income-response';
import { IIncomeCreateRequest } from '../../models/income-create.request';
import { MatDialogRef } from '@angular/material/dialog';
import { IncomeService } from '../income.service';
import { Subscription } from 'rxjs';
import { CurrencyCodes } from 'src/app/models/currency-codes';
import { UserService } from 'src/app/user-statistics/user.service';

@Component({
  templateUrl: './income-form.component.html',
  styleUrls: ['./income-form.component.css'],
})
export class IncomeFormComponent implements OnDestroy {
  incomeCreateRequest: IIncomeCreateRequest = {
    amount: 0,
    comment: '',
    currency: CurrencyCodes.USD,
  };
  incomeCreateResponse: IIncomeResponse = {
    id: '',
    amount: 0,
    comment: '',
    dateAdded: new Date(),
    errors: [],
    currency: CurrencyCodes.USD,
  };
  incomeResponseSub$: Subscription | undefined;
  currencies: string[];

  constructor(
    public dialogRef: MatDialogRef<IncomeFormComponent>,
    private incomeService: IncomeService,
    public userService: UserService
  ) {
    this.currencies = userService.getCurrenciesList();
  }

  onSubmit() {
    this.incomeResponseSub$ = this.incomeService
      .addIncome(this.incomeCreateRequest)
      .subscribe({
        next: (data) => {
          if (!data.errors.length) {
            this.dialogRef.close('ok');
          } else {
            this.incomeCreateResponse = data;
          }
        },
        error: (error) => {
          console.log(error?.error?.errorMessage);
        },
      });
  }

  ngOnDestroy(): void {
    this.incomeResponseSub$?.unsubscribe();
  }
}
