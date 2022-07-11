import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { ConfigurationService } from 'src/app/shared/services/configuration.service';
import { ISpendingRequest } from '../models/spending-request';
import { ISpendingResponse } from '../models/spending-response';

@Injectable({
  providedIn: 'root',
})
export class SpendingService {
  public constructor(private _httpClient: HttpClient, private _config: ConfigurationService) {}

  public getAllUserSpendings(): Observable<ISpendingResponse[]> {
    return this._httpClient.get<ISpendingResponse[]>(this._config.getSpendingsUrl());
  }

  public create(spending: ISpendingRequest): Observable<ISpendingResponse> {
    return this._httpClient
      .post<ISpendingResponse>(this._config.getSpendingsUrl(), spending)
      .pipe(tap((data) => console.log(JSON.stringify(data))));
  }
}
