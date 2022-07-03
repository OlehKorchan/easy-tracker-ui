import { ISpendingCategoryResponse } from '../../models/spending-category-response';
import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {UserService} from "../../../user-statistics/services/user.service";
import {CurrencyCodes} from "../../../../shared/models/currency-codes";

@Component({
  selector: 'app-spendings-chart',
  templateUrl: './spendings-chart.component.html',
  styleUrls: ['./spendings-chart.component.css'],
})
export class SpendingsChartComponent implements OnInit, OnDestroy {
  @Input()
  public categories!: Observable<ISpendingCategoryResponse[]>;

  public view: [number, number] = [window.innerWidth, 320];

  public doughnutChartData!: any;

  public currency$!: Observable<CurrencyCodes>;
  public currencySubscription$!: Subscription;
  public label!: string;

  public constructor(private userService: UserService) {}

  public onResize(width: any) {
    const defaultHeight = 320;
    this.view = [width, defaultHeight];
  }

  public ngOnInit(): void {
    this.currency$ = this.userService.userMainCurrency$;
    this.currencySubscription$ = this.currency$.subscribe({
      next: result => this.label = this.userService.convertCurrencyCodeToString(result),
    });
    this.userService.getUserMainCurrency();

    this.categories.subscribe({
      next: (data) => {
        this.doughnutChartData = data.map((c) => ({
          name: c.categoryName,
          value: c.spendAmount,
        }));
      },
    });
  }

  public ngOnDestroy() {
    this.currencySubscription$?.unsubscribe();
  }
}
