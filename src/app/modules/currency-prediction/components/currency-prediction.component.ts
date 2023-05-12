import { Component, OnInit } from '@angular/core';
import { CurrencyPredictionService } from '../services/currency-prediction.service';
import { ICurrencyPredictionResponse } from '../models/currency-prediction-response';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-currency-prediction',
  templateUrl: './currency-prediction.component.html',
  styleUrls: ['./currency-prediction.component.css'],
})
export class CurrencyPredictionComponent implements OnInit {
  public predictions: ICurrencyPredictionResponse[] = [];
  public predictionChartData!: any;
  public view: [number, number] = [720, 320];
  public showXAxis = true;
  public showYAxis = true;
  public gradient = false;
  public showLegend = true;
  public showXAxisLabel = true;
  public xAxisLabel = 'Date';
  public showYAxisLabel = true;
  public yAxisLabel = 'UAH in USD rate';

  public constructor(private _predictionService: CurrencyPredictionService) {}

  public ngOnInit(): void {
    this._predictionService.getNextWeekPrediction().subscribe({
      next: (response) => {
        this.predictions = response;
        this.predictionChartData = [
          {
            name: 'Next week prediction',
            series: this.predictions.map((c) => ({
              name: formatDate(new Date(c.date), 'yyyy-MM-dd', 'en-US'),
              value: c.prediction,
            })),
          },
          {
            name: 'Lower bound assumption',
            series: this.predictions.map((c) => ({
              name: formatDate(new Date(c.date), 'yyyy-MM-dd', 'en-US'),
              value: c.lowerBound,
            })),
          },
          {
            name: 'Upper bound assumption',
            series: this.predictions.map((c) => ({
              name: formatDate(new Date(c.date), 'yyyy-MM-dd', 'en-US'),
              value: c.upperBound,
            })),
          },
        ];
      },
      error: (error) => console.error(error?.error?.errorMessage),
    });
  }
}
