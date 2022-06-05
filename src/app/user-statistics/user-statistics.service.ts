import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { ConfigurationService } from '../shared/configuration.service';
import { IUserResponse } from './user-response';
import { UserStatisticsComponent } from './user-statistics.component';

@Injectable({
  providedIn: 'root',
})
export class UserStatisticsService {
  constructor(
    private httpClient: HttpClient,
    private config: ConfigurationService
  ) {}

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
