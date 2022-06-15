import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ConfigurationService {
  constructor() {}

  getApiUrl(): string {
    return environment.apiUrl;
  }

  getLoginUrl(): string {
    return environment.apiUrl + 'account/login';
  }

  getRegisterUrl(): string {
    return environment.apiUrl + 'account/register';
  }

  getLogoutUrl(): string {
    return environment.apiUrl + 'account/logout';
  }

  getUserAmountUrl(): string {
    return environment.apiUrl + 'user/amount';
  }

  getUserMainCurrencyUrl(): string {
    return environment.apiUrl + 'user/main-currency';
  }

  getUserStatisticsUrl(): string {
    return environment.apiUrl + 'user/statistics';
  }

  getSalariesUrl(): string {
    return environment.apiUrl + 'salaries';
  }

  getSpendingCategoriesUrl(): string {
    return environment.apiUrl + 'spending-categories';
  }

  getMainSpendingCategoriesUrl(): string {
    return environment.apiUrl + 'main-spending-categories';
  }

  getSpendingsUrl(): string {
    return environment.apiUrl + 'spendings';
  }

  getUserTokenSessionKey(): string {
    return 'user_token';
  }

  getUserNameSessionKey(): string {
    return 'username';
  }

  getExpiresAtSessionKey(): string {
    return 'expires_at';
  }
}
