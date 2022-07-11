import { IResponse } from '../../../shared/models/response';
import { CurrencyCodes } from '../../../shared/models/currency-codes';

export interface ISpendingResponse extends IResponse {
  id: string;
  amount: number;
  comment: string;
  currency: CurrencyCodes;
  categoryName: string;
}
