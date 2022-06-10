import { CurrencyCodes } from './currency-codes';

export interface IIncomeCreateRequest {
  amount: number;
  comment: string;
  currency: CurrencyCodes;
}
