import { IResponse } from './response';
import { ISpendingCategoryResponse } from './spending-category-response';

export interface ISpendingResponse extends IResponse {
  id: string;
  amount: number;
  comment: string;
  spendingCategoryId: string;
  spendingCategory: ISpendingCategoryResponse;
}
