import { IResponse } from '../../shared/response';

export interface IRegisterResponse extends IResponse {
  username: string;
  token: string;
  expiresIn: number;
}
