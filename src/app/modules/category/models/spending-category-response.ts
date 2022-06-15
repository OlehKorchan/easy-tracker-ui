import { IResponse } from '../../../shared/models/response';
import { ISpendingResponse } from '../../spending/models/spending-response';

export interface ISpendingCategoryResponse extends IResponse {
  id: string;
  imageSrc: string;
  image: string;
  categoryName: string;
  description: string;
  plannedAmount: number;
  spendAmount: number;
  spendings: ISpendingResponse[];
}
