import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, Subscription } from 'rxjs';
import { CurrencyCodes } from 'src/app/shared/models/currency-codes';
import { IncomeFormComponent } from '../income/components/income-form/income-form.component';
import { SpendingFormComponent } from '../spending/components/spending-form/spending-form.component';
import { IUserStatisticsResponse } from './models/user-statistics-response';
import { UserService } from './services/user.service';

@Component({
  templateUrl: './user-statistics.component.html',
  styleUrls: ['./user-statistics.component.css'],
})
export class UserStatisticsComponent implements OnInit, OnDestroy {
  user$!: Observable<IUserStatisticsResponse>;
  user!: IUserStatisticsResponse;

  showBalanceInCurrency!: CurrencyCodes;
  allCurrencies: string[];

  userSubscription!: Subscription;

  constructor(private userService: UserService, public dialog: MatDialog) {
    this.allCurrencies = userService.getCurrenciesList();
  }

  openSpendingForm() {
    const dialogItem = this.dialog.open(SpendingFormComponent, {
      width: '300px',
    });

    dialogItem.afterClosed().subscribe((data) => {
      if (data === 'ok') {
        this.userService.getUserStatistics();
      }
    });
  }

  openIncomeForm() {
    const dialogItem = this.dialog.open(IncomeFormComponent, {
      width: '300px',
    });

    dialogItem.afterClosed().subscribe((data) => {
      if (data === 'ok') {
        this.userService.getUserStatistics();
      }
    });
  }

  convertCurrencyCodeToString(code: CurrencyCodes): string {
    return CurrencyCodes[code];
  }

  changeCurrency() {}

  ngOnInit(): void {
    this.user$ = this.userService.userStatistics$;
    this.userSubscription = this.userService.getUserStatistics();
    this.user$.subscribe({
      next: (data) => {
        this.user = data;
      },
    });
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }
}
