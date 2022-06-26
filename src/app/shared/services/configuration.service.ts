import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ConfigurationService {
  public getApiUrl(): string {
    return environment.apiUrl;
  }

  public getLoginUrl(): string {
    return environment.apiUrl + 'account/login';
  }

  public getRegisterUrl(): string {
    return environment.apiUrl + 'account/register';
  }

  public getLogoutUrl(): string {
    return environment.apiUrl + 'account/logout';
  }

  public getUserAmountUrl(): string {
    return environment.apiUrl + 'user/amount';
  }

  public getUserMainCurrencyUrl(): string {
    return environment.apiUrl + 'user/main-currency';
  }

  public getUserStatisticsUrl(): string {
    return environment.apiUrl + 'user/statistics';
  }

  public getSalariesUrl(): string {
    return environment.apiUrl + 'salaries';
  }

  public getSpendingCategoriesUrl(): string {
    return environment.apiUrl + 'spending-categories';
  }

  public getMainSpendingCategoriesUrl(): string {
    return environment.apiUrl + 'main-spending-categories';
  }

  public getSpendingsUrl(): string {
    return environment.apiUrl + 'spendings';
  }

  public getUserTokenSessionKey(): string {
    return 'user_token';
  }

  public getUserNameSessionKey(): string {
    return 'username';
  }

  public getExpiresAtSessionKey(): string {
    return 'expires_at';
  }
}
