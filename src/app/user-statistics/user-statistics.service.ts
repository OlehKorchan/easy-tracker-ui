import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { ConfigurationService } from '../shared/configuration.service';
import { IUserResponse } from '../models/user-response';
import { CurrencyCodes } from '../models/currency-codes';

@Injectable({
  providedIn: 'root',
})
export class UserStatisticsService {
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

  getUserAmount(): Observable<IUserResponse> {
    return this.httpClient
      .get<IUserResponse>(
        this.config.getApiUrl() + this.config.getUserAmountUrl()
      )
      .pipe(
        tap((result) => {
          console.log('obtained user amount: ' + result);
        })
      );
  }
}
