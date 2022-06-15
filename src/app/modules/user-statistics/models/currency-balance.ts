import { CurrencyCodes } from '../../../shared/models/currency-codes';

export interface ICurrencyBalance {
  id: string;
  amount: number;
  currency: CurrencyCodes;
  userId: string;
}
