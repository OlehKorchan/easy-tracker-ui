import { IResponse } from 'src/app/shared/models/response';
import { IIncomeResponse } from './income-response';

export interface IIncomeListResponse extends IResponse {
  userSalaries: IIncomeResponse[];
}
