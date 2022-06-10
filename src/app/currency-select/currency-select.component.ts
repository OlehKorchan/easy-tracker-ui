import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { CurrencyCodes } from '../models/currency-codes';
import { IUserMainCurrencyRequest } from '../models/user-main-currency-request';
import { UserService } from '../user-statistics/user.service';

@Component({
  selector: 'app-currency-select',
  templateUrl: './currency-select.component.html',
  styleUrls: ['./currency-select.component.css'],
})
export class CurrencySelectComponent implements OnInit, OnDestroy {
  currencies: string[];
  userCurrency!: CurrencyCodes;
  userCurrency$!: Observable<CurrencyCodes>;
  newCurrency: IUserMainCurrencyRequest = {
    newMainCurrencyCode: CurrencyCodes.USD,
    recalculate: false,
  };
  userCurrencySub!: Subscription;

  constructor(private userService: UserService) {
    this.currencies = userService.getCurrenciesList();
  }

  getCurrencyCodeFromName(name: string) {
    return this.userService.convertStringCurrencyToCurrencyCode(name);
  }

  changeCurrency() {
    this.userService
      .setUserMainCurrency(
        (this.newCurrency = {
          newMainCurrencyCode: this.userCurrency,
          recalculate: false,
        })
      )
      .subscribe({
        next: (data) => {
          this.userCurrencySub = this.userService.getUserMainCurrency();
        },
        error: (error) => console.error(JSON.stringify(error)),
      });
  }

  ngOnInit(): void {
    this.userCurrency$ = this.userService.userMainCurrency$;
    this.userCurrencySub = this.userService.getUserMainCurrency();
    this.userCurrency$.subscribe({
      next: (data) => (this.userCurrency = data),
    });
  }

  ngOnDestroy(): void {
    this.userCurrencySub.unsubscribe();
  }
}
