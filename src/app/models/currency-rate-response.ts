import { CurrencyCodes } from './currency-codes';

export interface ICurrencyRate {
  id: string;
  fromCurrency: CurrencyCodes;
  toCurrency: CurrencyCodes;
  rate: number;
  reverseRate: number;
  userId: string;
}
