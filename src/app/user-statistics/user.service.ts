import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, throwError } from 'rxjs';
import { ConfigurationService } from '../shared/configuration.service';
import { CurrencyCodes } from '../models/currency-codes';
import { IUserMainCurrencyResponse } from '../models/user-main-currency-response';
import { IUserAmountResponse } from '../models/user-amount-response';
import { IUserStatisticsResponse } from '../models/user-statistics-response';
import { IUserMainCurrencyRequest } from '../models/user-main-currency-request';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private httpClient: HttpClient,
    private config: ConfigurationService
  ) {}

  exchangeMoney(
    fromCurrency: string,
    toCurrency: string,
    amount: number
  ): number {
    if (
      fromCurrency === CurrencyCodes[CurrencyCodes.UAH] &&
      toCurrency === CurrencyCodes[CurrencyCodes.USD]
    ) {
      return amount / 35;
    }

    return amount * 35;
  }

  getUserStatistics() {
    return this.httpClient
      .get<IUserStatisticsResponse>(
        this.config.getApiUrl() + this.config.getUserStatisticsUrl()
      )
      .pipe(
        tap((data) =>
          console.log('User statistics obtained: ', JSON.stringify(data))
        )
      );
  }

  getUserAmount(): Observable<IUserAmountResponse> {
    return this.httpClient
      .get<IUserAmountResponse>(
        this.config.getApiUrl() + this.config.getUserAmountUrl()
      )
      .pipe(
        tap((result) => {
          console.log('obtained user amount: ' + JSON.stringify(result));
        })
      );
  }

  getUserMainCurrency() {
    return this.httpClient
      .get<IUserMainCurrencyResponse>(
        this.config.getApiUrl() + this.config.getUserMainCurrencyUrl()
      )
      .pipe(
        tap((result) => {
          console.log('User main currency: ' + JSON.stringify(result));
        })
      );
  }

  setUserMainCurrency(currency: IUserMainCurrencyRequest) {
    return this.httpClient.put(
      this.config.getApiUrl() + this.config.getUserMainCurrencyUrl(),
      currency
    );
  }

  convertStringCurrencyToCurrencyCode(currency: string): CurrencyCodes {
    if (currency === CurrencyCodes[CurrencyCodes.UAH]) {
      return CurrencyCodes.UAH;
    }

    if (currency === CurrencyCodes[CurrencyCodes.USD]) {
      return CurrencyCodes.USD;
    }

    if (currency === CurrencyCodes[CurrencyCodes.EUR]) {
      return CurrencyCodes.EUR;
    }

    if (currency === CurrencyCodes[CurrencyCodes.GBP]) {
      return CurrencyCodes.GBP;
    }

    return CurrencyCodes.USD;
  }

  getCurrenciesList(): string[] {
    var result: string[] = [];

    for (var key in CurrencyCodes) {
      var isValueProperty = parseInt(key, 10) >= 0;
      if (isValueProperty) {
        result.push(CurrencyCodes[key]);
      }
    }

    return result;
  }
}
