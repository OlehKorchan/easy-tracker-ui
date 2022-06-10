import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { ISpendingRequest } from '../models/spending-request';
import { ISpendingResponse } from '../models/spending-response';
import { ConfigurationService } from '../shared/configuration.service';

@Injectable({
  providedIn: 'root',
})
export class SpendingService {
  constructor(
    private _httpClient: HttpClient,
    private _config: ConfigurationService
  ) {}

  create(spending: ISpendingRequest) {
    return this._httpClient
      .post<ISpendingResponse>(
        this._config.getApiUrl() + this._config.getSpendingsUrl(),
        spending
      )
      .pipe(tap((data) => console.log(JSON.stringify(data))));
  }
}
