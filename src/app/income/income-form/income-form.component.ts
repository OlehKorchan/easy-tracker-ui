import { Component, OnDestroy, OnInit } from '@angular/core';
import { IIncomeResponse } from '../models/income-response';
import { IIncomeCreateRequest } from '../models/income-create.request';
import { MatDialogRef } from '@angular/material/dialog';
import { IncomeService } from '../income.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  templateUrl: './income-form.component.html',
  styleUrls: ['./income-form.component.css'],
})
export class IncomeFormComponent implements OnInit, OnDestroy {
  incomeCreateRequest: IIncomeCreateRequest = {
    amount: 0,
    comment: '',
  };
  incomeCreateResponse: IIncomeResponse = {
    id: '',
    amount: 0,
    comment: '',
    dateAdded: new Date(),
    errors: [],
  };
  incomeResponseSub$: Subscription | undefined;
  hasErrors: boolean = false;
  errorMessages: string[] = [];

  constructor(
    public dialogRef: MatDialogRef<IncomeFormComponent>,
    private incomeService: IncomeService,
    private router: Router
  ) {}

  onSubmit() {
    this.hasErrors = false;
    this.errorMessages = [];

    this.incomeResponseSub$ = this.incomeService
      .addIncome(this.incomeCreateRequest)
      .subscribe({
        next: (data) => {
          if (!this.incomeCreateResponse.errors.length) {
            this.dialogRef.close('ok');
          }
        },
        error: (error) => {
          this.hasErrors = true;
          this.errorMessages.push(error?.error?.errorMessage);

          console.log(error?.error?.errorMessage);
        },
      });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.incomeResponseSub$?.unsubscribe();
  }
}
