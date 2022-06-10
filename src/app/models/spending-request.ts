import { CurrencyCodes } from './currency-codes';

export interface ISpendingRequest {
  amount: number;
  comment: string;
  currency: CurrencyCodes;
  spendingCategoryId: string;
}
