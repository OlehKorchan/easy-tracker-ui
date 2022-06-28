import { ISpendingCategoryResponse } from './../../models/spending-category-response';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-spendings-chart',
  templateUrl: './spendings-chart.component.html',
  styleUrls: ['./spendings-chart.component.css'],
})
export class SpendingsChartComponent implements OnInit {
  @Input()
  public categories!: Observable<ISpendingCategoryResponse[]>;

  public doughnutChartData!: any;

  public ngOnInit(): void {
    this.categories.subscribe({
      next: (data) => {
        this.doughnutChartData = data.map((c) => ({
          name: c.categoryName,
          value: c.spendAmount,
        }));
      },
    });
  }
}
