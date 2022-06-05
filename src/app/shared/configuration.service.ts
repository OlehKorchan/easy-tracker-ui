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
    return 'account/login';
  }

  getRegisterUrl(): string {
    return 'account/register';
  }

  getLogoutUrl(): string {
    return 'account/logout';
  }

  getUserAmountUrl(): string {
    return 'user/amount';
  }

  getSalariesUrl(): string {
    return 'salaries';
  }

  getSpendingCategoriesUrl(): string {
    return 'spending-categories';
  }

  getMainSpendingCategoriesUrl(): string {
    return 'main-spending-categories';
  }

  getSpendingsUrl(): string {
    return 'spendings';
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
