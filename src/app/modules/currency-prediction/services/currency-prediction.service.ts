import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigurationService } from 'src/app/shared/services/configuration.service';
import { Observable } from 'rxjs';
import { ICurrencyPredictionResponse } from '../models/currency-prediction-response';

@Injectable({
  providedIn: 'root',
})
export class CurrencyPredictionService {
  public constructor(private _httpClient: HttpClient, private config: ConfigurationService) {}

  public getNextWeekPrediction(): Observable<ICurrencyPredictionResponse[]> {
    return this._httpClient.get<ICurrencyPredictionResponse[]>(
      this.config.getPredictionsUrl() + '/' + 'get-next-week-prediction',
    );
  }
}
