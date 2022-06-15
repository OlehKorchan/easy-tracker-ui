import { CurrencyCodes } from '../../../shared/models/currency-codes';

export interface IIncomeCreateRequest {
  amount: number;
  comment: string;
  currency: CurrencyCodes;
}
