import { ISpendingCategoryResponse } from './../category/models/spending-category-response';
import { Component, OnDestroy, OnInit, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, Subscription } from 'rxjs';
import { CurrencyCodes } from 'src/app/shared/models/currency-codes';
import { IncomeFormComponent } from '../income/components/income-form/income-form.component';
import { SpendingFormComponent } from '../spending/components/spending-form/spending-form.component';
import { IUserStatisticsResponse } from './models/user-statistics-response';
import { UserService } from './services/user.service';
import { ProgressBarMode } from '@angular/material/progress-bar';

@Component({
  templateUrl: './user-statistics.component.html',
  styleUrls: ['./user-statistics.component.css'],
})
export class UserStatisticsComponent implements OnInit, OnDestroy {
  public user$!: Observable<IUserStatisticsResponse>;
  public user!: IUserStatisticsResponse;

  public categories$: EventEmitter<ISpendingCategoryResponse[]> = new EventEmitter<
    ISpendingCategoryResponse[]
  >();

  // public progress: ProgressBarMode = 'indeterminate';

  public showBalanceInCurrency!: string;
  public allCurrencies: string[];

  public userSubscription!: Subscription;

  public constructor(private userService: UserService, public dialog: MatDialog) {
    this.allCurrencies = userService.getCurrenciesList();
  }

  public openSpendingForm() {
    const dialogItem = this.dialog.open(SpendingFormComponent, {
      width: '300px',
    });

    dialogItem.afterClosed().subscribe((data) => {
      if (data === 'ok') {
        this.userService.getUserStatistics();
      }
    });
  }

  public openIncomeForm() {
    const dialogItem = this.dialog.open(IncomeFormComponent, {
      width: '300px',
    });

    dialogItem.afterClosed().subscribe((data) => {
      if (data === 'ok') {
        this.userService.getUserStatistics();
      }
    });
  }

  public get categories(): Observable<ISpendingCategoryResponse[]> {
    return this.categories$.asObservable();
  }

  public convertCurrencyCodeToString(code: CurrencyCodes): string {
    return CurrencyCodes[code];
  }

  public changeCurrency() {
    this.user.mainCurrency = this.userService.convertStringCurrencyToCurrencyCode(
      this.showBalanceInCurrency,
    );
  }

  public ngOnInit(): void {
    this.user$ = this.userService.userStatistics$;
    this.userSubscription = this.userService.getUserStatistics();
    this.user$.subscribe({
      next: (data) => {
        this.user = data;
        this.categories$.emit(data.spendingCategories);
      },
    });
  }

  public ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }
}
