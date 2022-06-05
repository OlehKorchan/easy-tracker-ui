import { IIncomeResponse } from './income-response';

export interface IIncomeListResponse {
  userSalaries: IIncomeResponse[];
  errors: string[];
}
