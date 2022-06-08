import { CurrencyCodes } from './currency-codes';

export interface IUserMainCurrencyRequest {
  newMainCurrencyCode: CurrencyCodes;
  recalculate: boolean;
}
