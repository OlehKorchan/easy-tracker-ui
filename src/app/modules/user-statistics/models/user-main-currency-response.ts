import { CurrencyCodes } from 'src/app/shared/models/currency-codes';
import { IResponse } from 'src/app/shared/models/response';

export interface IUserMainCurrencyResponse extends IResponse {
  mainCurrency: CurrencyCodes;
}
