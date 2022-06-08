import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { IncomeFormComponent } from '../income/income-form/income-form.component';
import { CurrencyCodes } from '../models/currency-codes';
import { IUserStatisticsResponse } from '../models/user-statistics-response';
import { UserService } from './user.service';

@Component({
  templateUrl: './user-statistics.component.html',
  styleUrls: ['./user-statistics.component.css'],
})
export class UserStatisticsComponent implements OnInit, OnDestroy {
  user: IUserStatisticsResponse = {
    amount: 0,
    errors: [],
    mainCurrency: CurrencyCodes.USD,
    salaries: [],
    spendingCategories: [],
  };
  showBalanceInCurrency!: CurrencyCodes;
  isError = false;
  errors: string[] = [];
  allCurrencies: string[];

  userSubscription!: Subscription;
  userAmountSubscription!: Subscription;
  userMainCurrencySubscription!: Subscription;

  constructor(private userService: UserService, public dialog: MatDialog) {
    this.allCurrencies = userService.getCurrenciesList();
  }

  openIncomeForm() {
    const dialogItem = this.dialog.open(IncomeFormComponent, {
      width: '240px',
    });

    dialogItem.afterClosed().subscribe((data) => {
      if (data === 'ok') {
        this.loadUserStatistics();
      }
    });
  }

  incomeAdded() {
    this.loadUserAmount();
  }

  currencyChanged() {
    this.loadUserMainCurrency();
  }

  convertCurrencyCodeToString(code: CurrencyCodes): string {
    return CurrencyCodes[code];
  }

  loadUserStatistics() {
    this.clearError();

    this.userSubscription = this.userService.getUserStatistics().subscribe({
      next: (result) => {
        this.user = result;
        this.showBalanceInCurrency = this.user.mainCurrency;
      },
      error: (error) => this.setError(error),
    });
  }

  loadUserAmount() {
    this.clearError();

    this.userAmountSubscription = this.userService.getUserAmount().subscribe({
      next: (result) => {
        this.user.amount = result.amount;
      },
      error: (error) => this.setError(error),
    });
  }

  loadUserMainCurrency() {
    this.clearError();

    this.userMainCurrencySubscription = this.userService
      .getUserMainCurrency()
      .subscribe({
        next: (result) => {
          this.user.mainCurrency = result.mainCurrency;
          this.showBalanceInCurrency = result.mainCurrency;
        },
        error: (error) => this.setError(error),
      });
  }

  changeCurrency() {}

  clearError() {
    this.errors = [];
    this.isError = false;
  }

  setError(error: any) {
    this.isError = true;
    this.errors.push(JSON.stringify(error));
  }

  ngOnInit(): void {
    this.loadUserStatistics();
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
    this.userAmountSubscription?.unsubscribe();
    this.userMainCurrencySubscription?.unsubscribe();
  }
}
