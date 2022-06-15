import { CurrencyCodes } from 'src/app/shared/models/currency-codes';

export interface IUserMainCurrencyRequest {
  newMainCurrencyCode: CurrencyCodes;
  recalculate: boolean;
}
