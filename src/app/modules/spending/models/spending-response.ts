import { IResponse } from '../../../shared/models/response';
import { ISpendingCategoryResponse } from '../../category/models/spending-category-response';

export interface ISpendingResponse extends IResponse {
  id: string;
  amount: number;
  comment: string;
  spendingCategoryId: string;
  spendingCategory: ISpendingCategoryResponse;
}
