import { IResponse } from '../../models/response';

export interface IRegisterResponse extends IResponse {
  username: string;
  token: string;
  expiresIn: number;
}
