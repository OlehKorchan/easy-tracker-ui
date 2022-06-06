import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IncomeService } from '../income.service';
import { IIncomeListResponse } from '../../models/income-list-response';

@Component({
  selector: 'app-income-history',
  templateUrl: './income-history.component.html',
  styleUrls: ['./income-history.component.css'],
})
export class IncomeHistoryComponent implements OnInit, OnDestroy {
  incomeListResponse: IIncomeListResponse = {
    userSalaries: [],
    errors: [],
  };
  incomeListResponseSub$!: Subscription;
  displayedColumns: string[] = ['date', 'amount', 'comment', 'action'];

  constructor(private incomeService: IncomeService, private router: Router) {}

  deleteIncome(id: string) {
    this.incomeService.removeIncome(id).subscribe({
      next: (response) => {
        this.loadIncomeList();
      },
      error: (error) => console.log(error?.error?.errorMessage),
    });
  }

  ngOnInit(): void {
    this.loadIncomeList();
  }

  loadIncomeList() {
    this.incomeListResponseSub$ = this.incomeService
      .getUserIncomeList()
      .subscribe({
        next: (data) => (this.incomeListResponse = data),
        error: (error) => console.log(error?.error?.errorMessage),
      });
  }

  ngOnDestroy(): void {
    this.incomeListResponseSub$.unsubscribe();
  }
}
