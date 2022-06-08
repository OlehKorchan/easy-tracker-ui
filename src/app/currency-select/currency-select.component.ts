import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CurrencyCodes } from '../models/currency-codes';
import { IUserMainCurrencyRequest } from '../models/user-main-currency-request';
import { UserService } from '../user-statistics/user.service';

@Component({
  selector: 'app-currency-select',
  templateUrl: './currency-select.component.html',
  styleUrls: ['./currency-select.component.css'],
})
export class CurrencySelectComponent implements OnInit {
  currencies: string[];
  userCurrency!: CurrencyCodes;
  newCurrency: IUserMainCurrencyRequest = {
    newMainCurrencyCode: CurrencyCodes.USD,
    recalculate: false,
  };
  userCurrencySub$!: Subscription;

  constructor(private userService: UserService, private router: Router) {
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
          this.loadMainCurrency();
          this.router.navigate(['']);
        },
        error: (error) => console.error(JSON.stringify(error)),
      });
  }

  loadMainCurrency() {
    this.userCurrencySub$ = this.userService.getUserMainCurrency().subscribe({
      next: (result) => {
        this.userCurrency = result.mainCurrency;
        this.newCurrency.newMainCurrencyCode = result.mainCurrency;
      },
      error: (error) => console.error(JSON.stringify(error)),
    });
  }

  ngOnInit(): void {
    this.loadMainCurrency();
  }
}
