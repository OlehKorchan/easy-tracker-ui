import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ISpendingCategoryResponse } from 'src/app/modules/category/models/spending-category-response';
import { CategoryService } from 'src/app/modules/category/services/category.service';
import { UserService } from 'src/app/modules/user-statistics/services/user.service';
import { CurrencyCodes } from 'src/app/shared/models/currency-codes';
import { ISpendingRequest } from '../../models/spending-request';
import { ISpendingResponse } from '../../models/spending-response';
import { SpendingService } from '../../services/spending.service';

@Component({
  selector: 'app-spending-form',
  templateUrl: './spending-form.component.html',
  styleUrls: ['./spending-form.component.css'],
})
export class SpendingFormComponent implements OnInit {
  spendingRequest: ISpendingRequest = {
    amount: 0,
    comment: '',
    currency: CurrencyCodes.USD,
    spendingCategoryId: '',
  };
  currencies: string[];
  categories!: ISpendingCategoryResponse[];
  spendingResponse!: ISpendingResponse;

  constructor(
    private _spendingService: SpendingService,
    private dialogRef: MatDialogRef<SpendingFormComponent>,
    public userService: UserService,
    private _categoryService: CategoryService,
  ) {
    this.currencies = userService.getCurrenciesList();
  }

  onSubmit() {
    this._spendingService.create(this.spendingRequest).subscribe({
      next: (response) => {
        this.spendingResponse = response;
        if (!response.errors?.length) {
          this.dialogRef.close('ok');
        }
      },
      error: (error) => console.error(JSON.stringify(error)),
    });
  }

  ngOnInit(): void {
    this._categoryService.getUserCategories().subscribe({
      next: (data) => (this.categories = data),
      error: (error) => console.error(JSON.stringify(error)),
    });
  }
}
