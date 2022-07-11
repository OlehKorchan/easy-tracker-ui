import { Component, OnInit } from '@angular/core';
import { ISpendingResponse } from '../../models/spending-response';
import { SpendingService } from '../../services/spending.service';
import { CurrencyCodes } from '../../../../shared/models/currency-codes';

@Component({
  selector: 'app-spendings',
  templateUrl: './spendings.component.html',
  styleUrls: ['./spendings.component.css'],
})
export class SpendingsComponent implements OnInit {
  public spendingsList: ISpendingResponse[] = [];
  public displayedColumns: string[] = ['amount', 'comment', 'category', 'action'];

  public constructor(private spendingService: SpendingService) {}

  public ngOnInit(): void {
    this.spendingService.getAllUserSpendings().subscribe({
      next: (response: ISpendingResponse[]) => {
        this.spendingsList = response;
      },
      error: (error) => console.error(error),
    });
  }

  public toStringCurrencyCode(code: CurrencyCodes): string {
    return CurrencyCodes[code];
  }
}
