import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { IncomeFormComponent } from '../income/income-form/income-form.component';
import { IUserResponse } from './user-response';
import { UserStatisticsService } from './user-statistics.service';

@Component({
  templateUrl: './user-statistics.component.html',
  styleUrls: ['./user-statistics.component.css'],
})
export class UserStatisticsComponent implements OnInit, OnDestroy {
  user: IUserResponse = {
    amount: 0,
  };
  isError = false;
  errors: string[] = [];

  userSubscription!: Subscription;

  constructor(
    private userService: UserStatisticsService,
    public dialog: MatDialog
  ) {}

  openIncomeForm() {
    const dialogItem = this.dialog.open(IncomeFormComponent, {
      width: '240px',
    });

    dialogItem.afterClosed().subscribe(() => this.loadUserStatistics());
  }

  statisticsChanged() {
    this.loadUserStatistics();
  }

  loadUserStatistics() {
    this.userSubscription = this.userService.getUserAmount().subscribe({
      next: (result) => {
        this.user = result;
      },
      error: (error) => {
        this.isError = true;
        this.errors.push(error?.error?.errorMessage);
      },
    });
  }

  ngOnInit(): void {
    this.loadUserStatistics();
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }
}
