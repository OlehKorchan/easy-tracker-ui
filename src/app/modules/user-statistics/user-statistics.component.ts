import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ISpendingCategoryResponse } from '../category/models/spending-category-response';
import { Component, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, Subscription } from 'rxjs';
import { IncomeFormComponent } from '../income/components/income-form/income-form.component';
import { SpendingFormComponent } from '../spending/components/spending-form/spending-form.component';
import { IUserStatisticsResponse } from './models/user-statistics-response';
import { UserService } from './services/user.service';
import { SpendingService } from '../spending/services/spending.service';

@Component({
  templateUrl: './user-statistics.component.html',
  styleUrls: ['./user-statistics.component.css'],
})
export class UserStatisticsComponent implements OnInit, OnDestroy {
  public isAmountEditMode: boolean = false;
  public amountForm!: FormGroup;
  public amountCtrl!: FormControl;
  public user!: IUserStatisticsResponse;
  public startDate!: Date;
  public endDate!: Date;

  public categories$: EventEmitter<ISpendingCategoryResponse[]> = new EventEmitter<
    ISpendingCategoryResponse[]
  >();

  public allCurrencies: string[];

  public userSubscription!: Subscription;

  public get categories(): Observable<ISpendingCategoryResponse[]> {
    return this.categories$.asObservable();
  }

  public ngOnInit(): void {
    this.userSubscription = this.userService.userStatistics$.subscribe({
      next: (data: IUserStatisticsResponse) => {
        this.user = data;
        this.categories$.emit(this.user.spendingCategories);

        const userAmountMaxValue = 1000000000;
        this.amountCtrl = new FormControl(this.user.amount, [
          Validators.required,
          Validators.min(-userAmountMaxValue),
          Validators.max(userAmountMaxValue),
        ]);
        this.amountForm = this.fb.group({
          amount: this.amountCtrl,
        });
      },
    });

    this.userService.getUserStatistics();
  }

  public constructor(
    private fb: FormBuilder,
    public userService: UserService,
    public spendingService: SpendingService,
    public dialog: MatDialog,
  ) {
    this.allCurrencies = userService.getCurrenciesList();
  }

  public toggleAmountEditMode() {
    this.amountCtrl.setValue(this.user.amount);
    this.isAmountEditMode = !this.isAmountEditMode;
  }

  public openSpendingForm() {
    const dialogItem = this.dialog.open(SpendingFormComponent, {
      width: '300px',
    });

    dialogItem.afterClosed().subscribe((data) => {
      if (data === 'ok') {
        this.userService.getUserStatistics();
      }
    });
  }

  public openIncomeForm() {
    const dialogItem = this.dialog.open(IncomeFormComponent, {
      width: '300px',
    });

    dialogItem.afterClosed().subscribe((data) => {
      if (data === 'ok') {
        this.userService.getUserStatistics();
      }
    });
  }

  public onSubmitAmountUpdate() {
    if (this.amountForm.valid) {
      this.userService.putUserAmount(this.amountCtrl.value).subscribe({
        next: () => {
          this.toggleAmountEditMode();
          this.userService.getUserAmount();
        },
      });
    }
  }

  public ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

  public filterByDate(): void {
    this.userService.getUserStatistics(this.startDate, this.endDate);
  }
}
