import { CurrencyCodes } from '../../../shared/models/currency-codes';

export interface ISpendingRequest {
  amount: number;
  comment: string;
  currency: CurrencyCodes;
  spendingCategoryId: string;
}
