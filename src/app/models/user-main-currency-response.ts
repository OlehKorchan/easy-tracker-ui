import { CurrencyCodes } from './currency-codes';
import { IResponse } from './response';

export interface IUserMainCurrencyResponse extends IResponse {
  mainCurrency: CurrencyCodes;
}
