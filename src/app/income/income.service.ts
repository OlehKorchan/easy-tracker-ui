import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, catchError, throwError, BehaviorSubject, Observable } from 'rxjs';
import { ConfigurationService } from '../shared/configuration.service';
import { IIncomeResponse } from '../models/income-response';
import { IIncomeCreateRequest } from '../models/income-create.request';
import { IIncomeListResponse } from '../models/income-list-response';

@Injectable({
  providedIn: 'root',
})
export class IncomeService {
  private _incomeList$!: BehaviorSubject<IIncomeListResponse>;

  constructor(
    private httpClient: HttpClient,
    private config: ConfigurationService
  ) {
    this._incomeList$ = new BehaviorSubject<IIncomeListResponse>({
      errors: [],
      userSalaries: [],
    });
  }

  get incomeList$(): Observable<IIncomeListResponse> {
    return this._incomeList$.asObservable();
  }

  addIncome(incomeCreateRequest: IIncomeCreateRequest) {
    return this.httpClient
      .post<IIncomeResponse>(
        this.config.getApiUrl() + this.config.getSalariesUrl(),
        incomeCreateRequest
      )
      .pipe(
        tap((data) => console.log('Income created: ' + JSON.stringify(data))),
        catchError((error) => {
          console.log(error?.error?.errorMessage);
          return throwError(() => error);
        })
      );
  }

  getUserIncomeList() {
    return this.httpClient
      .get<IIncomeListResponse>(
        this.config.getApiUrl() + this.config.getSalariesUrl()
      )
      .pipe(
        tap((data) =>
          console.log('Obtained income list: ' + JSON.stringify(data))
        )
      )
      .subscribe({
        next: (data) => {
          this._incomeList$.next(data);
        },
        error: (error) => console.error(JSON.stringify(error)),
      });
  }

  removeIncome(id: string) {
    return this.httpClient
      .delete(this.config.getApiUrl() + this.config.getSalariesUrl() + '/' + id)
      .pipe(
        tap((response) =>
          console.log(`Income with id: ${id} deletion response: ${response}`)
        )
      );
  }
}
