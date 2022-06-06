import { IResponse } from './response';

export interface IIncomeResponse extends IResponse {
  id: string;
  amount: number;
  comment: string;
  dateAdded: Date;
}
