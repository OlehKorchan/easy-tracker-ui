import { IIncomeResponse } from './income-response';
import { IResponse } from './response';

export interface IIncomeListResponse extends IResponse {
  userSalaries: IIncomeResponse[];
}
