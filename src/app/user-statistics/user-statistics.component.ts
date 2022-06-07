import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { IncomeFormComponent } from '../income/income-form/income-form.component';
import { CurrencyCodes } from '../models/currency-codes';
import { IUserResponse } from '../models/user-response';
import { UserStatisticsService } from './user-statistics.service';

@Component({
  templateUrl: './user-statistics.component.html',
  styleUrls: ['./user-statistics.component.css'],
})
export class UserStatisticsComponent implements OnInit, OnDestroy {
  currentCurrencyCode: string = CurrencyCodes[CurrencyCodes.USD];
  oldCurrencyCode: string = CurrencyCodes[CurrencyCodes.USD];
  user: IUserResponse = {
    amount: 0,
    errors: [],
  };
  isError = false;
  errors: string[] = [];

  userSubscription!: Subscription;

  constructor(
    private userService: UserStatisticsService,
    public dialog: MatDialog
  ) {}

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

  statisticsChanged() {
    this.loadUserStatistics();
  }

  loadUserStatistics() {
    this.userSubscription = this.userService.getUserAmount().subscribe({
      next: (result) => {
        this.user = result;
      },
      error: (error) => {
        this.isError = true;
        this.errors.push(error?.error?.errorMessage);
      },
    });
  }

  changeCurrency() {
    this.user.amount = this.userService.exchangeMoney(
      this.oldCurrencyCode,
      this.currentCurrencyCode,
      this.user.amount
    );
    this.oldCurrencyCode = this.currentCurrencyCode;
  }

  ngOnInit(): void {
    this.loadUserStatistics();
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }
}
