import { CurrencyCodes } from 'src/app/shared/models/currency-codes';
import { IResponse } from 'src/app/shared/models/response';

export interface IIncomeResponse extends IResponse {
  id: string;
  amount: number;
  comment: string;
  dateAdded: Date;
  currency: CurrencyCodes;
}
