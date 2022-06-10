import { CurrencyCodes } from './currency-codes';

export interface ICurrencyBalance {
  id: string;
  amount: number;
  currency: CurrencyCodes;
  userId: string;
}
