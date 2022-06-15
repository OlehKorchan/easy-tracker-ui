import { IResponse } from 'src/app/shared/models/response';

export interface IUserAmountResponse extends IResponse {
  amount: number;
}
